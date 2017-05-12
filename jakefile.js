(function() {
    "use strict";

    var semver = require("semver");
    var packageJson = require("./package.json");
    var expectedVERSION = packageJson.engines.node;

    desc("Default build");
    task("default", ["version", "lint"], function() {
     console.log("\n\nBuild OK!!");
    });

    desc("Check Node version");
    task("version", function() {
        console.log("Checking Node version: .");
        let actualVersion = process.version;

        //if(semver.neq(expectedVERSION, actualVersion)) {
            //fail(`Node versions do not match. Expected: ${expectedVERSION}, but actual versios is: ${actualVersion}.`);
        //}
    });

    desc("Lint JavaScript code");
    task("lint", function() {
        console.log("Linting JavaScript: .");
        jake.exec("node node_modules/.bin/jshint jakefile.sh", { interactive: true }, complete);
    }, { async: true});

}());