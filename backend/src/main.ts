import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CoinsAPI')
    .setDescription('Proxy to fetch coins from coinGecko')
    .addTag('coins')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('coins/docs', app, document);

  app.enableCors({
    origin: [
      'http://localhost:3001',
      'http://192.168.100.184:3001',
      'http://localhost:5173',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", 'data:', 'https:'],
          fontSrc: ["'self'", 'data:', 'https:'],
          connectSrc: [
            "'self'",
            'http://localhost:5000',
            'http://192.168.100.184:5000',
          ],
          objectSrc: ["'none'"],
          baseUri: ["'self'"],
          frameAncestors: ["'none'"],
        },
      },
      crossOriginOpenerPolicy: { policy: 'same-origin' },
      crossOriginEmbedderPolicy: { policy: 'require-corp' },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
