/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
	mainSidebar: {
		'Quick Start': ['1_what-is-nodecg', 'installing', 'creating-bundles'],
		Guides: [
			'2_concepts-and-terminology',
			'5_manifest',
			'6_nodecg-configuration',
			'7_using-npm',
			'9_bundle-configuration',
			'assets',
			'sounds',
			'replicant-schemas',
			'performance-tips',
			'making-dialogs',
			'portable-nodecg'
		],
		Advanced: ['mounts', '4_security', 'screenshot-testing', 'custom-routes', 'sentry'],
		'Using Frameworks': [
			'frameworks/using-bundlers',
			'frameworks/typescript',
			'frameworks/vue',
			'frameworks/using-p5js'
		],
		Migrating: [
			'migrating/migrating-0.7-to-0.8',
			'migrating/migrating-0.8-to-0.9',
			'migrating/migrating-0.9-to-1.0'
		],
		'API Reference': [
			'classes/nodecg',
			'classes/replicant',
			'classes/readReplicant',
			'classes/waitForReplicants',
			'classes/sendMessage',
			'classes/sendMessageToBundle',
			'classes/listenFor',
			'classes/unlisten',
			'classes/log',
			'classes/mount',
			'classes/getDialog',
			'classes/getDialogDocument',
			'classes/getSocketIOServer',
			'classes/findCue',
			'classes/playSound',
			'classes/stopAllSounds',
			'classes/stopSound'
		]
	}
};
