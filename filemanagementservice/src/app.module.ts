import { Module } from '@nestjs/common';
import { BootModule, Boot } from 'nest-boot';
import { ConsulModule } from 'nest-consul';
import { ConsulConfigModule } from 'nest-consul-config';
import { ConsulServiceModule } from 'nest-consul-service';
import { LoadbalanceModule } from '@nestcloud/consul-loadbalance';
import { NEST_BOOT, NEST_CONSUL_LOADBALANCE } from 'nest-common';
import { FeignModule } from '@nestcloud/feign';

import { components } from "./utils/ProviderUtils";
import * as controllers from './controllers';
import * as services from './services';
import * as clients from './clients';

@Module({
    imports: [
        BootModule.register(__dirname, `bootstrap-${process.env.NODE_ENV || 'development'}.yml`),
        ConsulModule.register({ dependencies: [NEST_BOOT] }),
        ConsulConfigModule.register({ dependencies: [NEST_BOOT] }),
        ConsulServiceModule.register({ dependencies: [NEST_BOOT] }),
        LoadbalanceModule.register({ dependencies: [NEST_BOOT] }),
        FeignModule.register({ dependencies: [NEST_CONSUL_LOADBALANCE] })
    ],
    controllers: components(controllers),
    providers: components(services, clients)
})
export class AppModule {
}
