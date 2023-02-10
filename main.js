const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
  core.getInput("bucket");

  core.notice("Hello from my Javascript Action!");
}

run();
