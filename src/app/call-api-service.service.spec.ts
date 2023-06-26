import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CallApiServiceService, EventList } from './call-api-service.service';
import { HttpClient } from '@angular/common/http';

describe('CallApiServiceService', () => {
  let service: CallApiServiceService;
  let httpClient: HttpClient;
  let httptesttoControl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CallApiServiceService],
    });
    service = TestBed.inject(CallApiServiceService);
    httptesttoControl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('http get Method', () => {
    const eventList: any = [
      {
        eventDistance: 1700.0,
        endDate: '2022-04-28',
        name: 'Walk for Arcause',
        id: 530,
        urlPattern: 'walk-for-arcause-2022',
        eventType: 91,
        reportStatic: true,
        startDate: '2022-02-13',
      },
      {
        eventDistance: 305.0,
        endDate: '2022-11-07',
        name: 'Walk For Arcause 2.0 - 2022',
        id: 586,
        urlPattern: 'walk-for-arcause-2022-2',
        eventType: 114,
        reportStatic: true,
        startDate: '2022-10-22',
      },
    ];
    service.getListOfEvents().subscribe((events) => {
      expect(eventList).toBe(events);
    });
    const req = httptesttoControl.expectOne(service.url);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    req.flush(eventList);
    httptesttoControl.verify();
  });
});
