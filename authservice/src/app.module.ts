import { Module } from '@nestjs/common';
import { BootModule, Boot } from 'nest-boot';
import { ConsulModule } from 'nest-consul';
import { ConsulConfigModule } from 'nest-consul-config';
import { ConsulServiceModule } from 'nest-consul-service';
import { LoadbalanceModule } from 'nest-consul-loadbalance';
import { FeignModule } from 'nest-feign';
import { NEST_BOOT, NEST_BOOT_PROVIDER } from 'nest-common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GatewayModule } from 'nest-gateway';

import { components, repos } from "./utils/ProviderUtils";
import * as repositories from './repositories';
import * as controllers from './controllers';
import * as services from './services';
import { TypeormLogger } from "./logger";

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        BootModule.register(__dirname, `bootstrap-${process.env.NODE_ENV || 'development'}.yml`),
        ConsulModule.register({ dependencies: [NEST_BOOT] }),
        ConsulConfigModule.register({ dependencies: [NEST_BOOT] }),
        ConsulServiceModule.register({ dependencies: [NEST_BOOT] }),
        LoadbalanceModule.register({ dependencies: [NEST_BOOT] }),
        FeignModule.register({
            dependencies: [],
            axiosConfig: {},
        }),
        GatewayModule.register({ dependencies: [NEST_BOOT] }),
        TypeOrmModule.forRootAsync({
            useFactory: (config: Boot) => ({
                type: config.get('dataSource.type', 'mongodb'),
                host: config.get('dataSource.host', 'localhost'),
                port: config.get('dataSource.port', 27071),
                username: config.get('dataSource.username', 'root'),
                password: config.get('dataSource.password', 'root'),
                database: config.get('dataSource.database', 'hackathon'),
                entities: [__dirname + '/entities/*{.ts,.js}'],
                synchronize: config.get('dataSource.synchronize', false),
                maxQueryExecutionTime: config.get('dataSource.maxQueryExecutionTime', 1000),
                logging: ['error', 'warn'],
                logger: new TypeormLogger(),
            }),
            inject: [NEST_BOOT_PROVIDER],
        }),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600,
            },
        })
    ],
    controllers: components(controllers),
    providers: components(repos(repositories), services)
})
export class AppModule {
}
