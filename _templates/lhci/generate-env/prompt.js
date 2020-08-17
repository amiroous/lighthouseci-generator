const validate = require("validate.js");
const { v4: uuidv4 } = require('uuid');


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
                    }
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
                    }
                },
                {
                    type: 'input',
                    name: 'serverPort',
                    message: "Enter Server Port (Optional):",
                    initial: "",
                },
                {
                    type: 'input',
                    name: 'serverBuildToken',
                    message: "Enter Server Build Token:",
                    validate(value) {
                        return !validate.isEmpty(value);
                    },
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
            ];

            return prompter.prompt([promptUsername, promptPassword, ...otherQuestions]);
        })
};

module.exports = promptEnv;

