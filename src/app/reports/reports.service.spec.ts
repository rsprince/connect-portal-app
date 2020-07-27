import { TestBed, async, inject } from '@angular/core/testing';
 
import { ReportsService } from './reports.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { inject } from '@angular/core';
 
describe('ReportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ ReportsService ],
    imports: [ HttpClientModule, HttpClientTestingModule ]
  })
);
 
  it('should be created', () => {
    const service: ReportsService = TestBed.get(ReportsService);
    expect(service).toBeTruthy();
  });
 
  it('if data already has a value, .getData() should return a value.', () => {
    const service: ReportsService = TestBed.get(ReportsService);
    service.data = true;
    expect(service.getData()).toBeTruthy();
  });
 
  it('if data does not have a value, .getData() should return a value.', () => {
    const service: ReportsService = TestBed.get(ReportsService);
    service.data = false;
    expect(service.getData()).toBeTruthy();
  });
 
  it('should issue an HTTP request',
    //Declare async test, as HttpClient works with Observables.
    async(
      // inject HttpClient and HttpTestingController
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        http.get('/foo/bar').subscribe();
 
        // HttpTestingController replaces old MockBackEnd.
        backend.expectOne({
          url: '/foo/bar',
          method: 'GET'
        });
      })
    )
  );
});