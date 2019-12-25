import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventsInformationService } from '../services';


@Controller('/events-information')
export class EventsInformationController {
  constructor(
    private readonly eventsInformationService: EventsInformationService
  ) { }

  @Post()
  async createAssociates(@Body('data') eventsInformation:any[]): Promise<any> {
    return await this.eventsInformationService.saveEventsInformation(eventsInformation);
  }

  @Get()
  async getAssociates() {
    return await this.eventsInformationService.getAllEventsInformation();
  }
}
