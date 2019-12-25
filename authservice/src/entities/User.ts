import { Entity, PrimaryGeneratedColumn, PrimaryColumn, ObjectIdColumn, ObjectID, Column, BeforeInsert } from 'typeorm';
import { IsEmail } from 'class-validator';
import * as crypto from 'crypto';
import { Index } from 'typeorm/decorator/Index';

@Entity('user')
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Index({ unique: true })
    @Column()
    @IsEmail()
    email: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }
}
