kasa
=================

some basic home utils id like


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/kasa.svg)](https://npmjs.org/package/kasa)
[![Downloads/week](https://img.shields.io/npm/dw/kasa.svg)](https://npmjs.org/package/kasa)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g kasa
$ kasa COMMAND
running command...
$ kasa (--version)
kasa/0.0.0 linux-x64 node-v22.17.1
$ kasa --help [COMMAND]
USAGE
  $ kasa COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`kasa hello PERSON`](#kasa-hello-person)
* [`kasa hello world`](#kasa-hello-world)
* [`kasa help [COMMAND]`](#kasa-help-command)
* [`kasa plugins`](#kasa-plugins)
* [`kasa plugins add PLUGIN`](#kasa-plugins-add-plugin)
* [`kasa plugins:inspect PLUGIN...`](#kasa-pluginsinspect-plugin)
* [`kasa plugins install PLUGIN`](#kasa-plugins-install-plugin)
* [`kasa plugins link PATH`](#kasa-plugins-link-path)
* [`kasa plugins remove [PLUGIN]`](#kasa-plugins-remove-plugin)
* [`kasa plugins reset`](#kasa-plugins-reset)
* [`kasa plugins uninstall [PLUGIN]`](#kasa-plugins-uninstall-plugin)
* [`kasa plugins unlink [PLUGIN]`](#kasa-plugins-unlink-plugin)
* [`kasa plugins update`](#kasa-plugins-update)

## `kasa hello PERSON`

Say hello

```
USAGE
  $ kasa hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ kasa hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/tokisuno/kasa/blob/v0.0.0/src/commands/hello/index.ts)_

## `kasa hello world`

Say hello world

```
USAGE
  $ kasa hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ kasa hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/tokisuno/kasa/blob/v0.0.0/src/commands/hello/world.ts)_

## `kasa help [COMMAND]`

Display help for kasa.

```
USAGE
  $ kasa help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for kasa.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.32/src/commands/help.ts)_

## `kasa plugins`

List installed plugins.

```
USAGE
  $ kasa plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ kasa plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/index.ts)_

## `kasa plugins add PLUGIN`

Installs a plugin into kasa.

```
USAGE
  $ kasa plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into kasa.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the KASA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the KASA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ kasa plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ kasa plugins add myplugin

  Install a plugin from a github url.

    $ kasa plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ kasa plugins add someuser/someplugin
```

## `kasa plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ kasa plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ kasa plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/inspect.ts)_

## `kasa plugins install PLUGIN`

Installs a plugin into kasa.

```
USAGE
  $ kasa plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into kasa.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the KASA_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the KASA_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ kasa plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ kasa plugins install myplugin

  Install a plugin from a github url.

    $ kasa plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ kasa plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/install.ts)_

## `kasa plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ kasa plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ kasa plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/link.ts)_

## `kasa plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ kasa plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kasa plugins unlink
  $ kasa plugins remove

EXAMPLES
  $ kasa plugins remove myplugin
```

## `kasa plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ kasa plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/reset.ts)_

## `kasa plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ kasa plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kasa plugins unlink
  $ kasa plugins remove

EXAMPLES
  $ kasa plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/uninstall.ts)_

## `kasa plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ kasa plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ kasa plugins unlink
  $ kasa plugins remove

EXAMPLES
  $ kasa plugins unlink myplugin
```

## `kasa plugins update`

Update installed plugins.

```
USAGE
  $ kasa plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.46/src/commands/plugins/update.ts)_
<!-- commandsstop -->
