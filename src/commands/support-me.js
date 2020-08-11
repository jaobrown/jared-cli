const { Command } = require("@oclif/command");
require("es6-promise").polyfill();
require("isomorphic-fetch");

class SupportMeCommand extends Command {
  async run() {
    await fetch("//complimentr.com/api")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((support) => {
        return this.log(support.compliment);
      });
  }
}

SupportMeCommand.description = `Use this command for affirmation.
`;

module.exports = SupportMeCommand;
