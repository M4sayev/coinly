import { Controller, Get, Param, Query } from '@nestjs/common';
import { CoinsService } from '../services/coins.service';
import { ApiQuery } from '@nestjs/swagger';
import type { Currency } from 'src/types/coins/coins.types';

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

  @Get(':coinID')
  @ApiQuery({
    name: 'currency',
    required: false,
    description: 'the currency in which the coin shoud be',
  })
  @ApiQuery({
    name: 'timeInterval',
    required: false,
    description: 'time interval(days) within which the data is retrieved',
  })
  async getOneCoin(
    @Param('coinID') coinID: string,
    @Query('currency') currency?: Currency,
    @Param('timeInterval') timeInterval?: number,
  ) {
    return this.coinsService.getCoin(coinID, currency, timeInterval);
  }
}
