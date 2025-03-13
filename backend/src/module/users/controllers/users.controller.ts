import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { User } from "@prisma/client";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get(":email")
  async getUserByEmail(@Param("email") email: string): Promise<User | null> {
    return await this.usersService.getUserById(email);
  }

  @Post("register")
  async createUser(@Body() data: User): Promise<User> {
    return this.usersService.createUser(data);
  }
}
