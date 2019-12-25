import { Entity, PrimaryColumn, ObjectIdColumn, ObjectID, Column } from 'typeorm';
import { Index } from 'typeorm/decorator/Index';

@Entity()
export class EventsSummary {
    @ObjectIdColumn()
    id: ObjectID;

    @Index({ unique: true })
    @PrimaryColumn()
    eventId: number;

    @Column()
    month: string;

    @Column()
    baseLocation: string;

    @Column()
    beneficiaryName: string;

    @Column()
    venueAddress: string;
    
    @Column()
    councilName: string;
    
    @Column()
    project: string;

    @Column()
    category: string;

    @Column()
    eventName: string;

    @Column()
    eventDescription: string;

    @Column()
    eventDate: string;

    @Column()
    totalVolunteers: string;

    @Column()
    totalVolunteerHours: string;

    @Column()
    totalTravelHours: string;

    @Column()
    overallVolunteeringHours: string;

    @Column()
    livesImpacted: string;

    @Column()
    activityType: string;

    @Column()
    status: string;

    @Column()
    pocId: string;

    @Column()
    pocName: string;

    @Column()
    pocContactNumber: string;
}
