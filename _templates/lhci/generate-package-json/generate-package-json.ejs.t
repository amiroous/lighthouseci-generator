---
inject: true
to: <%= packageToProjectRelPath %>/package.json
after: scripts
skip_if: lhci:build
---
"lhci:build": "npm explore lighthouseci-generator -- npm run build",
"lhci:run": "npm explore lighthouseci-generator -- npm run",
"start": "lhci autorun --config=<%= lhciDirRelPath %>/.lighthouserc.js"
