# Lighthouse CI Generator

## Integration:

1. Add "Lighthouse CI Generator" as Your Application Dependencies
    - Edit Your Application `package.json` with Following Details:
    ```
    "scripts": {
        "lhci:build": "npm explore lighthouseci-generator -- npm run build",
        "lhci:start": "npm explore lighthouseci-generator -- npm start"
    },
    "devDependencies": {
        "lighthouseci-generator": "ssh://git@github.com:amiroous/lighthouseci-generator.git#master"
    }
    ```

2. Install Your Application Dependencies
    - Open Terminal in Your Application Root and Run `npm install`
   
3. Generate LHCI Files
    - In Terminal Run `npm run lhci:build`
    - Follow and Answers Questions to the End

4. Run Performance Test Manually
    - In Terminal Run `npm run lhci:start`
    - Once Done, Look for a Generated Report Link in Terminal Messages and Open it in Browser.
 

## Note:
- If you select `Dynamic App` as your application type, 
    you'll be asked to enter a __start server command__ which basically 
    will setup a temporary server on the host machine and then runs the test. 
