import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // changing request for sorting and filters
        let request = context.switchToHttp().getRequest();
        request.query.pageOptions = {page: 0, limit: 10};
        const { pageOptions, ...filters} = request.query;
        if(Object.keys(request.query).length > 1) {
            if (filters.hasOwnProperty('_sort')) {
                delete filters._sort;
                filters.sort = {};
                const queries = filters._sort.split(',');
                for(let i = 0; i < queries.length; i++) {
                    let key = queries[i];
                    let orderBy = 1;
                    if(key.charAt(0) == '-') {
                        key = key.substring(1);
                        orderBy = -1;
                    }
                    filters.sort[key] = orderBy;
                }
            } else {
                filters.sort = {_id: -1};
            }
            if (filters.hasOwnProperty('_page')) {
                const limit = filters['_limit'] ? Number(filters['_limit']) : 10;
                request.query.pageOptions = {page: request.query._page || 0, limit};
                delete filters['_page'];
                delete filters['_limit'];
            }
            Object.assign(request.query, { filters, sort: filters.sort });
            delete request.query.filters['sort'];
        }        
        return next.handle();
  }
}