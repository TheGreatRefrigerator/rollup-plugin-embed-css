/*
{
	"format": "iife",
	"options": {
		"base": "path-to-project-root/src",
		"dest": "path-to-project-root/output/iife.00.css"
	}
}
*/
(function () {
	'use strict';

	var classNames = {"foo":"_foo_css_foo","bar-baz":"_foo_css_bar-baz"};

	window.classNames = classNames;

}());