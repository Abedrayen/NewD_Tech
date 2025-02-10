import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://hellmikhiari:OGlx31zDilu8MOoR@cluster0.xx1da.mongodb.net/?retryWrites=true&w=majority&appName=Cluster/tailored', {
    }),
  ],
  exports: [MongooseModule], 
})
export class DatabaseModule {}
