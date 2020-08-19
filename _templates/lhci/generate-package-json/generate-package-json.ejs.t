---
inject: true
to: package.json
after: devDependencies
skip_if: lhci:build
---
"boo": "<%= cwd %>",
"lhci:build": "npm explore lighthouseci-generator -- npm run build",
"lhci:run": "npm explore lighthouseci-generator -- npm run",
"lhci:reset": ""
