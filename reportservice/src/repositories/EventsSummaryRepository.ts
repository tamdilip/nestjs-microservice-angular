import { EntityRepository, Repository, MongoEntityManager, MongoRepository } from "typeorm";
import { EventsSummary } from "../entities";

@EntityRepository(EventsSummary)
export class EventsSummaryRepository extends MongoRepository<EventsSummary> {

}
