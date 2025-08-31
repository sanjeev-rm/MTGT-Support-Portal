// server/entity/StoreAccess.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity({ name: "store_access" })
export class StoreAccess {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text" })
  type!: string;

  @Column()
  user_code!: number;

  @ManyToOne(() => User, (user) => user.accesses)
  @JoinColumn({ name: "user_code" })
  user!: User;

  @Column()
  store_code!: string;

  @Column()
  week_off!: string;

  @Column("int")
  d21!: number;

  @Column("int")
  d22!: number;

  @Column("int")
  d23!: number;

  @Column("int")
  d24!: number;

  @Column("int")
  d25!: number;

  @Column("int")
  d26!: number;

  @Column("int")
  d27!: number;

  @Column("int")
  d28!: number;

  @Column("int")
  d29!: number;

  @Column("int")
  d30!: number;

  @Column("int")
  d31!: number;

  @Column("int")
  d1!: number;

  @Column("int")
  d2!: number;

  @Column("int")
  d3!: number;

  @Column("int")
  d4!: number;

  @Column("int")
  d5!: number;

  @Column("int")
  d6!: number;

  @Column("int")
  d7!: number;

  @Column("int")
  d8!: number;

  @Column("int")
  d9!: number;

  @Column("int")
  d10!: number;

  @Column("int")
  d11!: number;

  @Column("int")
  d12!: number;

  @Column("int")
  d13!: number;

  @Column("int")
  d14!: number;

  @Column("int")
  d15!: number;

  @Column("int")
  d16!: number;

  @Column("int")
  d17!: number;

  @Column("int")
  d18!: number;

  @Column("int")
  d19!: number;

  @Column("int")
  d20!: number;
  
}
