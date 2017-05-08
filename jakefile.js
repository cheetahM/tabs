(function() {
    "use strict";

    var packageJson = require("./package.json");
    var expectedVERSION = packageJson.engines.node;

    desc("Default build");
    task("default", ["version"], function() {
     console.log("\n\nBuild OK!!");
    });

    desc("Check Node version");
    task("version", function() {
        console.log("Checking Node version: .");
        let actualVersion = process.version;

        if(actualVersion !== expectedVERSION) {
            fail(`Node versions do not match. Expected: ${expectedVERSION}, but actual versios is: ${actualVersion}.`);
        }
    });

}());