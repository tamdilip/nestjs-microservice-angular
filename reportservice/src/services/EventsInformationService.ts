import { Injectable } from '@nestjs/common';
import { EventsInformation } from '../entities';
import { EventsInformationRepository } from "../repositories";

@Injectable()
export class EventsInformationService {
  constructor(
    private readonly eventsInformationRepository: EventsInformationRepository,
  ) { }

  saveEventsInformation(eventsInformation) {
    if (Array.isArray(eventsInformation)) {
      eventsInformation.forEach(eventInformation => {
        const eventsInformationEntity = new EventsInformation();
        ({
          'Event ID': eventsInformationEntity.eventId,
          'Base Location': eventsInformationEntity.baseLocation,
          'Beneficiary Name': eventsInformationEntity.beneficiaryName,
          'Council Name': eventsInformationEntity.councilName,
          'Event Name': eventsInformationEntity.eventName,
          'Event Description': eventsInformationEntity.eventDescription,
          'Event Date (DD-MM-YY)': eventsInformationEntity.eventDate,
          'Employee ID': eventsInformationEntity.employeeId,
          'Employee Name': eventsInformationEntity.employeeName,
          'Volunteer Hours': eventsInformationEntity.volunteerHours,
          'Travel Hours': eventsInformationEntity.travelHours,
          'Lives Impacted': eventsInformationEntity.livesImpacted,
          'Business Unit': eventsInformationEntity.businessUnit,
          Status: eventsInformationEntity.status,
          'IIEP ': eventsInformationEntity.IIEP
        } = eventInformation);

        this.eventsInformationRepository.find({ eventId: eventInformation.eventId })
          .then(res => {
            this.eventsInformationRepository.find({ employeeId: eventsInformationEntity.employeeId })
              .then(res => {
                let newEventsInformationEntity = new EventsInformation();
                ({ ...newEventsInformationEntity } = res[0])
                const id = newEventsInformationEntity.id;
                if (id) {
                  eventsInformationEntity.id = id;
                }
                this.eventsInformationRepository.save(eventsInformationEntity).then(
                  (res) => res,
                  (err) => err
                );
              }).catch((err) => err);
          })
          .catch((err) => err);
      });
    }
  }

  async getAllEventsInformation() {
    return await this.eventsInformationRepository.find();
  }
}
