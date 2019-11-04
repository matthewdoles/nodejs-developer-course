const notes = require("./utils.js");
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log('Title: ', argv.title);
        console.log('Body: ', argv.body);
        notes.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes();
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse();