import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingComponent]
    });
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería emitir un evento al hacer clic en el botón', () => {
    const fixture = TestBed.createComponent(TestingComponent);
    const component = fixture.componentInstance;
  
    const boton = fixture.nativeElement.querySelector('button');
    spyOn(component.eventEmisor, 'emit');
  
    boton.click();
    fixture.detectChanges();
  
    expect(component.eventEmisor.emit).toHaveBeenCalled();
  });
});
