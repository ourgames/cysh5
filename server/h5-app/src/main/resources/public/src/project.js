require=function r(e,o,t){function n(l,c){if(!o[l]){if(!e[l]){var i="function"==typeof require&&require;if(!c&&i)return i(l,!0);if(u)return u(l,!0);var f=new Error("Cannot find module '"+l+"'");throw f.code="MODULE_NOT_FOUND",f}var p=o[l]={exports:{}};e[l][0].call(p.exports,function(r){var o=e[l][1][r];return n(o||r)},p,p.exports,r,e,o,t)}return o[l].exports}for(var u="function"==typeof require&&require,l=0;l<t.length;l++)n(t[l]);return n}({HelloWorld:[function(r,e,o){"use strict";cc._RF.push(e,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},text:"Hello, World!"},onLoad:function(){},update:function(r){}}),cc._RF.pop()},{}]},{},["HelloWorld"]);