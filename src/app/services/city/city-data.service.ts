import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root',
})
export class CityDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      cities: [
        {
          id: 1,
          name: 'São Paulo',
          description:
            'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          photo: 'here goes a photo',
        },
        {
          id: 2,
          name: 'Rio de Janeiro',
          description:
            'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
          photo: 'here goes a photo',
        },
        {
          id: 3,
          name: 'São Bernardo do Campo',
          description:
            'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
          photo: 'here goes a photo',
        },
      ],
    };
  }
}
