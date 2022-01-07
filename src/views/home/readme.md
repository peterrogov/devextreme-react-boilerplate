### Welcome to DevExtreme + React + Webpack boilerplate
This application is greatly inspired by [DevExtreme](https://js.devexpress.com/) [official demo](https://devexpress.github.io/devextreme-react-template/#/home). 
However this app is not a clone but a complete rebuild from scratch to allow a slightly different workflow.

The purpose of this project is to act as a boilerplate for a front-end React SPA built with DevExpress UI Kit. It is designed for enterprise type applications or backend (admin) apps. This focus affects some design approaches (e.g. the app is not greatly concerned about the bundle size and overall page load speed though there are several reasonable optimizations here and there).

### Overview
Here's a brief overview of what's under the hood
- The app _**does not**_ use `create-react-app`. Instead it is made from scratch by making a fresh package with yarn and adding everything else.
- Made with TypeScript 4
- Made with DevExtreme 21.2
- Made with Webpack 5
- Makes use of [react-router 6](https://www.npmjs.com/package/react-router-dom)
- Implements _**optional**_ JS bundle obfuscation as part of webpack build process using [webpack-obfuscator](https://www.npmjs.com/package/webpack-obfuscator)
- Implements DevExtreme SCSS theme imports and customization (i.e. does not load a complete .css styles file but imports .scss and modifies as necessary). This is particularly useful for bundle size optimization as you can only include styles for components you need and drop the rest.
- Uses [FontAwesome](https://fontawesome.com/) SVG icons and their [official React library](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) for icons
- Uses [react-markdown](https://www.npmjs.com/package/react-markdown) to import and render .MD files such as this text you are reading.
- Uses self-hosted Open Sans font (can be easily changed to CDN/Google Fonts/etc.)
- Implements a layout with a static fixed header, footer, collapsible drawer and a scrollable main content area.