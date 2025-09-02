// // server/data-source.ts
// import { DataSource } from "typeorm";
// import { User } from "./entity/User";
// import { StoreAccess } from "./entity/StoreAccess";
// import { Complaint } from "./entity/Complaint";

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "postgres",
//   password: "xe4312",
//   database: "MTGT",
//   synchronize: false, // set to true only in dev (or use migrations)
//   logging: true,
//   entities: [User, StoreAccess,Complaint],
// });


// server/data-source.ts
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { StoreAccess } from "./entity/StoreAccess";
import { Complaint } from "./entity/Complaint";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [User, StoreAccess, Complaint],
});