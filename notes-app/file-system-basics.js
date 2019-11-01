const fs = require('fs');
fs.writeFileSync('notes.txt', 'This file was created by Node.js!');

// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to files
// 2. Run script
// 3. Check notes.txt to verify appended text

fs.appendFileSync('notes.txt', 'Hello, my name is Matthew');
