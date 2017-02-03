# Releasing Guidelines


## Releases

Once a sprint of changes has been completed, the stakeholders are responsible for looking at the dev environment ([dev.megapode.ca](http://dev.megapode.ca)) and approve the changes that are deployed there.

Only once the changes have been approved on the dev environment can a release be made and deployed to the prod environment.

At that time, the tech lead is responsible for merging the changes made on the `develop` branch into the `master` branch. Afterwards, a deployment to the prod environment ([megapode.ca](megapode.ca)) is possible


### Sentimental SemVer

A version number (e.g.: `1.2.3`) is read like so: `major.minor.patch`. Since this project is not a library, it is not mandatory that the versioning follows [SemVer](http://semver.org/).

Instead, here is how the versioning is handled:

  * MAJOR version for major incompatibility with a previous version. For example, a refactor that would change the whole site layout or functionality.
  * MINOR version for each change (addition, removal).
  * PATCH version for bug fixes and minor corrections.


## Deployments

In order to avoid human error, Gulp tasks have been created to deploy the work to the different environments. Ideally these tasks should be available remotely, however it is currently necessary to run them locally.


### Deploying to dev

Here are the steps to deploy the changes done to the theme on [dev.megapode.ca](dev.megapode.ca):

0. Open a Terminal instance at the root of the project directory.
0. Pull from the latest version of the `develop` branch.
0. Run `npm install` locally, to get the latest dependencies.
0. Run `gulp build`.
    - Build assets are not versioned, and therefore a fresh build must be done.
    - A development build (i.e. the results of `gulp dev`) is not acceptable, and an error will be thrown if you attempt to deploy a dev build.
0. Run `gulp deploy:dev-theme -u {username} -p {password}`.
    - Replace `{username}` with the actual username to connect to the server.
    - Replace `{password}` with the actual password to connect to the server.


### Deploying to prod

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