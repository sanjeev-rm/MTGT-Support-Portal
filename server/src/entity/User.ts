// server/entity/User.ts
import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { StoreAccess } from "./StoreAccess";

@Entity({ name: "users" })
export class User {
  @PrimaryColumn("bigint")
  user_code!: number;

  @Column()
  channel!: string;

  @OneToMany(() => StoreAccess, (access) => access.user)
  accesses!: StoreAccess[];
}
