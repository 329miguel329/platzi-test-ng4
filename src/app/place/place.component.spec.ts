import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';
import { PlacesService } from './places.service';

describe('PlaceComponent', () => {
  // let component: PlaceComponent;
  // let fixture: ComponentFixture<PlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceComponent]
    });
  });

  it('Should create the app', () => {
    const fixture = TestBed.createComponent(PlaceComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should have the same places as the service', () => {
    const fixture = TestBed.createComponent(PlaceComponent);
    const app = fixture.debugElement.componentInstance;
    const placeService = fixture.debugElement.injector.get(PlacesService);
    expect(app.places).toEqual(placeService.places);
  });
});
