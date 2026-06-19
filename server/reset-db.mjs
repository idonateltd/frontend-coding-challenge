import { copyFileSync } from "node:fs";

const seedFile = new URL("./db.seed.json", import.meta.url);
const databaseFile = new URL("./db.json", import.meta.url);

copyFileSync(seedFile, databaseFile);
