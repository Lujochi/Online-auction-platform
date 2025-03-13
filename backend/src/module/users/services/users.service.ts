import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { User, Prisma } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUserById(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      orderBy: {
        first_name: "asc",
      },
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const userExists = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    return this.prisma.user.create({
      data,
    });
  }
}
