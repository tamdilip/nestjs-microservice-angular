import { EntityRepository, Repository, MongoRepository } from "typeorm";
import { User } from "../entities";

@EntityRepository(User)
export class UserRepository extends MongoRepository<User> {

}
