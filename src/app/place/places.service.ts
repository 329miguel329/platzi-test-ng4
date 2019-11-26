import { Injectable } from '@angular/core';

@Injectable()
export class PlacesService {
  places = [
    {id: 1, name: 'Platzi HQ'},
    {id: 2, name: 'Platzi HD'}
  ];

  getPlaces() {
    return this.places;
  }
}
