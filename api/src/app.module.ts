import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { ConfigModule, ConfigService } from './config';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useExisting: ConfigService,
    }),
    UsersModule,
    BooksModule,
    FavoritesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {
  }
}
