const path = require('path');

// Absolute Path to the Main Project (Consumer of This Package)
const projectDirPath = path.resolve(__dirname).split('/node_modules')[0];

// Absolute Path to This Package
const packageDirPath = path.resolve();

// Relative Path from this Package to the Main Project
const packageToProjectRelPath = path.relative(packageDirPath, projectDirPath);

// Target Folder in Main Project to Contain Generated Files
const lhciDir = '/lhci';
const lhciDirPath = projectDirPath + lhciDir;
const lhciDirRelPath = path.relative(packageDirPath, lhciDirPath);


// Hidden Prompt to Set LHCI Dir Relative Path to the Main Project
const lhciDirRelPrompt = {
    type: 'input',
    name: 'lhciDirRelPath',
    result() {
        return lhciDirRelPath;
    },
    skip: true
};

const packageToProjectRelPrompt = {
    type: 'input',
    name: 'packageToProjectRelPath',
    result() {
        return packageToProjectRelPath;
    },
    skip: true
};

module.exports = {
    packageToProjectRelPrompt,
    lhciDirRelPath,
    lhciDirRelPrompt
};
