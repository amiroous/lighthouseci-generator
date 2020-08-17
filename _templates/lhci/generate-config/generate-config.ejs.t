---
to: ../../lhci/.lighthouserc.js
force: true
---
const ENV = require('dotenv').config({ path: process.cwd() + '/.env' }).parsed;
const testPaths = ENV.TEST_PATHS.split(",");
const testUrls = [...testPaths].reduce((acc, path) => [...acc, ENV.BASE_URL + path], []);

module.exports = {

    ci: {
        collect: {
            numberOfRuns: <%= numberOfRuns -%>,
            url: [...testUrls],
            <%_ if(signInRequired) { _%>
            puppeteerScript: "authentication.js",
            puppeteerLaunchOptions: {
                headless: <%= !isHeadful %>
            },
            <%_ } _%>
            headful: <%= isHeadful %>,
            settings: {
                budgetsPath: "budget.json",
                // extraHeaders: JSON.stringify({})
            }
        },
        assert: {
            // preset: "lighthouse:no-pwa",
            "performance-budget": "error",
            assertions: {
                "categories:performance": ["warn", {
                    minScore: <%= performance %>
                }],
                "categories:accessibility": ["warn", {
                    minScore: <%= accessibility %>
                }],
                "categories:best-practices": ["warn", {
                    minScore: <%= bestPractices %>
                }],
                "categories:seo": ["warn", {
                    minScore: <%= seo %>
                }]
            }
        },
        upload: {
            target: "lhci",
            token: ENV.SERVER_TOKEN,
            serverBaseUrl: ENV.SERVER_URL,
        },
        /** Only Needed for Local Server Setup */
        // server: {
        //     port: ENV.SERVER_PORT,
        //     storage: {
        //         storageMethod: "sql",
        //         sqlDialect: "sqlite",
        //         sqlDatabasePath: "/data/lhci.db"
        //     }
        // },
        wizard: {
            serverBaseUrl: ENV.SERVER_URL
        }
    }
};







