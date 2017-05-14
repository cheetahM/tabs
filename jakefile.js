(function() {
    "use strict";

    var jshint = require("simplebuild-jshint");
    var semver = require("semver");    
    var packageJson = require("./package.json");
    var expectedVERSION = packageJson.engines.node;

    desc("Default build");
    task("default", ["lint"], function() {
     console.log("\n\nBuild OK!!");
    });

    desc("Check Node version");
    task("version", function() {
        console.log("Checking Node version: .");
        var actualVersion = process.version;

        if(semver.neq(expectedVERSION, actualVersion)) {
            fail("Node versions do not match. Expected: " + $expectedVERSION + ", but actual versios is: " + actualVersion);
        }
    });

    desc("Lint JavaScript code");
    task("lint", function() {
        process.stdout.write("Linting JavaScript: ");
        jshint.checkFiles({
            files: "jakefile.js",
            options: {},
            globals: {}
        }, complete, fail);
        }, { async: true });

}());