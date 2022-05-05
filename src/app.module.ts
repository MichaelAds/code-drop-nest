import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://michaelads:784512@cluster0.icv0f.mongodb.net/test'), UsersModule],
  controllers: [],
  providers: [ ],
})
export class AppModule {}
