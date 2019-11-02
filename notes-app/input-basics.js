console.log(process.argv);
console.log(process.argv[2]);

const command = process.argv[2];

if (command === 'add') {
    console.log('Adding notes!');
} 
else if (command === 'remove') {
    console.log('Removing note!');
}

// can pass arguments in via terminal
// Ex: node input-basics.js add --title="This is my title"