const { exec } = require("child_process");

module.exports = (() => {
    console.log("Lighthouse CI Generator");

    exec('echo -e "\e[31mLighthouse CI Generator\e[0m"', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
})();
