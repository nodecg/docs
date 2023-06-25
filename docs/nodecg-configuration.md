---
id: nodecg-configuration
title: NodeCG Configuration
sidebar_label: Configuration
---

NodeCG is configured via a `cfg/nodecg.js`, `cfg/nodecg.yaml`, or `cfg/nodecg.json` file with the following schema:

### Schema {#schema}

- `host` _String_ The IP address or hostname that NodeCG should bind to. [DEFAULT: `"0.0.0.0"`]
- `port` _Integer_ The port that NodeCG should listen on. [DEFAULT: `9090`]
- `baseURL` _String_ The URL of this instance. Used for things like cookies. If you use a reverse proxy, you'll likely need to set this value. [DEFAULT: `HOST:PORT`]
- `exitOnUncaught` _Boolean_ Whether or not to exit on uncaught exceptions. [DEFAULT: `true`]
- `logging` _Object_ Contains other configuration properties.
  - `console` _Object_ Contains properties for console logging.
    - `enabled` _Boolean_ Whether to enable console logging. [DEFAULT: `true`]
  	- `replicants` _Boolean_ Whether to enable logging of the Replicants subsystem. Very spammy. [DEFAULT: `false`]
    - `timestamps` _Boolean_ Whether to add timestamps to the console logging. [DEFAULT: `true`]
    - `level` _String_ Lowest importance of messages which should be logged. Must be `"verbose"`, `"debug"`, `"info"`, `"warn"` or `"error"` [DEFAULT: `"info"`]
  - `file` _Object_ Contains properties for file logging.
    - `enabled` _Boolean_ Whether to enable file logging. [DEFAULT: `false`]
    - `replicants` _Boolean_ Whether to enable logging of the Replicants subsystem. Very spammy. [DEFAULT: `false`]
    - `timestamps` _Boolean_ Whether to add timestamps to the file logging. [DEFAULT: `true`]
    - `path` _String_ The filepath to log to. [DEFAULT: `"logs/nodecg.log"`]
    - `level` _String_ Lowest importance of messages which should be logged. Must be `"verbose"`, `"debug"`, `"info"`, `"warn"` or `"error"` [DEFAULT: `"info"`]
- `bundles` _Object_ Contains configuration for bundles.
  - `enabled` _Array of strings_ A whitelist array of bundle names that will be the only ones loaded at startup. Cannot be used with `bundles.disabled`. [DEFAULT: `null` -> this bundle whitelist feature is disabled -> load all bundles]
  - `disabled` _Array of strings_ A blacklist array of bundle names that will not be loaded at startup. Cannot be used with `bundles.enabled`. [DEFAULT: `null` -> no bundle blacklisted from loading / all bundles are loaded]
  - `paths` _Array of strings_ An array of additional ABSOLUTE paths where bundles are located. [DEFAULT: `[]` (empty array)]
- `login` _Object_ Contains other configuration properties.
  - `enabled` _Boolean_ Whether to enable login security. [DEFAULT: `false`]
  - `sessionSecret` _String_ The secret used to salt sessions. This option is required when `login.enabled = true`! [NO DEFAULT!]
  - `forceHttpsReturn` _Boolean_ Forces Steam & Twitch login return URLs to use HTTPS instead of HTTP. Useful in reverse proxy setups. [DEFAULT: `false`]
  - `local` _Object_ Contains local username & password login configuration properties.
    - `enabled` _Boolean_ Whether to enable Local authentication. [DEFAULT: `false`]
    - `allowedUsers` _Array of objects_ Which usernames and passwords to allow. Example: `{"username": "admin", "password": "foo123"}`. This option is required when `login.local.enabled = true`! [NO DEFAULT!]
  - `steam` _Object_ Contains steam login configuration properties.
    - `enabled` _Boolean_ Whether to enable Steam authentication. [DEFAULT: `false`]
    - `apiKey` _String_ A Steam API Key. Obtained from [http://steamcommunity.com/dev/apikey](http://steamcommunity.com/dev/apikey). This option is required when `login.steam.enabled = true`! [NO DEFAULT!]
    - `allowedIds` _Array of strings_ Which 64 bit Steam IDs to allow. Can be obtained from [https://steamid.io/](https://steamid.io/). This option is required when `login.steam.enabled = true`! [NO DEFAULT!]
  - `twitch` _Object_ Contains twitch login configuration properties.
    - `enabled` _Boolean_ Whether to enable Twitch authentication. [DEFAULT: `false`]
    - `clientID` _String_ A Twitch application ClientID [http://twitch.tv/kraken/oauth2/clients/new](http://twitch.tv/kraken/oauth2/clients/new). This option is required when `login.twitch.enabled = true`! [NO DEFAULT!]
    - `clientSecret` _String_ A Twitch application ClientSecret [http://twitch.tv/kraken/oauth2/clients/new](http://twitch.tv/kraken/oauth2/clients/new). This option is required when `login.twitch.enabled = true`! [NO DEFAULT!]
    - _Note:_ Configure your Twitch OAuth credentials with a Redirect URI to `{baseURL}/login/auth/twitch`
    - `scope` _String_ A space-separated string of Twitch application [permissions](https://dev.twitch.tv/docs/authentication/#scopes). [DEFAULT: `"user_read"`]
    - `allowedUsernames` _Array of strings_ Which Twitch usernames to allow. Either this option or `allowedIds` is required when `login.twitch.enabled = true`! [NO DEFAULT!]
    - `allowedIds` _Array of strings_ Which Twitch IDs to allow. Can be obtained from [https://twitchinsights.net/checkuser](https://twitchinsights.net/checkuser). Either this option or `allowedUsernames` is required when `login.twitch.enabled = true`! [NO DEFAULT!]
  - `discord` _Object_ Contains discord login configuration properties.
    - `enabled` _Boolean_ Whether to enable Discord authentication. [DEFAULT: `false`]
    - `clientID` _String_ A Discord application ClientID  [https://discord.com/developers/applications/](https://discord.com/developers/applications/). This option is required when `login.discord.enabled = true`! [NO DEFAULT!]
    - `clientSecret` _String_ A Discord application ClientSecret [https://discord.com/developers/applications/](https://discord.com/developers/applications/)
    - _Note:_ Configure your Discord OAuth credentials with a Redirect URI to `{baseURL}/login/auth/discord`. This option is required when `login.discord.enabled = true`! [NO DEFAULT!]
    - `scope` _String_ A space-separated string of Discord application [permissions](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes). [DEFAULT: `"identify"`]
    - `allowedUserIDs` _Array of strings_ Which Discord IDs to allow. Either this option or `allowedGuilds` is required when `login.discord.enabled = true`! [NO DEFAULT!]
    - `allowedGuilds` _Array of objects_ Which servers to allow users from. Either this option or `allowedUserIDs` is required when `login.discord.enabled = true`! [NO DEFAULT!]
    - Format for `allowedGuilds` objects
      - `guildID` _String_ Users in this Discord Server are allowed to log in
      - `allowedRoleIDs` _Array of strings_ Additionally require one of the roles on the server to log in
      - `guildBotToken` _String_ Discord bot token, needed if allowedRoleIDs is used [https://discord.com/developers/applications/](https://discord.com/developers/applications/)
- `ssl` _Object_ Contains HTTPS/SSL configuration properties.
  - `enabled` _Boolean_ Whether to enable SSL/HTTPS encryption. [DEFAULT: `false`]
  - `allowHTTP` _Boolean_ Whether to allow insecure HTTP connections while SSL is active. [DEFAULT: `false`]
  - `keyPath` _String_ The path to an SSL key file. This option is required when `ssl.enabled = true`! [NO DEFAULT!]
  - `certificatePath` _String_ The path to an SSL certificate file. This option is required when `ssl.enabled = true`! [NO DEFAULT!]
  - `passphrase` _String_ The passphrase for the provided key file. [OPTIONAL]
- `sentry` _Object_ Contains [Sentry](https://sentry.io/welcome/) configuration properties. 
  - `enabled` _Boolean_ Whether to enable Sentry error reporting. [DEFAULT: `false`]
  - `dsn` _String_ Your Sentry API key for error reporting. This option is required when `sentry.enabled = true`! [NO DEFAULT!]

### Example {#example} Config {#example}

```js
// cfg/nodecg.js
module.exports = {
	host: '0.0.0.0',
	port: 9090,
	bundles: {
		enabled: ['bundle-name'],
		paths: ['C:\\nodecg\\experimental-bundles'],
	},
	login: {
		enabled: true,
		sessionSecret: 'supersecret',
		steam: {
			enabled: true,
			apiKey: 'YYYYY',
			allowedIds: ['11111111111111111', '22222222222222222'],
		},
		twitch: {
			enabled: true,
			clientID: 'your_app_id',
			clientSecret: 'your_app_key',
			scope: 'user_read',
			allowedUsernames: ['some_username'],
			allowedIds: ['11111111111111111', '22222222222222222'],
		},
		discord: {
			enabled: true,
			clientID: 'your_discord_app_client_id',
			clientSecret: 'your_discord_app_client_secret',
			scope: 'identify guilds',
			allowedUserIDs: ['159600065017675778', '54561421005950976'],
			allowedGuilds: [
				{
					guildID: '754749209722486814',
					allowedRoleIDs: ['754751725457637546', '755012946400378910'],
					guildBotToken: 'your_bot_token',
				},
				{
					guildID: '754749209722486814',
				},
			],
		},
		logging: {
			console: {
				enabled: true,
				timestamps: false,
				level: 'verbose',
				replicants: false,
			},
			file: {
				enabled: true,
				timestamps: true,
				path: 'logs/server.log',
				level: 'info',
				replicants: false,
			},
		},
		ssl: {
			enabled: false,
			keyPath: '',
			certificatePath: '',
		},
		sentry: {
			enabled: true,
			dsn: 'https://xxx:yyy@sentry.io/zzz',
		},
	},
};
```
