// server/data-source.ts
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { StoreAccess } from "./entity/StoreAccess";
import { Complaint } from "./entity/Complaint";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "xe4312",
  database: "MTGT",
  synchronize: false, // set to true only in dev (or use migrations)
  logging: true,
  entities: [User, StoreAccess,Complaint],
});
