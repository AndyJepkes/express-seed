# dashboard-homework, Social Media [Goatster app]
A take-home assignment for developer dashboard recruiting.
We’ve create a way cool new social media app that lets users rate and share their favorite goats online! Based on user feed feedback we have decided to add a favorite goats widget to the page.

Given three lifecycle hooks set up a component to load in the provided container. The component lifecycle begins when you click the load component button. We want a loader to display while the component loads and a list of our favorite goats to appear when the app is ready. Be sure to include a default error view in case anything goes wrong!
Competencies covered: HTML, CSS, component architecture, async, events.

# Instructions:
Create a reusable component that runs when the appropriate events are fired. You can add any nessesary files to the folder provided, but clean and consistent code is better than volume of code. After the assignment you should be ready to discuss your code and how you reasoned through your descision making process.

# Requirements:
* Widgets HTML loads entirely within the container provided.
* Loader appears before data is requested.
* When there is an error the widget displays an error view.
* Favorite goats display in “list style” and should display image, name and stars.
* List should be sortable by name and stars.

# We provide:
## Lifecycle events
* `on-component-start`
* `on-component-data`
* `on-component-error`

### Methods
* `getFavoriteGoats()` - No return. Simply call this method. Data will be passed through the on-component-data event.

### Script
* `app/fav-goats-component/fav-goats.component.js` - provides an example lifecycle listener

### Container
* HTML node with an ID of “fav-goats-container”
* Load button event binding (event fires when button is clicked)
* getFavoriteGoats gets goat data and calls on-component-data (passing data)
* Error binding 

### Mock data
* Mock JSON goat data
* Goat thumbs


# Bonus (choose one):
* Advanced CSS - Implement a modern framework or otherwise show off your advanced CSS skills.
* ES6 - Implement a JavaScript preprocessor such as Babel so that we can use the latest JavaScript syntax with full browser support.
* Unit testing - implement front-end unit testing and write tests to ensure your code is working properly.
