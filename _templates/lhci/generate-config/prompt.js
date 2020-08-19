const common = require('../common');
const env = require('dotenv').config({ path: common.lhciDirRelPath + '/.lhci' }).parsed;

const appTypeChoices = {
    "stand-alone": "Stand Alone (Existing URLs)",
    "dynamic": "Dynamic App (SPA, React, NextJS, ...)",
    "static": "Static App (Ready HTML Files)",
};

const promptConfig = {

    prompt: ({ prompter, args }) =>
        prompter.prompt({
            type: 'select',
            name: 'appType',
            message: "Select Your Application Type:",
            choices: Object.values(appTypeChoices),
            result(value) {
                return Object.entries(appTypeChoices).find(x => x[1] === value)[0];
            },
        })
        .then(({ appType }) => {

            const setNull = {
                init: '',
                skip: true
            };

            const promptQuestions = [
                {
                    type: 'input',
                    name: 'appType',
                    initial: appType,
                    skip: true
                },
                {
                    type: 'input',
                    name: 'startServerCommand',
                    message: `Enter Start Server Command:`,
                    ...(appType !== "dynamic" && setNull)
                },
                {
                    type: 'numeral',
                    name: 'performance',
                    message: "Enter Min Desired Performance Score (0-100):",
                    initial: "75",
                    format(value) {
                        return `${value}%`;
                    },
                    result(value) {
                        return value / 100;
                    }
                },
                {
                    type: 'numeral',
                    name: 'accessibility',
                    message: "Enter Min Desired Accessibility Score (0-100):",
                    initial: "75",
                    format(value) {
                        return `${value}%`;
                    },
                    result(value) {
                        return value / 100;
                    }
                },
                {
                    type: 'numeral',
                    name: 'bestPractices',
                    message: "Enter Min Desired Best Practices Score (0-100):",
                    initial: "75",
                    format(value) {
                        return `${value}%`;
                    },
                    result(value) {
                        return value / 100;
                    }
                },
                {
                    type: 'numeral',
                    name: 'seo',
                    message: "Enter Min Desired SEO Score (0-100):",
                    initial: 75,
                    format(value) {
                        return `${value}%`;
                    },
                    result(value) {
                        return value / 100;
                    }
                },
                {
                    type: 'numeral',
                    name: 'numberOfRuns',
                    message: "Enter Number of Runs:",
                    initial: 3
                },
                {
                    type: 'confirm',
                    name: 'isHeadful',
                    message: "Do You Want to Run Tests in Headful Mode? (yes/no)"
                },
                {
                    type: 'confirm',
                    name: 'signInRequired',
                    initial: env.USERNAME && env.PASSWORD,
                    skip: true
                },
                common.lhciDirRelPrompt
            ];

            return prompter.prompt(promptQuestions);
        })
};

module.exports = promptConfig;
