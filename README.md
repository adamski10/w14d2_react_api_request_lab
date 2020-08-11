# React API Request Lab

Practise what we've learned in the past few days by making a small React app. This could be similar to the countries app we made that has a dropdown menu which when selected displays some information about that option. You could also select from a list of api's below or be creative and make something of your choice

Remember to have a container and component folder. Containers will handle data requests, state changes and callbacks. Components will handle visualisation logic (and only have access to props).

Sample APIs:

## Pokemon API

http://pokeapi.co/

E.g. make a dropdown of the original Pokemon which you can select to see their details. This API uses URLS to link to more information rather than having one huge JSON response, so you will need to do a second AJAX request when an option is selected.

To get more than 20 Pokemon returned at once you can add a limit, e.g. http://pokeapi.co/api/v2/pokemon/?limit=151

## Harry Potter API

http://hp-api.herokuapp.com/

E.g. List all of the characters and click to see more info. You could extend this by filtering by Hogwarts House.

## Football Data

https://www.football-data.org/documentation/quickstart

E.g. make a drop down box of all of the teams playing in the Premier League, and when selected show a list of the players for that team with their position and shirt number - this will need a second AJAX request on click. OR Make an app to look at the different football league tables.

You need to sign up for a free API key (http://api.football-data.org/register) which should be emailed to you right away, and then include this in any requests to the API as follows:

```js
const url = 'http://api.football-data.org/v2/competitions';
fetch(url, {
  headers: {
    'X-Auth-Token': 'TOKEN GOES HERE'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
