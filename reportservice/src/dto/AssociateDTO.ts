import { IsNotEmpty } from 'class-validator';

export class AssociateDTO {
  readonly 'Associate ID': string;
  readonly Name: string;
  readonly Designation: string;
  readonly Location: string;
  readonly BU: string;
}
