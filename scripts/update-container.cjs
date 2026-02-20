const fs = require('fs');
const path = require('path');

function walk(dir) {
    let files = fs.readdirSync(dir);
    for (let file of files) {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let lines = content.split('\n');
            let updated = false;
            for (let i = 0; i < lines.length; i++) {
                // Safe line-by-line replacement.
                if (lines[i].includes('className=') && lines[i].includes('container') && lines[i].includes('px-6')) {
                    lines[i] = lines[i].replace(/\bpx-6\b/g, '');
                    // Remove double spaces inside quotes if they were created
                    lines[i] = lines[i].replace(/  +/g, ' ');
                    updated = true;
                }
            }
            if (updated) {
                fs.writeFileSync(fullPath, lines.join('\n'));
                console.log('Updated ' + fullPath);
            }
        }
    }
}

walk('./src');
