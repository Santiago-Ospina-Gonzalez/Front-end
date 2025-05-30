import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibPuntoEquilibrioComponent } from './lib-punto-equilibrio.component';

describe('LibPuntoEquilibrioComponent', () => {
  let component: LibPuntoEquilibrioComponent;
  let fixture: ComponentFixture<LibPuntoEquilibrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibPuntoEquilibrioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibPuntoEquilibrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
