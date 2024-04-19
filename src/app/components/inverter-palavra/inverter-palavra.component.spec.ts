import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverterPalavraComponent } from './inverter-palavra.component';

describe('InverterPalavraComponent', () => {
  let component: InverterPalavraComponent;
  let fixture: ComponentFixture<InverterPalavraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InverterPalavraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InverterPalavraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
