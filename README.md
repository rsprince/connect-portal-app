Site published at:
https://rsprince.github.io/connect-portal-app/

# FM CONNECT
This application is a refactored version of the Fannie Mae "Connect" web application. The goal is to modernize the code by refactoring it as a single page application ("SPA"), utilizing Angular 6 and Bootstrap on the front end, and where possible, Fannie Mae's Angular Development Kit ("ADK"). The backend is also being refactored as stand-alone APIs. Unit tests utilize Jasmine.
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Code Examples

### Filtering an Array: services > menu.service.ts
Compares two lists, filters the second list based on values of the first using .filter().
Then using .forEach(), checks each item and filters again based on a property.

### Filtering an Array with conditions: help > help.component.ts
Filters content with conditions.

## Markup with ternary expression and pipe: help > elearning-card.component.html
Used to concantenate content.

## Find replace characters in a string: app.component.ts
Uses .split and .join

 
## Application Architecture
The application is organized semantically, with folders and files for features and components.
 
### Application Chrome
Page layout, including headers, navigation and footers (chrome) is implemented using the following components:
 
#### App.component
On startup, index.html > <app-root> bootstraps the app, inserting the app component. Markup for the app component references components for the app chrome, including a header and footer. A <main> tag provides a container for the <router-outlet>, which serves as a container for routes during site navigation.
 
#### chrome-header
Provides markup and functionality to display a page header with navigation. Currently implemented with Bootstrap.
 
#### chrome-footer
Provides markup and functionality to display a page footer.
 
### Main Sections
- Home
- Reports
- Admin
- Help
 
### Reports
As an important feature, "Reports" is a custom module, providing better code organization, lazy loading, and possible code reuse:
#### reports-home/
- default and container for report navigation and main display.
- contains listener for behavior subject, storing the user report category selection.
- calls service to get data, passes selected category, list of reports
#### reports-categories/
- lists categories in a vertical left side navigation.
- provides functionality for selecting the report category.
#### reports-list/
- lists reports for the selected report category.
#### reports.service.ts
- Service to get report data.
- GetData() checks to see if data has already been loaded to limit server calls.
- Updated to use the HttpClient API.
#### selected-category.service.ts
- Service to allow user to select a category
- Uses a RXJS Behavior Subject to store selection
 
### SYSTEM MANAGEMENT
#### Lender Configuration
   * FLOW
   * User selects "Corp Code" | "User Id" (radio buttons) for search type.
   * User enters search term (form.search).
   * User clicks "Submit", firing "submitForm()".
   * "submitForm()":
   * - checks for search term.
   * - checks what searchType was selected.
   * - if 'corp':
   *   - 'getCorpData()' for preview display.
   *   - get files for 'reportListDownload' and 'userListDownload'.
   * - if 'user':
   *   - 'getUserData()' for preview display.
   * Preview, 'Downloads' reveal.
   * Downloads options (buttons):
   * - By Category (reportsList)
   * - By User (userList)
   *   - fires 'showDialog(reportType)'
   * Dialog:
   * - XLSX download button
 
### Route Guards
Following best practices, access to the application is controlled by Route Guard functionality. Access to URL paths ("routes") is provided based on authentication and roles.
 
#### Auth Guard
The Auth Guard service implements the canActivate interface. A "canActivate" function passes in router information, and if the user is authenticated, will return true, else it will route to the login page. The Auth Guard service is injected into a "routes" object (main or sub-routing module ) with a "canActivate" property array.
 
https://github.com/theo4u/angular4-auth/blob/master/src/app/helpers/jwt-helper.ts
 
#### Role Guard
The Role Guard service works the same with the use case of guarding routes by user role. The difference here is that if not authorized, the app routes to a "404" or "Page Not Found".
 
### Authentication
This will be implemented using Json Web Token (JWT), which will be generated from the server and saved in the browser's local storage.
- services/auth.service.ts
 
### Dynamically Adding CSS Classes
#### [class.show]="navbarOpen"
Add class "show" if navbarOpen = true
####
 
### SASS
SASS is a CSS preprocessing language, allowing for the use of variables and mixin functions for CSS processing. By setting style=scss when creating a new project, sass is set as the styling language, resulting in .scss files to be stemmed out when generating new components.
#### Angular.json
- In the "styles" property, a path to the main .scss file.
#### sass/styles.scss
- imports mixins and variables.
- location for global styles.
#### sass/variables.scss
- colors, container dimensions, etc.
#### sass/mixins.scss
- style related functions
#### styles for specific components
Each component folder has a .scss file where specific styles should be set.
- Ex. "reports-home.scss"
#### using SASS variables
Add  the import decorator and path to top of a scss/css page
@import '../sass/variables';
ex: app.component.scss
 
### Carousels
To add a carousel:
- instantiate a report variable in a component
- onInit(), call getCarouselData(reportType)
- Add conditional to getCarouselData()
- In FmConnectCarouselService:
  - add URL of report API
  - add conditional to getData()
 

## Development, Code Repository Work Flow
Proper work flow will ensure code integrity. These steps may be performed manually as well as be integrated into an automated pipeline process.
 
Steps developer should take:
- Create new branch for user story.
- While developing, make commits and push branch frequently.
- Develop unit tests to ensure 90% code coverage.
- Run unit tests with code coverage, run linting:
   - ng test --code-coverage
   - ng lint
- View code coverage report in browser: coverage/index.html
  
- When finished, make sure application builds.
- Merge master into branch:
   - git merge origin master
- Resolve merge conflicts, if any.
- Commit and push the branch.
- From Bitbucket page, create Pull Request.
- Reviewing Pull Request:
  - checkout branch and run, ensuring branch builds properly.
  - check code coverage and linting.
- Approve Pull Request
 
Automated steps to add to Build Pipeline:
- Run "ng test --code-coverage", "ng lint".
- If code coverage does not reach required percentage, or does not pass linting,
  Pull Request should fail.
 
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
 
## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
Features, especially complex ones, should generally be created as modules for better code organization, lazy loading, and reuse. Routing can also be added to custom modules:
- ng g module moduleName --routing
Associated services and components should then be generated inside the module folder:
- ng g c moduleName/newComponent
 
## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
https://angular.io/guide/aot-compiler
https://angular.io/guide/build
 
## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- ng test --code-coverage //generates a code coverage report at: ../coverage/index.html
 
## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
 
## Running linting
Run `ng lint` to execute linting tests.
 
## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
 
## JWT Decode
npm install --save jwt-decode
npm install --save @types/jwt-decode
 
## IDE Fix
Powershell/Terminal in VS Code path fix:
$env:Path += "C:\Users\gburss\.npm-local"
 
CMD line:
set PATH=%PATH%;%NPM-LOCAL%
 
## test
 
#####end