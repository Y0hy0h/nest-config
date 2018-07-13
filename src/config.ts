import { Config } from "./config.module";

export const defaultConfig: Config = {
  output: "I am the default config",
  typeOrm: {
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'config-db',
    synchronize: true,
  }
};
