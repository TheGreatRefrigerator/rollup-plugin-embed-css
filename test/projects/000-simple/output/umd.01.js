/*
{
	"format": "umd",
	"options": {
		"base": "path-to-project-root",
		"dest": "path-to-project-root/output/umd.01.css"
	}
}
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	var classNames = {"foo":"_src_foo_css_foo","bar-baz":"_src_foo_css_bar-baz"};

	window.classNames = classNames;

})));