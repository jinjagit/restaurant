# restaurant
DOM manipulation using Webpack

Simon Tharby's [UNFINISHED] solution to [Project: Restaurant Page](https://www.theodinproject.com/courses/javascript/lessons/restaurant-page?ref=lnav), Organizing JavaScript Code section, Javascript unit, Odin Project.

The significant feature of this exercise is that the content of each tab is rendered dynamically by a separate module, each of which is imported from a separate JavaScript file (and then Webpack creates a single file, 'main.js', in the 'dist' directory, that incorporates all the respective source JavaScript in one file).

Note: 'node_modules' folder not included in this repo (included in gitignore). The dependencies stored there can be installed from package.json by running <code>npm install</code> (if node.js is installed).
