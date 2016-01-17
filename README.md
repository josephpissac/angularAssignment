## SB Admin v2.0 rewritten in AngularJS with google api client and services set up. 

[![Join the chat at https://gitter.im/start-angular/sb-admin-angular](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/start-angular/sb-admin-angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This project is a port of the famous Free Admin Bootstrap Theme [SB Admin v2.0](http://startbootstrap.com/template-overviews/sb-admin-2/) to Angular Theme.

This repo has angular free theme with google api client, services and controller written to use google api's.

Find out more [Free Angular Themes at StartAngular.com](http://www.startangular.com/).

## Installation
####1. Clone this project or Download that ZIP file
https://github.com/josephpissac/angularAssignment.git


####2.  Make sure you have [bower](http://bower.io/), [grunt-cli](https://www.npmjs.com/package/grunt-cli) and  [npm](https://www.npmjs.org/) installed globally

$ sudo apt-get install npm
$ sudo npm install -g grunt-cli
$ sudo npm install -g bower


####3. On the command prompt run the following commands


$ cd `project-directory`

- bower install is ran from the postinstall

$ npm install 
- a shortcut for `grunt serve`

$ npm start

- a shortcut for `grunt serve:dist` to minify the files for deployment

$ npm run dist 



**Note:**
If you get this following error, 
```text
Error: EACCES, permission denied '.config/configstore/insight-bower.yml'
You don't have access to this file.
```
changing ownner .config

sudo chown -R [user name] ~/.config



## Roadmap

- Add sample AJAX calls and make the directives more modular

### Automation tools

- [Grunt](http://gruntjs.com/)
=======



