import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";
import { User, Prisma } from "@prisma/client";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}

  async getUserById(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      orderBy: { first_name: "asc" },
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const userExists = await this.prisma.user.findFirst({
      where: { email: data.email },
    });

    if (userExists) {
      throw new BadRequestException("User already exists");
    }

    if (!data.password_hash) {
      throw new BadRequestException("Password hash is required");
    }

    const hashedPassword = await bcrypt.hash(data.password_hash, 10);

    return this.prisma.user.create({
      data: { ...data, password_hash: hashedPassword },
    });
  }

  async login(
    email: string,
    password_hash: string,
  ): Promise<{ user: User; token: string }> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException("Invalid credentials");
    }

    if (!user.password_hash) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const passwordValid = await bcrypt.compare(
      password_hash,
      user.password_hash,
    );

    if (!passwordValid) {
      throw new UnauthorizedException("Invalid credentials");
    }

    const payload = { id: user.id, email: user.email, role: user.role };

    const jwtSecret: string = this.config.get<string>("JWT_SECRET") || "";
    if (!jwtSecret) throw new Error("JWT_SECRET is not defined");

    const token = jwt.sign(payload, jwtSecret, {
      expiresIn: "1h",
    });

    return { user, token };
  }
}
