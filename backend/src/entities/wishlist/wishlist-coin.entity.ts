import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class WishlistCoin {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}
