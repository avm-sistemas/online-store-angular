import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { UserModule } from '../user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from '../store/store.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, './', 'frontend')      
    }),
    MongooseModule.forRoot('mongodb://root:mongorootpwd@localhost:27018',{dbName: 'online-store'}),
    UserModule,
    StoreModule
  ],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule {}
