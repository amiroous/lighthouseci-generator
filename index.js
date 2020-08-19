const { exec } = require("child_process");

const NO_COLOR = "\x1b[0m";
const MUTED_COLOR = "\x1b[1;30;01m";
const INFO_COLOR = "\x1b[36;01m";
const SUCCESS_COLOR = "\x1b[32;01m";
const WARNING_COLOR = "\x1b[33;01m";
const ERROR_COLOR = "\x1b[31;01m";

const sh =(command, color = NO_COLOR) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`${ERROR_COLOR}${error.message}${NO_COLOR}`);
            return;
        }
        if (stderr) {
            console.log(`${ERROR_COLOR}${stderr}${NO_COLOR}`);
            return;
        }
        console.log(`${color}${stdout}${NO_COLOR}`);
    });
};

module.exports = (() => {

    sh("echo 'Installing Lighthouse CI Generator'", INFO_COLOR);

})();
