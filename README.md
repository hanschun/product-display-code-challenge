# Product Display Coding Challenge  
A coding challenge to design a page displaying a group of products.

The project was built using `create-react-app` as a framework and `grommet` for styling.  

## Requested features:  
1. Build the product details page with all products  
2. On product details page display price, product name and main hero image  
3. If you click on a product image get a carousel overlay with all thumbnail images  
4. Detail build system and tests in this README  
5. Responsive design for 1 col on mobile and 3 col on desktop  
6. A11y accessibility  
7. SEO friendly

## Additional Features:  
* The page loads with skeleton image placeholders to give an expected user experience in the case of long load times.  
* Because the data set was known (i.e. I was given access to the JSON data), the page attempts to perform a 'real' data fetch against the JSON file URI, but if it fails it will access the stored JSON saved in the `src/data/data.js` file. This was the data the page was built against.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
Loading screen inspired by Image Grid with Pagination by Hassan Tijani.A (GitHub: surepeps) [https://raw.githubusercontent.com/danilowoz/create-content-loader/master/src/Gallery/insertYourLoaderHere/ImageGrid.js](https://raw.githubusercontent.com/danilowoz/create-content-loader/master/src/Gallery/insertYourLoaderHere/ImageGrid.js)

## Installing the package  
1. Clone the git repository to the computer you want to run it from.  
2. Run the installation script `npm install` in your terminal.  
  All of the project dependencies will be installed.  
3. See the below section, Available Scripts After Installation for next steps.
  * To serve the project, use `npm start`.
  * To see the built files, use `npm run build`.
  * To run the tests, use `npm test`.

## Available Scripts After Installation
These scripts are part of the `create-react-app` package.  
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

While this script **can** be run, this is for customizing beyond the Create React App, not intended for the Product Display Coding Challenge.