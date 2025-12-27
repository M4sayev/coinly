import { Module } from '@nestjs/common';
import { CoinsController } from './controllers/coins.controller';
import { CoinsService } from './services/coins.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CoinsController],
  providers: [CoinsService],
  exports: [CoinsService],
})
export class CoinsModule {}
