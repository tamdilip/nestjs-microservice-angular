import { Injectable } from "@nestjs/common";
import { Post, Body, Get, Loadbalanced } from "@nestcloud/feign";

@Injectable()
@Loadbalanced('hackathon-metrics-service')
export class MetricsClient {
    @Post('/associates')
    async saveAssociates(@Body('data') associates: any): Promise<any> {
    }

    @Post('/events-summary')
    async saveEventsSummary(@Body('data') evnetsSummary: any): Promise<any> {
    }

    @Post('/events-information')
    async saveEventsInformation(@Body('data') evnetsInformation: any): Promise<any> {
    }
}
