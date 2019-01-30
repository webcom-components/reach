const { cd, cp, exec, mkdir, rm } = require('shelljs');
const path = require('path');
const fs = require('fs');

const dist = path.resolve(__dirname, 'dist');
const esdoc = path.resolve(__dirname, 'esdoc');
const report = path.resolve(__dirname, 'report');
const samples = path.resolve(__dirname, 'samples');
const coverage = path.resolve(__dirname, 'coverage');
const { GH_TOKEN, TRAVIS_REPO_SLUG } = process.env;

// Delete previous version
rm('-rf', esdoc);
// Copy dist
mkdir('-p', path.join(esdoc, 'dist'));
cp('-r', dist, path.resolve(esdoc));

// Copy samples
mkdir('-p', path.join(esdoc, 'samples'));
cp('-r', samples, path.resolve(esdoc));

// Copy test report
mkdir('-p', path.join(esdoc, 'report'));
const files = fs.readdirSync(report);
const htmlFiles = files.filter(file => path.extname(file) === '.html');
const index = fs.createWriteStream(path.join(esdoc, 'report', 'index.html'));
index.write('<html><body><ul>');
htmlFiles.forEach((file) => {
  cp(path.join(report, file), path.join(esdoc, 'report', file));
  index.write(`<li><a href='${file}'>${file}</a></li>`);
});
index.write('</ul></body></html>');
index.end();

// Copy coverage report
mkdir('-p', path.join(esdoc, 'coverage'));
cp('-r', path.join(coverage, 'html', '*'), path.join(esdoc, 'coverage'));

// Copy bundle analysis report
mkdir('-p', path.join(esdoc, 'analysis'));
cp(path.join(__dirname, 'bundleAnalysis.html'), path.join(esdoc, 'analysis', 'index.html'));
cp(path.join(__dirname, 'bundleAnalysis.json'), path.join(esdoc, 'analysis', 'stats.json'));

// deploy gh pages
cd(esdoc);
exec('git init');
exec('git config user.name "webcomOps"');
exec('git config user.email "webcom.ops@orange.com"');
exec('git add .');
exec('git commit -m "Deploy to GitHub Pages"');
exec(`git push --force --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git" master:gh-pages > /dev/null 2>&1`);
