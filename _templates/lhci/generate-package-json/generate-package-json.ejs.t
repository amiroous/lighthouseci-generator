---
inject: true
to: package.json
after: devDependencies
---
"boo": "<%= cwd %>",
"lhci:build": "npm explore lighthouseci-generator -- npm run build",
"lhci:run": "npm explore lighthouseci-generator -- npm run",
"lhci:reset": ""
