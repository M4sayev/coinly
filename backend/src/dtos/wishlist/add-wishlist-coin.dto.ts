import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AddWishlistCoinDto {
  @ApiProperty({
    description: 'id of the coin gecko',
    example: 'blah-blah',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'name of the coin',
    example: 'blah-blah',
  })
  @IsString()
  name: string;
}
