import { TestBed } from '@angular/core/testing';

import { TestingService } from './testing.service';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('TestingService', () => {
  let service: TestingService;

  const mockService = jasmine.createSpyObj('HttpClient', ['get']);
  // el of 
  mockService.get.and.returnValue(of({ title: 'data', message: 'message del servicio'}));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockService }],
    });
    service = TestBed.inject(TestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener datos simulados', () => {
  
    service.obtenerDatos().subscribe(data => {
      expect(data.message).toBe('message del servicio');
    });
  });


  it('debería obtener datos simulados del otro metodo', () => {
  
    service.otroMetodo().subscribe(data => {
      expect(data.message).toBe('message del servicio');
    });
  });


  // it('debería manejar un error en la solicitud HTTP', () => {
  //   mockService.get.and.returnValue(of(throwError({ data: 'Debería haberse generado un error', status: 404 })));
  
  //   // TestBed.configureTestingModule({
  //   //   providers: [{ provide: HttpClient, useValue: mockService }],
  //   // });
  
  //   const servicio = TestBed.inject(TestingService);
  
  //   servicio.obtenerDatos().subscribe(
  //     data => fail('data 12344'),
  //     error => {
  //       expect(error.status).toBe(404);
  //     }
  //   );
  // });

  
});
