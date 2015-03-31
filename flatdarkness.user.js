// ==UserScript==
// @name          Flat Darkness Hack Forums Theme
// @namespace     https://github.com/iHydra
// @version       1.0
// @description   Custom theme for Hack Forums.
// @include       http://www.hackforums.net/*
// @include       http://hackforums.net/*
// @include       http://nsfw.hackforums.net/*
// @include       http://www.nsfw.hackforums.net/*
// @author        iHydra
// @resource      Custom_CSS https://raw.githubusercontent.com/iHydra/flatdarkness/master/stylesheet.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// @run-at        document-start
// ==/UserScript==

var newCSS = GM_getResourceText ("Custom_CSS");
GM_addStyle (newCSS);