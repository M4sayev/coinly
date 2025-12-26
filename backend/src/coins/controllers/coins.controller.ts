import { Controller, Get, Query } from '@nestjs/common';
import type { Currency } from 'src/types/coins/coins.types';
import { CoinsService } from '../services/coins.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Get('market')
  @ApiQuery({ name: 'currency', required: false, example: 'usd' })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search by coin name',
  })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  async getAll(
    @Query('currency') currency?: Currency,
    @Query('search') search?: string,
    @Query('page') page?: string,
  ) {
    const pageNum = page ? parseInt(page) : 1;
    return this.coinsService.getCoins(currency, search, pageNum);
  }
}
