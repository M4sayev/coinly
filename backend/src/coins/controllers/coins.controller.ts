import { Controller, Get, Param, Query } from '@nestjs/common';
import { CoinsService } from '../services/coins.service';
import { ApiQuery } from '@nestjs/swagger';
import type { Currency } from 'src/types/coins/coins.types';
import { currencySwaggerOptions } from 'src/swagger/template/template.descriptions';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) {}

  @Get('market')
  @ApiQuery(currencySwaggerOptions)
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

  @Get(':coinID/analytics')
  @ApiQuery(currencySwaggerOptions)
  @ApiQuery({
    name: 'timeInterval',
    required: false,
    description: 'time interval(days) within which the data is retrieved',
  })
  async getOneCoinPrices(
    @Param('coinID') coinID: string,
    @Query('currency') currency?: Currency,
    @Param('timeInterval') timeInterval?: number,
  ) {
    return this.coinsService.getCoinGraph(coinID, currency, timeInterval);
  }

  @Get(':coinID')
  @ApiQuery(currencySwaggerOptions)
  async getOneCoin(
    @Param('coinID') coinID: string,
    @Query('currency') currency?: Currency,
  ) {
    return this.coinsService.getSingleCoin(coinID, currency);
  }
}
