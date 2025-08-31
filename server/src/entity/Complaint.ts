import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

@Entity({name:"complaint"})
@Unique(['user_code', 'store_code']) 
export class Complaint {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  user_code!: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_code' })
  user!: User;

  @Column()
  store_code!: string;

  @Column({ type: 'enum', enum: ['EFOS', 'Coverage'] })
  type!: 'EFOS' | 'Coverage';

  @Column()
  reason!: string;

  @CreateDateColumn({ name: 'date' })
  date!: Date;

}