const path = require('path');
const projectDirPath = path.resolve(__dirname).split('/node_modules')[0];
const lhciDirPath = projectDirPath + '/lhci';

const projectDirPrompt = {
    type: 'input',
    name: 'projectDirPath',
    result() {
        return projectDirPath;
    },
    skip: true
};

const lhciDirPrompt = {
    type: 'input',
    name: 'lhciDirPath',
    result() {
        return lhciDirPath;
    },
    skip: true
};

module.exports = {
    projectDirPath,
    lhciDirPath,
    projectDirPrompt,
    lhciDirPrompt
};
