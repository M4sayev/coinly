import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { Currency } from 'src/types/coins/coins.types';

@Injectable()
export class CoinsService {
  private readonly baseUrl = 'https://api.coingecko.com/api/v3/';
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async getCoins(currency: Currency = 'btc', search?: string, page = 1) {
    try {
      const apiKey = this.configService.get<string>('CG_API_KEY');
      const headers = { 'x-cg-demo-api-key': apiKey };

      if (search) {
        const { data } = await firstValueFrom(
          this.httpService.get(
            `${this.baseUrl}search?query=${encodeURIComponent(search)}`,
            { headers },
          ),
        );

        const ids = data.coins.map((coin: any) => coin.id).join(',');

        if (!ids) return [];

        const { data: marketData } = await firstValueFrom(
          this.httpService.get(
            `${this.baseUrl}coins/markets?vs_currency=${currency}&ids=${ids}&order=market_cap_desc&per_page=45&page=${page}&sparkline=false`,
            { headers },
          ),
        );

        return marketData;
      }

      const defaultUrl = `${this.baseUrl}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=45&page=${page}&sparkline=false`;
      const { data } = await firstValueFrom(
        this.httpService.get(defaultUrl, { headers }),
      );

      return data;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Failed to fetch market data');
    }
  }
}
