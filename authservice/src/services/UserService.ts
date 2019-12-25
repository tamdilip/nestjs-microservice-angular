import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';
import { User } from '../entities';
import { CreateUserDto } from '../dto';
import { UserRepository } from "../repositories";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) { }

  async findByCredentials(
    emailAddress: string,
    password: string,
  ): Promise<User> {
    const conditions = {
      email: emailAddress,
      password: crypto.createHmac('sha256', password).digest('hex'),
    };
    return await this.userRepository.findOne(conditions);
  }

  async findByEmail(emailAddress: string): Promise<User> {
    const conditions = {
      email: emailAddress,
    };
    return await this.userRepository.findOne(conditions);
  }

  async findRoleByEmail(emailAddress: string): Promise<any> {
    const conditions = {
      email: emailAddress,
    };
    const userObject = await this.userRepository.findOne(conditions);

    return userObject.role;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, role } = createUserDto;

    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;
    newUser.role = role;

    return await this.userRepository.save(newUser)
      .then(
      (res) => res,
      (err) => err ? err.errmsg : "Database exception !!"
      );
  }
}
