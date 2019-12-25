import { Param, Body, Controller, Get, Post } from '@nestjs/common';
import { EventsSummaryService } from '../services';

@Controller('/events-summary')
export class EventsSummaryController {
  constructor(
    private readonly eventsSummaryService: EventsSummaryService
  ) { }

  @Post()
  async saveEventsSummary(@Body('data') eventsSummary:any[]): Promise<any> {
    return await this.eventsSummaryService.saveEventsSummary(eventsSummary);
  }

  @Get()
  async getAllEventsSummary() {
    return await this.eventsSummaryService.getAllEventsSummary();
  }
}
