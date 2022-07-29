// ==UserScript==
// @name         Xbox Cloud Gaming - Hide Stream Hud
// @namespace    https://steamcommunity.com/id/whx/
// @version      1.0
// @description  Automatically show/hide top left corner stream hud when mouse is not hovering over it.
// @author       sneakyevil
// @grant        none
// @run-at       document-end
// @include      https://www.xbox.com/*/play/launch/*/*
// ==/UserScript==

var m_StreamHud = null;

setInterval(function()
{
    m_StreamHud = document.getElementById('StreamHud');
    if (m_StreamHud == null) return;

    m_StreamHud.onmouseover = function() { m_StreamHud.style.opacity = 1.0; };
    m_StreamHud.onmouseout = function() { m_StreamHud.style.opacity = 0.0; };
}, 1000);
