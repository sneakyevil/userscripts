// ==UserScript==
// @name         Steam - Group Owner Check
// @namespace    https://steamcommunity.com/id/whx/
// @version      1.0
// @description  Automatically check if current profile is owner of group
// @author       sneakyevil
// @grant        none
// @run-at       document-end
// @include      https://steamcommunity.com/profiles/*/groups*
// @include      https://steamcommunity.com/id/*/groups*
// ==/UserScript==

var m_vGroups = document.getElementsByClassName('group_block invite_row');
var m_vLastGroupIndex = 0;

var m_vCheckingGroup = false;
function SendRequestForNextGroup()
{
    var m_vGroupLinkTitle = m_vGroups[m_vLastGroupIndex].getElementsByClassName('linkTitle')[0];
    let m_lGroupUrl = m_vGroupLinkTitle.href + '/memberslistxml/?xml=1';

    var m_vGroupRequest = new XMLHttpRequest();
    m_vGroupRequest.open('GET', m_vGroupLinkTitle.href + '/memberslistxml/?xml=1', true);
    m_vGroupRequest.onreadystatechange = function()
    {
        if (m_vGroupRequest.readyState == 4 && m_vGroupRequest.status == 200)
        {
            let m_lXML = m_vGroupRequest.responseXML.documentElement;
            let m_lFirstSteamID = m_lXML.getElementsByTagName('members')[0].firstElementChild.firstChild.textContent;
            m_vGroupLinkTitle.style.color = (m_lFirstSteamID == g_rgProfileData.steamid ? 'green' : 'red');
        }

        m_vCheckingGroup = false;
    };
    m_vGroupRequest.send(null);
}

// shitty loop
function CheckNextGroup()
{
    if (!m_vCheckingGroup)
    {
        m_vCheckingGroup = true;
        SendRequestForNextGroup();
        m_vLastGroupIndex++;
    }

    if (m_vLastGroupIndex >= m_vGroups.length) return;

    setTimeout(CheckNextGroup, 500);
}
CheckNextGroup();
