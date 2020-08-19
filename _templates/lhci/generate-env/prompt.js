const validate = require("validate.js");
const { v4: uuidv4 } = require('uuid');
const common = require('../common');

const promptEnv = {

    prompt: ({ prompter, args }) =>
        prompter.prompt({
            type: 'confirm',
            name: 'signInRequired',
            message: "Do You Want to Test Authenticated User?"
        })
        .then(({ signInRequired }) => {

            const setNull = {
                init: '',
                skip: true
            };

            const promptUsername = {
                type: 'input',
                name: 'username',
                message: `Enter User Name:`,
                ...(!signInRequired && setNull)
            };

            const promptPassword = {
                type: 'password',
                name: 'password',
                message: `Enter Password:`,
                ...(!signInRequired && setNull)
            };

            const otherQuestions = [
                {
                    type: 'input',
                    name: 'baseUrl',
                    message: "Enter Test Base URL:",
                    validate(value) {
                        return !validate({website: value}, {
                            website: {
                                url: {
                                    allowLocal: true
                                }
                            }
                        });
                    },
                    initial: "https://qa1-www.rakuten.com" // TODO: Remove Me
                },
                {
                    type: 'list',
                    name: 'paths',
                    message: "Enter Test Paths (Comma-Separated):",
                    initial: "/"
                },
                {
                    type: 'input',
                    name: 'serverUrl',
                    message: "Enter Server URL:",
                    validate(value) {
                        return !validate({website: value}, {
                            website: {
                                url: {
                                    allowLocal: true
                                }
                            }
                        });
                    },
                    initial: "https://lhci-server.acquisition-np.rr-it.com/" // TODO: Remove Me
                },
                {
                    type: 'input',
                    name: 'serverPort',
                    message: "Enter Server Port (Optional):",
                    initial: "9001",
                },
                {
                    type: 'input',
                    name: 'serverBuildToken',
                    message: "Enter Server Build Token:",
                    validate(value) {
                        return !validate.isEmpty(value);
                    },
                    initial: "8f29751a-ed07-4af6-943c-4793218a2972" // TODO: Remove Me
                },
                {
                    type: 'input',
                    name: 'currentHash',
                    message: "Enter Build Token:",
                    result() {
                        return uuidv4();
                    },
                    skip: true
                },
                common.lhciDirRelPrompt
            ];

            return prompter.prompt([promptUsername, promptPassword, ...otherQuestions]);
        })
};

module.exports = promptEnv;

