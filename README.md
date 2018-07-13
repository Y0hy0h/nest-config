# nest-config

How to inject a configuration into a Nest app?

The config interface is defined in `config.module.ts`. When I have a customized
config `myConfig`, I want to inject it into the app when I call `bootstrap()`
from `main.ts`.

Currently, there is a lot of bad stuff happening with `global`s and duplication,
instead of everything getting the config from `ConfigModule`'s provider. See
`app.module.ts` for a `// TODO` comment marking the line that is the primary
culprit.

Do you have a nice way of injecting the config into the app? For more information,
you can read issues [#863](https://github.com/nestjs/nest/issues/863) and 
[#530](https://github.com/nestjs/nest/issues/530) (additionally 
[#671](https://github.com/nestjs/nest/issues/671)).

## Run the app
You need to launch a MongoDB. Then you can `yarn start:dev`.
