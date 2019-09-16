import faker from 'faker';
import { Mapper } from './CustomMap';

export class Company implements Mapper {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `<h4>Company Name: ${this.companyName}</h4>
    <h5><em>"${this.catchPhrase}"</em></h5>`;
  }
}
