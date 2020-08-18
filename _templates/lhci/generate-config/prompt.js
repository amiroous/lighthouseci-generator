const env = require('dotenv').config({ path: '../../lhci/.lhci' }).parsed;

const prompts = [
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
];


const hiddenPrompts = [
    {
        type: 'confirm',
        name: 'signInRequired',
        initial: env.USERNAME && env.PASSWORD,
        skip: true
    },
    {
        type: 'input',
        name: 'lhciEnv',
        initial: env,
        skip: true
    },
];

console.log(hiddenPrompts);


module.exports = [
    ...prompts,
    ...hiddenPrompts
];
