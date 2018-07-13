import { Global, Module } from "@nestjs/common";
import { ConnectionOptions } from "typeorm";
import { defaultConfig } from "./config";

export const CentralConfig = "Config";

@Global()
@Module({
  providers: [
    {
      provide: CentralConfig,
      useFactory: () => (global as any).config || defaultConfig
    }
  ],
  exports: [CentralConfig]
})
export class ConfigModule {}

export interface Config {
  output: string;
  typeOrm: ConnectionOptions;
}
