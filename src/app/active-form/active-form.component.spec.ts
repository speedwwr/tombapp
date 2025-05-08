import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveFormComponent } from './active-form.component';

describe('ActiveFormComponent', () => {
  let component: ActiveFormComponent;
  let fixture: ComponentFixture<ActiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
