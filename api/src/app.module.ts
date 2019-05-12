import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { ConfigModule, ConfigService } from './config';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [
    ConfigModule,
    // https://github.com/nestjs/nest/issues/530#issuecomment-415690676
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useExisting: ConfigService,
    }),
    UsersModule,
    BooksModule,
    FavoritesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
