Much of the framework has been taken or inspired by the following:

For working with webpack and karma, see:
https://github.com/angular-tips/webpack-demo

For separating view templates using ui-router, see:
https://scotch.io/tutorials/angular-routing-using-ui-router

Thank you to those who have helped.

In order to get this application to work, you can clone the original from the first link or you can clone this repo.

From there, use npm to install bootstrap and jquery. If cloning from the first link, be sure that jquery is listed as a dependency
in the package.json file. You will then need to add jquery in the config.module section of the webpack.config.js.

```javascript 
test: require.resolve('jquery'), loader: 'imports?jQuery=jquery'
```
