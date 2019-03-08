# Best Practices

### File and Folder Structure
- LIFT
    - Locate code quickly
    - Identify code at a glance
    - Flattest structure possible
    - Try to be Dry
#### File Names
- descriptor.type.fileType
```
Examples:
- catalog.component.ts
- user-authentication.service.ts
```
- One Item per File, avoid multiple components in one file

#### Folder Structure
```
user (folder)
|---user-profile.component.html
|---user-profile.component.ts
events (folder)
|---events-list.component.html
|---events-list.component.ts
|---events.service.ts
shared (folder)
```
### Coding
- Single Responsibility Principle
Example of this is having a service that tries to do everything.
```
data-repository.service.ts
- login()
- enrollUser()
- getUsers()
- getCourses()
```
Break this down to
```
user.service.ts
course.service.ts
catalog.service.ts
```
- Symbol Naming
```
// If your file name is
loading-spinner.component.ts
// the component class name should be
LoadingSpinnerComponent {}
```
- for constant variables, just use the same camel case as you name a regular variable

- Imports
```javascript
import { Component } from '@angular/core'; // first imports are from third party

import { CatalogService } from './catalog.service'; // second is your own classes
import { UserService } from './user.service';
```
- Immutability - avoid mutating objects
- Use small functions

### Module Organization
#### Core Module
- shared singleton services
- App level components - components that are only used by the top-level components of the application
#### Shared Module
- Exports common modules that is shared across modules
- Share components, directives and pipes
#### Feature Module
- easily lazy loaded modules

### Components
- prefix your component selectors - 2-4 characters
- separate component, css and html files
- use @Input and @Output decorators instead in metadata
- public properties should come first before private properties

### Services
- make Services as Injectable
- use Services for Data Retrieval

### Performance
- AOT (Ahead of Time Compilation) - set this when publishing for production
- Use Angular CLI
- Lazy load feature modules
    - use lazy loaded routes
```js
{ path: 'events', component: EventsComponent },
{ path: 'users', loadChildren: './users/users.module#UserModule' } // this lazy loads a User Module
```
- monitor dist bundle sizes using source-map-explorer
- OnPush Change Detection
- Take note of pure and impure pipes

---

# Techniques

### Service Workers
- augment the traditional web deployment model and empower applications to deliver a user experience with the reliability and performance on par with natively-installed code.
- is a script that runs in the web browser and manages caching for an application