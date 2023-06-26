// import { TestBed, async } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
// import { AuthServiceService } from './guards/auth-service.service';

// describe('AppComponent', () => {
//   // let component = new AppComponent();
//   let service: AuthServiceService;
//   let component = new AppComponent(service);
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule, AuthServiceService],
//       declarations: [AppComponent],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'testing-test-cases'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('testing-test-cases');
//   });

//   // it('should render title', () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   fixture.detectChanges();
//   //   const compiled = fixture.nativeElement;
//   //   expect(compiled.querySelector('.content span').textContent).toContain(
//   //     'testing-test-cases app is running!'
//   //   );
//   // });
//   it('should call ngOnit function', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     const callInitFunction = app.ngOnInit();
//     expect(callInitFunction).toHaveBeenCalled();
//   });
//   it('my Text case', () => {
//     // expect(true).toBe(true);
//     expect(component.showAlertWorking('Hello')).toBe('Hello');
//   });
// });
