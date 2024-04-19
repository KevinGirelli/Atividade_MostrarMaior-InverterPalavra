import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMaiorComponent } from './mostrar-maior.component';

describe('MostrarMaiorComponent', () => {
  let component: MostrarMaiorComponent;
  let fixture: ComponentFixture<MostrarMaiorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarMaiorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarMaiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
