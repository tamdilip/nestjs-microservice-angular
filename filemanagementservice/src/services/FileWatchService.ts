import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { xlsx2MongoData } from 'mongo-xlsx';
import { MetricsClient } from '../clients';

@Injectable()
export class UserFileWatchService {
  private readonly uploadDirectory = './uploads/';
  constructor(
    private readonly metricsClient: MetricsClient
  ) {
    this.startWatch();
  }

  async startWatch() {
    const watchDir = this.uploadDirectory;
    !fs.existsSync(watchDir) && fs.mkdirSync(watchDir);
    fs.watch(watchDir, (eventType, filename) => {
      if (filename) {
        const validFile = ['Associate Details.xlsx', 'Hackathon Event Information.xlsx', 'Hackathon Events Summary.xlsx'].indexOf(filename) !== -1;
        if (validFile) {
          console.log('File changes - ' + filename);
          xlsx2MongoData(watchDir + filename, null, (err, mongoData) => {
            if (filename === 'Associate Details.xlsx') {
              this.saveAssociates(mongoData);
            } else if (filename === 'Hackathon Event Information.xlsx') {
              this.saveEventsInformation(mongoData[0]);
            } else if (filename === 'Hackathon Events Summary.xlsx') {
              this.saveEventsSummary(mongoData);
            }
          });
        }
      }
    });
  }

  async saveAssociates(associates) {
    this.metricsClient.saveAssociates(associates).then(res => {
      console.log(res);
    })
      .catch(err => {
        console.log(err);
      });
  }

  async saveEventsSummary(eventsSummary) {
    this.metricsClient.saveEventsSummary(eventsSummary).then(res => {
      console.log(res);
    })
      .catch(err => {
        console.log(err);
      });
  }

  async saveEventsInformation(eventsInformation) {
    this.metricsClient.saveEventsInformation(eventsInformation).then(res => {
      console.log(res);
    })
      .catch(err => {
        console.log(err);
      });
  }
}
