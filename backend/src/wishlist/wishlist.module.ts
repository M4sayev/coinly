import { Module } from '@nestjs/common';
import { WishlistController } from './controllers/wishlist.controller';
import { WishlistService } from './services/wishlist.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishlistCoin } from 'src/entities/wishlist/wishlist-coin.entity';
import { CoinsModule } from 'src/coins/coins.module';

@Module({
  imports: [TypeOrmModule.forFeature([WishlistCoin]), CoinsModule],
  controllers: [WishlistController],
  providers: [WishlistService],
})
export class WishlistModule {}
