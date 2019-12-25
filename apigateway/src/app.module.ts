import { Module } from '@nestjs/common';
import { BootModule } from 'nest-boot';
import { ConsulModule } from 'nest-consul';
import { ConsulConfigModule } from 'nest-consul-config';
import { ConsulServiceModule } from 'nest-consul-service';
import { LoadbalanceModule } from 'nest-consul-loadbalance';
import { NEST_BOOT } from 'nest-common';
import { GatewayModule } from 'nest-gateway';

import { components } from "./utils/ProviderUtils";
import * as controllers from './controllers';


@Module({
    imports: [
        BootModule.register(__dirname, `bootstrap-${ process.env.NODE_ENV || 'development' }.yml`),
        ConsulModule.register({ dependencies: [NEST_BOOT] }),
        ConsulConfigModule.register({ dependencies: [NEST_BOOT] }),
        ConsulServiceModule.register({ dependencies: [NEST_BOOT] }),
        LoadbalanceModule.register({ dependencies: [NEST_BOOT] }),
        GatewayModule.register({ dependencies: [NEST_BOOT] })
    ],
    controllers: components(controllers),
    providers: components()
})
export class AppModule {
}
