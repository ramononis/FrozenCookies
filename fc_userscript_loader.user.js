// ==UserScript==
// @name           Frozen Cookies
// @version        github-latest
// @description    Userscript to load Frozen Cookies written by Icehawk78, forked by ramononis
// @author         ramononis
// @homepage       https://github.com/ramononis/FrozenCookies
// @include        http://orteil.dashnet.org/cookieclicker/
// @updateURL      https://rawgit.com/ramononis/FrozenCookies/master/fc_userscript_loader.js
// @downloadURL    https://rawgit.com/ramononis/FrozenCookies/master/fc_userscript_loader.js
// @run-at         document-start
// ==/UserScript==

// Dev:       https://github.com/ramononis/FrozenCookies/development/
// Master:    https://github.com/ramononis/FrozenCookies/master/
// Github.io: http://ramononis.github.io/FrozenCookies/

function LoadFrozenCookies() {
    Game.LoadMod('https://rawgit.com/ramononis/FrozenCookies/master/frozen_cookies.js');
}

window.addEventListener("load", LoadFrozenCookies, false);
