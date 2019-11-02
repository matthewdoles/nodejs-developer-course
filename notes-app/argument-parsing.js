const yargs = require('yargs');

// Use --help in terminal to disaply more options

// Challenge 2: Configure a body option for add command
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work

// add, remove, read, list
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
    handler: function(argv) {
        console.log('Title: ', argv.title);
        console.log('Body: ', argv.body);
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(argv) {
        console.log('Removing the note!')
    }
})

//Challenge: Add the two remining commands
//
// 1. Setup command to support 'list' command (print placeholder message)
// 2. Setup command to support 'read' command (print placeholder message)
// 3. Test work by running both commands and observing output
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function() {
        console.log('Listing out all your notes.')
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading your note.')
    }
})


// Customize yargs version
yargs.version('1.1.0');
yargs.parse(); // sames as console.log(yargs.argv);
