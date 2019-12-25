import { Param, Body, Controller, Get, NotFoundException, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../guards';
import { Roles } from '../decorators';
import { AuthService, UserService } from '../services';
import { RequestTokenDto, CreateUserDto } from '../dto';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) { }

  @Post('login')
  async requestToken(@Body() requestTokenDto: RequestTokenDto): Promise<any> {
    const user = await this.userService.findByCredentials(
      requestTokenDto.email,
      requestTokenDto.password,
    );

    if (!user) {
      throw new NotFoundException(
        'No user found with the email or password provided.',
      );
    }

    return await this.authService.createToken(user.email);
  }

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return await this.userService.create(createUserDto);
  }
  
  @Get('user/:email')
  /* @UseGuards(AuthGuard(), RolesGuard)
  @Roles('user') */
  async getUserObject(@Param('email') email) {
    return await this.userService.findRoleByEmail(email);
  }

  @Get('data')
  @UseGuards(AuthGuard(), RolesGuard)
  @Roles('user')
  //@UseGuards(RolesGuard)
  findAll() {
    return {
      message: 'You are authenticated.',
    };
  }
}
