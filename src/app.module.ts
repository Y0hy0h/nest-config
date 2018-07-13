import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "./config.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { defaultConfig } from "./config";

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot(
      // TODO: Replace this with value from ConfigModule's provider.
      (global as any).config.typeOrm || defaultConfig.typeOrm
    )
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

const formattedConfig = JSON.stringify((global as any).config, null, 2);
console.log("Current config is:\n", formattedConfig);
