module.exports = function() {
    const fs = require('fs');
    process.stdout.write("prompt > ");
    
    // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
    process.stdin.on('data', data => {
        if (data.toString().trim() === 'ls') {
            fs.readdir('./', 'utf8', (err, files) => {
                if (err) {
                    throw err;
                } else {
                    process.stdout.write(files.join('\n'));
                    process.stdout.write('prompt > ');
                }
            });
        }
    })
}

