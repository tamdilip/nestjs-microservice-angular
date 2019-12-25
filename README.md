# nestjs-microservice-angular
A NodeJS based microservice built with NestJS Framework and NestCloud modules for a hackathon to design a dashboard for admin portal to upload different excel data and represent them through infographic charts/graphs.

Overview of things I have used:
* [NestJS](https://docs.nestjs.com/)
* [Nest Cloud](https://github.com/nest-cloud/nestcloud-consul-starter)
* [MongoDB - mlab](https://mlab.com/welcome/)
* [TypeORM](https://typeorm.io/#/)
* [Angular](https://angular.io/)

### Installation

1. Requires [Consul](https://releases.hashicorp.com/consul/1.6.2/consul_1.6.2_windows_amd64.zip) registry service to run.

```sh
        $ consul agent -dev
```

2. Install the dependencies and start the apigateway service first.

```sh
        $ cd apigateway
        $ npm i
        $ npm run start
```

3. Install the dependencies, update the database credentials in `bootstrap-development.yml` and start the authentication service.

```sh
        $ cd authservice
        $ npm i
        $ npm run start
```

4. Install the dependencies and start the filemanagement service.

```sh
        $ cd filemanagementservice
        $ npm i
        $ npm run start
```

5. Install the dependencies, update the database credentials in `bootstrap-development.yml` and start the report metrics service.

```sh
        $ cd reportservice
        $ npm i
        $ npm run start
```

6. Install the angular-cli, dependencies and start the angular frontend.

```sh
        $ cd frontend
        $ npm i
        $ ng serve
```





#### Post installation

Hit - http://localhost:8500/ 
Check the health of all 5 service registered in consul discovery.
![Image of Consul service discovery](https://github.com/tamdilip/nestjs-microservice-angular/raw/master/frontend/src/assets/consul.png)

Hit - http://localhost:4200/ 
Create a user (via postman for now) and login to dasboard UI.
![Image of Angular Login UI](https://github.com/tamdilip/nestjs-microservice-angular/raw/master/frontend/src/assets/login.png)

**Happy coding :) !!**

