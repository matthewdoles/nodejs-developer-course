const yargs = require('yargs');

// Use --help in terminal to disaply more options

// add, remove, read, list
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!')
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
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
console.log(yargs.argv);


//console.log(process.argv);
// versus
//console.log(yargs.argv);
