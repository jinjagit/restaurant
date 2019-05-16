# restaurant

DOM manipulation using JavaScript modules bundled by Webpack.

Simon Tharby's solution to [Project: Restaurant Page](https://www.theodinproject.com/courses/javascript/lessons/restaurant-page?ref=lnav), Organizing JavaScript Code section, Javascript unit, Odin Project.

The significant feature of this exercise is that the content of each tab is rendered dynamically by a separate module, each of which is imported from its own separate JavaScript file. Webpack then bundles all the source JavaScript into a single file, 'main.js', in the 'dist' directory.

Note: 'node_modules' folder not included in this repo (included in gitignore). The dependencies stored there can be installed from package.json by running <code>npm install</code> (if node.js is installed).

### Getting started:

To get started with the app, clone / download the repo and open 'dist/index.html' in a browser.

To include any changes made to the JavaScript files in the 'src' folder, node.js and Webpack installations are required, then Webpack can be used to bundle the changes into 'dist/main.js'.
