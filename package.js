// package metadata file for Meteor.js
var packageName = 'rshashkov:angular-meteor-ng-sortable';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '0.0.1';
var summary = 'Angular Library for Drag and Drop, Sortable and Draggable. No JQuery UI. Supports Touch.';
var gitLink = 'https://github.com/ruslanchek/angular-meteor-ng-sortable';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
	name: packageName,
	version: version,
	summary: summary,
	git: gitLink,
	documentation: documentationFile
});

Package.onUse(function(api) {
	api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions
	api.addFiles('src/ng-sortable.js', where); // Files in use
});
