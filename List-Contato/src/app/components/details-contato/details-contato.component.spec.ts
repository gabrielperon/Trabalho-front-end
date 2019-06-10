import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsContatoComponent } from './details-contato.component';

describe('DetailsContatoComponent', () => {
  let component: DetailsContatoComponent;
  let fixture: ComponentFixture<DetailsContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
