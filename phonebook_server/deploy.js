const { execSync } = require('child_process');
const comment = process.argv[2];

if (!comment) {
    console.error('Please provide a commit message');
    process.exit(1);
}

execSync('npm run build:ui', { stdio: 'inherit' });
execSync('git add .', { stdio: 'inherit' });
execSync(`git commit -m "${comment}"`, { stdio: 'inherit' });
execSync('git push origin part3', { stdio: 'inherit' });
execSync('npm start', { stdio: 'inherit' });