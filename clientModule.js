/* 
  a docusaurus client module. 
  for docs see: https://docusaurus.io/docs/api/docusaurus-config#clientModules and https://docusaurus.io/docs/advanced/client#client-module-lifecycles 
*/

const inviteId = "GJ4r8a8";
let cachedResponse = undefined;

// re-do on location change, because gets overridden again by theme default sometimes (when switching between / and /docs for example)
//  so this actually re-triggers now on EVERY page change (even just switching between doc pages - would not be required but doesn't matter since it's cached) 
// Note: this also gets triggered on first load, so no special handling required
export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname !== previousLocation?.pathname) {
    updateDiscordFooter();
  }
}

async function updateDiscordFooter() {
  const element = document.querySelector('#footer-discord-link');
  element.innerText = `Discord (${await getDisordUsersString()})`;
}

async function getDisordUsersString() {
  if (!cachedResponse) {
    const response = await fetch(`https://discordapp.com/api/v9/invites/${inviteId}?with_counts=true`);
    cachedResponse = await response.json();
    console.debug(`[Discord Stats]: Response from Discord API: ${cachedResponse.approximate_member_count} members, ${cachedResponse.approximate_presence_count} online`);
  } else {
    console.debug(`[Discord Stats]: Cache hit: ${cachedResponse.approximate_member_count} members, ${cachedResponse.approximate_presence_count} online`);
  }

  let membersTotal = cachedResponse.approximate_member_count;
  let membersOnline = cachedResponse.approximate_presence_count;

  return `${membersTotal} Members, ${membersOnline} Online`;
}
