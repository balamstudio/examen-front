import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InversoComponent } from './inverso.component';

describe('InversoComponent', () => {
  let component: InversoComponent;
  let fixture: ComponentFixture<InversoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InversoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InversoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
