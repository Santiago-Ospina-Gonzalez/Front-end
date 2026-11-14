import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCostosXpComponent } from './lib-costos-xp.component';

describe('LibCostosXpComponent', () => {
  let component: LibCostosXpComponent;
  let fixture: ComponentFixture<LibCostosXpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibCostosXpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibCostosXpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
