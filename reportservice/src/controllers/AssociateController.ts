import { Param, Body, Controller, Get, NotFoundException, Post, UseGuards } from '@nestjs/common';
import { AssociateService } from '../services';
import { AssociateDTO } from '../dto';

@Controller('/associates')
export class AssociateController {
  constructor(
    private readonly associateService: AssociateService
  ) { }

  @Post()
  async createAssociates(@Body('data') associates:AssociateDTO[]): Promise<any> {
    return await this.associateService.saveAssociates(associates);
  }

  @Get()
  async getAssociates() {
    return await this.associateService.getAllAssociates();
  }
}
