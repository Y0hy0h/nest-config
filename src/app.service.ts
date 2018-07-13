import { Inject, Injectable } from "@nestjs/common";
import { Config } from "./config.module";

@Injectable()
export class AppService {
  constructor(@Inject("Config") private config: Config) {}

  root(): string {
    return this.config.output;
  }
}
