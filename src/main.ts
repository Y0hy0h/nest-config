import { NestFactory } from "@nestjs/core";
import { Config } from "./config.module";
import { defaultConfig } from "./config";

// Overwrite a field of the default config.
const customizedConfig = { ...defaultConfig, output: "I am customized." };
bootstrap(customizedConfig);

async function bootstrap(config: Config) {
  (global as any).config = config;
  // Import needs to happen after global.config has been set,
  // because the decorators are evaluated during import.
  const { AppModule } = await import("./app.module");
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
