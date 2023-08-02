import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function swaggerDefintion(app: INestApplication) {
    const document = new DocumentBuilder().addBearerAuth().build();
    SwaggerModule.setup('/documentation', app, SwaggerModule.createDocument(app, document));
}