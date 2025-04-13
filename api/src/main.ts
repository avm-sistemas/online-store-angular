import { NestFactory } from '@nestjs/core';
import { MainModule } from './modules/main/main.module';
import { ValidationPipe } from '@nestjs/common';
import bodyParser from 'body-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const appOptions = {
    cors: true    
  };
  const app = await NestFactory.create(MainModule, appOptions);  

  app.useGlobalPipes(new ValidationPipe());
  //app.use(bodyParser.json({limit: '50mb'}));
  //app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.setGlobalPrefix('api');
  app.enableCors();

  const swaggerCustomOptions = {
    explorer: false,
    customCss: '.swagger-ui .topbar { background-color: black; } .swagger-ui img { display: none; }',
    customSiteTitle: 'Online Store API',
    customfavIcon: "/assets/logo.png"
  }

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Online Store API')
    .setDescription('')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('docs', app, document, swaggerCustomOptions);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
