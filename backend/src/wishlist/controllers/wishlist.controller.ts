import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { WishlistCoin } from 'src/entities/wishlist/wishlist-coin.entity';
import { WishlistService } from '../services/wishlist.service';
import { AddWishlistCoinDto } from 'src/dtos/wishlist/add-wishlist-coin.dto';
import { ApiQuery } from '@nestjs/swagger';
import type { Coin, Currency } from 'src/types/coins/coins.types';

@Controller('wishlist/coins')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get(':id')
  @ApiQuery({ name: 'currency', required: false, example: 'usd' })
  async getOne(
    @Param('id') id: string,
    @Query('currency') currency: Currency,
  ): Promise<Coin[]> {
    return this.wishlistService.getOne(currency, id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<WishlistCoin> {
    return this.wishlistService.deleteCoin(id);
  }

  @Get()
  @ApiQuery({ name: 'currency', required: false, example: 'usd' })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  async getAll(
    @Query('currency') currency: Currency,
    @Query('page') page: number,
  ): Promise<Coin[]> {
    return await this.wishlistService.getCoins(currency, page);
  }

  @Post()
  async create(@Body() addCoinDto: AddWishlistCoinDto) {
    return this.wishlistService.addCoin(addCoinDto);
  }
}
