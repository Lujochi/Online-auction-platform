import { Controller, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "@prisma/client";

@Controller("payments")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() data: User): Promise<User> {
    return this.usersService.createUser(data);
  }
}
