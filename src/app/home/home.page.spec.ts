import { ComponentFixture, TestBed } from '@angular/core/testing'; // Import necessary testing utilities from Angular
import { IonicModule } from '@ionic/angular'; // Import IonicModule for setting up the Ionic environment in tests

import { HomePage } from './home.page'; // Import the HomePage component that we want to test

describe('HomePage', () => { // Describe the test suite for the HomePage component
  let component: HomePage; // Declare a variable to hold the instance of HomePage
  let fixture: ComponentFixture<HomePage>; // Declare a variable to hold the ComponentFixture, which provides access to the component and its template

  beforeEach(async () => { // Set up the test environment before each test
    await TestBed.configureTestingModule({
      declarations: [HomePage], // Declare the HomePage component that is being tested
      imports: [IonicModule.forRoot()] // Import the IonicModule and initialize it for the test environment
    }).compileComponents(); // Compile the components, ensuring that the component and its template are ready for testing

    fixture = TestBed.createComponent(HomePage); // Create an instance of the component's fixture
    component = fixture.componentInstance; // Get the instance of the HomePage component from the fixture
    fixture.detectChanges(); // Trigger change detection so that the component updates based on initial bindings
  });

  it('should create', () => { // Define a test case to check if the HomePage component is created successfully
    expect(component).toBeTruthy(); // Assert that the component instance is truthy, indicating it was created successfully
  });
});
