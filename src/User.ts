import faker from 'faker';
import { Mapper } from './CustomMap';

export class User implements Mapper {
  firstName: string;
  lastName: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `User Name: ${this.firstName} ${this.lastName}`;
  }
}
