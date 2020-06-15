import Database from "./postgres";
import { log, readDemoEnv } from "./shared";

const USERS = {
  id: "INT NOT NULL PRIMARY KEY",
  first_name: "VARCHAR(191) NOT NULL",
  last_name: "VARCHAR(191) NOT NULL",
  email: "VARCHAR(191) NOT NULL",
  gender: "VARCHAR(191)",
  ip_address: "VARCHAR(191)",
  avatar: "VARCHAR(191)",
  language: "VARCHAR(191)",
  deactivated: "BOOLEAN",
};

const PURCHASES = {
  id: "INT NOT NULL PRIMARY KEY",
  user_id: "INT NOT NULL",
  item: "VARCHAR(191) NOT NULL",
  category: "VARCHAR(191) NOT NULL",
  price: "DECIMAL",
  state: "VARCHAR(191)",
};

export default async function (vargs) {
  log(vargs, 0, "Adding Sample Data");

  const env = readDemoEnv();
  const connectionString = env.POSTGRES_DEMO_URL;

  log(vargs, 1, "POSTGRES_DEMO_URL:", connectionString);
  const db = new Database(vargs, connectionString);

  await db.connect();
  await db.createCsvTable("users", "id", USERS, true, true);
  await db.createCsvTable("purchases", "user_id", PURCHASES, true, false);
  await db.disconnect();
}
