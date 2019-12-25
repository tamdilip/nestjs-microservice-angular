import { EntityRepository, MongoRepository } from "typeorm";
import { EventsInformation } from "../entities";

@EntityRepository(EventsInformation)
export class EventsInformationRepository extends MongoRepository<EventsInformation> {

}
