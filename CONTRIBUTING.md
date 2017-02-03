# Contributing Guidelines

- [Requirements](#requirements)
  - [Front-End Development](#requirements-js)
  - [WordPress Development](#requirements-wp)
- [Installation](#installation)
- [Coding Styleguides](#coding-styleguide)
  - [JavaScript](#js-coding-styleguide)
  - [HTML and PHP](#html-coding-styleguide)
- [Development Flow](#development-flow)
  - [Branching Off](#branching-off)
  - [JavaScript and Styles Development](#js-development)
  - [WordPress Development](#wp-development)
  - [Submitting Pull Requests](#pull-requests)


<br/>
<a id="requirements"></a>
## Requirements

<a id="requirements-js"></a>
### Front-End Development

Ensure you install these globally:

- [Node](https://nodejs.org/)
- [Gulp](http://gulpjs.com/)

<a id="requirements-wp"></a>
### WordPress Development
- [MySQL database](https://www.mysql.com/). Ensure that you copy the dev.megapode.ca database locally, see [WordPress instructions](https://codex.wordpress.org/Backing_Up_Your_Database).  
If you do not have access to the database, please ask the tech lead to provide you with the SQL query you need to copy the database locally.
- A server that can run both PHP and the MySQL database. [MAMP](https://www.mamp.info/) can run both of these locally.


<br/>
<a id="installation"></a>
## Installation

Once you checked out this project, run this command in a Terminal window:

    npm install


<br/>
<a name="coding-styleguide"></a>
## Coding Styleguides

<a id="js-coding-styleguide"></a>
### JavaScript

See [John Papa's AngularJS Styleguide](https://github.com/johnpapa/angularjs-styleguide). Many rules are enforced by [ESLint](http://eslint.org/).

<a id="html-coding-styleguide"></a>
### HTML and PHP

There is currently no specific styleguide to adhere to, the logic is to keep things legible.

There is no need to cram as much as possible on a single line. It is preferred that you keep your lines under 100 characters, in order to keep things legible. It can be a good habit to break HTML attributes into indented separate lines, for example. PHP lines should follow the same principles. 


<br/>
<a id="development-flow"></a>
## Development Flow


<a id="branching-off"></a>
### Branching off

0. Always branch off of the `develop` branch. Make sure that you have checked out the latest version beforehand.

0. Create a feature branch for the task to accomplish. See the [Branch Naming Convention](#branch-naming).

0. Update the code according to the task outlined by the Github ticket. Make sure to follow these guidelines:
  - [JavaScript Coding Styleguide](#js-coding-styleguide)
  - [HTML and PHP Coding Styleguide](#html-coding-styleguide)
  - [Commit Messages Convention](#commit-messages)

0. Once the work is completed, submit a pull request towards the `develop` branch. See [Submitting Pull Requests](#pull-requests).


<a id="branch-naming"></a>
#### Branch Naming Convention

Branch names should be a short descriptive call to action title to help distinguish the branch by area of focus.

```
// DO:
add-name-of-feature
fix-this-style-issue
remove-that-superfluous-feature
```

```
// DON'T:
the-entire-summary-from-the-github-issue-which-happens-to-be-like-a-lot-of-words
```


<a id="commit-messages"></a>
#### Commit Messages Convention

Commit messages should be 50 characters or less, including the Github issue key in brackets.

The intial line should provide a summary of the work done, in the past tense. Note that the commit is to be written in a telegraphic manner (to keep things short), in proper sentence case.

Further description is encouraged, and may take place in subsequent lines below the summary.

```
// DO:
Added new feature (#123)

Very brief information about this commit - what it does, if it breaks things,
anything that would be truly beneficial for future reference. We're not
documenting code here - keep it extremely high level. Short and sweet.
```

```
// DON'T (wrong tense, wrong case, too long, missing issue key):
add this feature and format some weird looking code that looked weird
```


<br/>
<a id="js-development"></a>
### JavaScript and Styles Development

Many components are built with the [Angular 1.6+](https://angularjs.org/) framework. See the ["Editing Content" article on the project wiki](https://github.com/jansensan/megapode-website/wiki/Editing-Content) for a detailed visual explanation of which they are.

All sources of these components are located in the `src` directory at the root of the project.

In order to contribute to those, follow these steps:

0. Open a Terminal instance at the root of the project directory.
0. Run the `gulp dev` task, it will start a watch and compile the sources when they are modified.
0. Edit the different `*.js` and `*.less` as you need.
0. See the changes in a browser.


<br/>
<a id="wp-development"></a>
### WordPress Development

The project is mainly a WordPress theme, and this is where you should attempt to contain all of your edits, unless absolutely impossible. The theme directory is located at `www/wp-content/themes/megapode-website-w17`.


<br/>
<a id="pull-requests"></a>
### Submitting Pull Requests

Once the work on your branch is complete, make sure to pull from the latest `develop` branch and fix any conflict if necessary.

0. Open the PR against `develop`. All pull requests should target `develop`.  
_Important:_ do not commit the compiled files, only the changed source files. The `.gitignore` config should already ensure that the compiled assets are not versioned.

0. When a PR is made, a [travis-ci](https://travis-ci.org/) automated test will run.
    - If issues are found with your PR, the technical architect will comment and require changes. Please resolve any issue quickly, and push your relevant fixes.
    - If the build fails, get a fix together, push it to your branch, which will restart the verification build.
    Make sure to [squash your commits](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History) rather than just push additional ones to the branch.

Once the PR is merged, the technical architect will issue a release as needed.
