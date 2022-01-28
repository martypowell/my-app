# Front End Interview Coding Exercise

The purpose of this exercise is to give us to evaluate your front end technical and decision making skills.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). See [Available Scripts](#available-scripts).

TODO: Need to figure out if this will be codesandbox, github or combo.

## What to do

- Use any libraries you want
- Style it how you want
- Solve problems the way you want
- This project does not support typescript out of the box, but feel free to add it

## What not to do

- Panic if your data goes away, we are using [Mirage](https://miragejs.com/) to fake an api on the front end, so when you refresh your data will reset
- Edit api.server.js to accomplish a task
- Spend an excess amount of time on the exercise, if you are spinning your wheels feel free to stop, and send a brief explanation of what happened

## Requirements

- You should use some form of routing when a "page" is required
- Should handle ui states if you are performing an asynchronous action such as fetching data
- Be able to use browser controls to navigate "pages" in the application
- Keep [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) in mind
- If a requirement is unclear, use your best judgement and feel free to document that assumption

### Display a list of movies

- "Page" should include a heading to describe the list
- Display a list of movies available at `api/movies`

### Display movie details

- "Page" should be created that will show details about a movie
- Fields to be included are
  - name
  - year
  - description
- Movie details are available at `api/movies/{id}`
- A user should be able to select a movie [from the movie list](#display-a-list-of-movies) and navigate the movie details page

### Edit movie details

- "Page" will be created where a user can edit movie details
- A user should be able to edit
  - name (required)
  - year (required)
  - Note\* - description is not required, but is something that should be displayed if it exists
- Movies can be saved at `api/movies/{id}`
- When a user saves, the user should be redirected to the movies list
- A user should be able to access the edit from [from the movie list](#display-a-list-of-movies)

### Add new movie

- On the page that contains the [the movie list](#display-a-list-of-movies), the user should be able to add a new movie
- A user should be able to add
  - name (required)
  - year (required)
- Movies can be added at `api/movies`
- When a user saves, the user should be redirected to the movies list

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
