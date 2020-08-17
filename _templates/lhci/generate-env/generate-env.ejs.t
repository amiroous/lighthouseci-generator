---
to: .env
---
# Test Targets
BASE_URL="<%= baseUrl %>"
TEST_PATHS="<%= paths %>"

# Report Server
SERVER_URL="<%= serverUrl %>"
SERVER_PORT="<%= serverPort %>"
SERVER_TOKEN="<%= serverBuildToken %>"

# Authentication
USERNAME="<%= username %>"
PASSWORD="<%= password %>"

# Temporary Environment Variables (Eventually Should be Set Automatically Through Github Actions)
# LHCI_BUILD_CONTEXT__CURRENT_HASH Should be Unique on Every Run
LHCI_BUILD_CONTEXT__CURRENT_BRANCH=master
LHCI_BUILD_CONTEXT__CURRENT_HASH="<%= currentHash %>"
LHCI_BUILD_CONTEXT__COMMIT_MESSAGE="Commit Message Placeholder"
LHCI_BUILD_CONTEXT__AUTHOR="Commit Author Placeholder"
LHCI_BUILD_CONTEXT__AVATAR_URL="https://urlplaceholder.test"
LHCI_BUILD_CONTEXT__COMMIT_TIME="2020-10-01T00:00:00+00:00"

