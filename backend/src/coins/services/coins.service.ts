import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import type { Coin, Currency } from 'src/types/coins/coins.types';

@Injectable()
export class CoinsService {
  private readonly baseUrl = 'https://api.coingecko.com/api/v3';

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  private get getGeckoHeaders() {
    return {
      'x-cg-demo-api-key': this.configService.get<string>('CG_API_KEY'),
    };
  }

  async makeRequest(url: string): Promise<any> {
    try {
      const headers = this.getGeckoHeaders;
      const { data } = await firstValueFrom(
        this.httpService.get(url, { headers }),
      );
      return data;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Failed to fetch coin data');
    }
  }

  async getCoinsByIds(
    currency: Currency = 'btc',
    ids: string,
    page: number = 1,
  ): Promise<Coin[]> {
    if (!ids) return [];

    const params = new URLSearchParams({
      vs_currency: currency,
      ids,
      order: 'market_cap_desc',
      per_page: '45',
      page: page.toString(),
      sparkline: 'false',
    });

    return await this.makeRequest(
      `${this.baseUrl}/coins/markets?${params.toString()}`,
    );
  }

  async getCoins(
    currency: Currency = 'btc',
    search?: string,
    page = 1,
  ): Promise<Coin[]> {
    if (search) {
      const data = await this.makeRequest(
        `${this.baseUrl}/search?query=${encodeURIComponent(search)}`,
      );

      const ids = data.coins.map((coin: Coin) => coin.id).join(',');

      if (!ids) return [];

      const params = new URLSearchParams({
        vs_currency: currency,
        ids,
        order: 'market_cap_desc',
        per_page: '45',
        page: page.toString(),
        sparkline: 'false',
      });

      const marketData = await this.makeRequest(
        `${this.baseUrl}/coins/markets?${params.toString()}`,
      );

      return marketData;
    }

    const stdParams = new URLSearchParams({
      vs_currency: currency,
      order: 'market_cap_desc',
      per_page: '45',
      page: page.toString(),
      sparkline: 'false',
    });

    const defaultUrl = `${this.baseUrl}/coins/markets?${stdParams.toString()}`;

    const data = await this.makeRequest(defaultUrl);
    return data;
  }

  async getCoin(
    id: string,
    currency: Currency = 'btc',
    timeInterval: number = 1,
  ) {
    const data = await this.makeRequest(
      `${this.baseUrl}/coins/${id}/market_chart?vs_currency=${currency}&days=${timeInterval}`,
    );

    return data;
  }
}
