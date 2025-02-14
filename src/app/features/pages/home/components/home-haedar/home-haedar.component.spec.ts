import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHaedarComponent } from './home-haedar.component';

describe('HomeHaedarComponent', () => {
  let component: HomeHaedarComponent;
  let fixture: ComponentFixture<HomeHaedarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHaedarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHaedarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
