import { Injectable } from '@nestjs/common';
import { Associate } from '../entities';
import { AssociateRepository } from "../repositories";

@Injectable()
export class AssociateService {
  constructor(
    private readonly associateRepository: AssociateRepository,
  ) { }

  saveAssociates(associates) {
    if (Array.isArray(associates)) {
      associates.forEach(associate => {
        const { "Associate ID": associateId, Name: name, Designation: desig, Location: loc, BU: bu } = associate;

        const associateEntity = new Associate();
        associateEntity.associateId = associateId;
        associateEntity.name = name;
        associateEntity.designation = desig;
        associateEntity.location = loc;
        associateEntity.bu = bu;

        this.associateRepository.findOneAndUpdate(
          { associateId: associateId },
          { $set: associateEntity },
          { upsert: true }
        )
          .then(res => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }

  async getAllAssociates() {
    return await this.associateRepository.find();
  }
}
