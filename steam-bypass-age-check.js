// ==UserScript==
// @name         Steam - Bypass Age Check
// @namespace    https://steamcommunity.com/id/whx/
// @version      1.0
// @description  Automatically bypass Age Check page.
// @author       sneakyevil
// @grant        none
// @run-at       document-end
// @include      https://store.steampowered.com/agecheck/app/*
// ==/UserScript==

let m_lAgeYear = document.getElementById('ageYear');
if (m_lAgeYear)
{
    let m_lNewAge = new Date().getFullYear();
    m_lAgeYear.value = (m_lNewAge - 18).toString();
}

ViewProductPage();
