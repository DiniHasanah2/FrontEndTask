import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA to allow custom elements in the template
import { TestBed } from '@angular/core/testing'; // Import TestBed for setting up and configuring the test environment

import { AppComponent } from './app.component'; // Import the AppComponent that we want to test

describe('AppComponent', () => { // Describe the test suite for AppComponent

  beforeEach(async () => { // Before each test, set up the test environment
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Declare the AppComponent to be tested
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Include CUSTOM_ELEMENTS_SCHEMA to handle any custom elements in the component
    }).compileComponents(); // Compile the component and its templates
  });

  it('should create the app', () => { // Define a test case to check if the AppComponent is created successfully
    const fixture = TestBed.createComponent(AppComponent); // Create an instance of the component
    const app = fixture.componentInstance; // Get the component instance from the fixture
    expect(app).toBeTruthy(); // Assert that the component instance is truthy (i.e., it was created successfully)
  });

});
