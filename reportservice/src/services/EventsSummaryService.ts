import { Injectable } from '@nestjs/common';
import { EventsSummary } from '../entities';
import { EventsSummaryRepository } from "../repositories";

@Injectable()
export class EventsSummaryService {
  constructor(
    private readonly eventsSummaryRepository: EventsSummaryRepository,
  ) { }

  saveEventsSummary(eventsSummary) {
    if (Array.isArray(eventsSummary)) {
      eventsSummary.forEach(eventSummary => {
        const eventsSummaryEntity = new EventsSummary();
        ({
          'Event ID': eventsSummaryEntity.eventId,
          Month: eventsSummaryEntity.month,
          'Base Location': eventsSummaryEntity.baseLocation,
          'Beneficiary Name': eventsSummaryEntity.beneficiaryName,
          'Venue Address': eventsSummaryEntity.venueAddress,
          'Council Name': eventsSummaryEntity.councilName,
          Project: eventsSummaryEntity.project,
          Category: eventsSummaryEntity.category,
          'Event Name': eventsSummaryEntity.eventName,
          'Event Description': eventsSummaryEntity.eventDescription,
          'Event Date (DD-MM-YY)': eventsSummaryEntity.eventDate,
          'Total no. of volunteers': eventsSummaryEntity.totalVolunteers,
          'Total Volunteer Hours': eventsSummaryEntity.totalVolunteerHours,
          'Total Travel Hours': eventsSummaryEntity.totalTravelHours,
          'Overall Volunteering Hours': eventsSummaryEntity.overallVolunteeringHours,
          'Lives Impacted': eventsSummaryEntity.livesImpacted,
          'Activity Type': eventsSummaryEntity.activityType,
          Status: eventsSummaryEntity.status,
          'POC ID': eventsSummaryEntity.pocId,
          'POC Name': eventsSummaryEntity.pocName,
          'POC Contact Number': eventsSummaryEntity.pocContactNumber
        } = eventSummary);

        this.eventsSummaryRepository.findOneAndUpdate(
          { eventId: eventSummary.eventId },
          { $set: eventsSummaryEntity },
          { upsert: true }
        )
          .then(res => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err.errmsg);
          });
      });
    }
  }

  async getAllEventsSummary() {
    return await this.eventsSummaryRepository.find();
  }
}
