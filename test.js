// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://192.168.0.10/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
    };
  
    document.querySelectorAll(".zbtn").forEach(function(img) {
      img.addEventListener("contextmenu", function(e){
          e.preventDefault();
      });
    });
})();
