import { EntityRepository, Repository, MongoEntityManager, MongoRepository } from "typeorm";
import { Associate } from "../entities";

@EntityRepository(Associate)
export class AssociateRepository extends MongoRepository<Associate> {

}
