# Releasing Guidelines

In order to avoid human error, Gulp tasks have been created to deploy the work to the different environments. Ideally these tasks should be available remotely, however it is currently necessary to run them locally.


## Deploying to dev

Here are the steps to deploy the changes done to the theme on [dev.megapode.ca](dev.megapode.ca):

0. Open a Terminal instance at the root of the project directory.
0. Pull from the latest version of the `master` branch.
0. Run `npm install` locally, to get the latest dependencies.
0. Run `gulp build`.
    - Build assets are not versioned, and therefore a fresh build must be done.
    - A development build (i.e. the results of `gulp dev`) is not acceptable, and an error will be thrown if you attempt to deploy a dev build.
0. Run `gulp deploy:dev-theme -u {username} -p {password}`.
    - Replace `{username}` with the actual username to connect to the server.
    - Replace `{password}` with the actual password to connect to the server.


## Deploying to prod

Here are the steps to deploy the changes done to the theme on [megapode.ca](megapode.ca):

0. Open a Terminal instance at the root of the project directory.
0. Pull from the latest version of the `master` branch.
0. Run `npm install` locally, to get the latest dependencies.
0. Run `gulp build`.
    - Build assets are not versioned, and therefore a fresh build must be done.
    - A development build (i.e. the results of `gulp dev`) is not acceptable, and an error will be thrown if you attempt to deploy a dev build.
0. Run `gulp deploy:theme -u {username} -p {password}`.
    - Replace `{username}` with the actual username to connect to the server.
    - Replace `{password}` with the actual password to connect to the server.