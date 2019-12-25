import { Entity, PrimaryColumn, ObjectIdColumn, ObjectID, Column } from 'typeorm';
import { Index } from 'typeorm/decorator/Index';

@Entity()
export class Associate {
    @ObjectIdColumn()
    id: ObjectID;

    @Index({ unique: true })
    @PrimaryColumn()
    associateId: number;

    @Column()
    name: string;

    @Column()
    designation: string;

    @Column()
    location: string;

    @Column()
    bu: string;

}
