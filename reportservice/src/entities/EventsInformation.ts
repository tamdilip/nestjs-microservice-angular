import { Entity, ObjectIdColumn, ObjectID, Column } from 'typeorm';

@Entity()
export class EventsInformation {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    eventId: string;

    @Column()
    baseLocation: string;

    @Column()
    beneficiaryName: string;

    @Column()
    councilName: string;

    @Column()
    eventName: string;

    @Column()
    eventDescription: string;

    @Column()
    eventDate: string;

    @Column()
    employeeId: number;

    @Column()
    employeeName: string;

    @Column()
    volunteerHours: string;

    @Column()
    travelHours: string;

    @Column()
    livesImpacted: string;

    @Column()
    businessUnit: string;

    @Column()
    status: string;

    @Column()
    IIEP: string;
}
