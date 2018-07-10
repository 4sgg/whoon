#!/usr/bin/env node

const fs = require('fs')
const yargs = require('yargs')

var argv = yargs
.usage("\nUsage: $0 <command> [options]")
.command('add <name> <ip>', 'add a new server', function (yargs) {
    yargs
    .usage("Usage: $0 add <name> <ip>")
    .positional('name', {
        describe: "server's name",
        type: 'string'
    })
    .positional('ip', {
        describe: "server's ip",
        type: 'string'
    })
})
.command('del <name>', 'delete a server', function (yargs) {
    yargs
    .usage("Usage: $0 del <name>")
    .positional('name', {
        describe: "server's name",
        type: 'string'
    })
})
.command('start', 'start checking server status')
.help()
.argv

var cmd = argv._[0]

if (cmd == 'add') {
    console.log("add %s %s", argv.name, argv.ip)
}
else if (cmd == 'del') {
    console.log("delete %s", argv.name)
}
else if (cmd == 'start') {
    console.log("start")
} else {
    yargs.showHelp()
}



