import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces';
import { UserService } from './UserService';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async createToken(email: string) {
    const user: JwtPayload = { email };
    const token = this.jwtService.sign(user);
    const role = await this.userService.findRoleByEmail(email);

    return {
      expiresIn: 3600,
      token,
      role
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return this.userService.findByEmail(payload.email);
  }
}
