import { Module } from "@nestjs/common";
import { UsersModule } from "./module/users/users.module";
import { ConfigModule } from "@nestjs/config";
@Module({
  imports: [UsersModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
