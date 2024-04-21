import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullname: string;

  @Column({ nullable: true })
  phone: string | null;

  @Column({ nullable: true })
  userAvatar: string | null;
}
