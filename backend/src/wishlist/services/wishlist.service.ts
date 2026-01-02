import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoinsService } from 'src/coins/services/coins.service';
import { AddWishlistCoinDto } from 'src/dtos/wishlist/add-wishlist-coin.dto';
import { WishlistCoin } from 'src/entities/wishlist/wishlist-coin.entity';
import { Currency } from 'src/types/coins/coins.types';
import { Repository } from 'typeorm';

@Injectable()
export class WishlistService {
  constructor(
    @InjectRepository(WishlistCoin)
    private readonly wishlistRepository: Repository<WishlistCoin>,
    private readonly coinsService: CoinsService,
  ) {}

  async getCoins(
    currency: Currency = 'btc',
    page: number = 1,
  ): Promise<WishlistCoin[]> {
    const wishlistCoins = await this.wishlistRepository.find();

    const ids = wishlistCoins.map((coin) => coin.id).join(',');

    return this.coinsService.getCoinsByIds(currency, ids, page);
  }

  async getOne(currency: Currency, id: string): Promise<WishlistCoin> {
    const coin = await this.wishlistRepository.findOneBy({ id });

    if (!coin)
      throw new NotFoundException(
        `Coin with id ${id} not found in the wishlist`,
      );

    const coinData = this.coinsService.getCoinsByIds(currency, id);

    return coinData;
  }

  async deleteCoin(id: string): Promise<WishlistCoin> {
    const coin = await this.wishlistRepository.findOneBy({ id });

    if (!coin)
      throw new NotFoundException(`Wishlist coin with id ${id} not found`);

    await this.wishlistRepository.remove(coin);

    return coin;
  }

  async addCoin(addWishlistCoinDto: AddWishlistCoinDto): Promise<WishlistCoin> {
    return await this.wishlistRepository.save(addWishlistCoinDto);
  }
}
