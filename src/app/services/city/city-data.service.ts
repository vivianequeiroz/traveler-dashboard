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
          photo: 'here goes a photo',
          description:
            'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
        },
        {
          id: 2,
          name: 'Rio de Janeiro',
          photo: 'here goes a photo',
          description:
            'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
        },
        {
          id: 3,
          name: 'São Bernardo do Campo',
          photo: 'here goes a photo',
          description:
            'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
        },
      ],
    };
  }
}
