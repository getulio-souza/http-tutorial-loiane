import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocTakeComponent } from './poc-take.component';

describe('PocTakeComponent', () => {
  let component: PocTakeComponent;
  let fixture: ComponentFixture<PocTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PocTakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PocTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
