import { Body, Controller, Get, Post, Query } from "@nestjs/common";

@Controller('/health')
export class CommonController {
    constructor() { }

    @Get()
    async checkServiceHealth() {
        return "Alive !!";
    }
}
