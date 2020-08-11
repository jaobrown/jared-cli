const { Command } = require("@oclif/command");
require("es6-promise").polyfill();
require("isomorphic-fetch");

class AffirmMeCommand extends Command {
  async run() {
    await fetch("//complimentr.com/api")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((compliment) => {
        return this.log(compliment.compliment);
      });
  }
}

AffirmMeCommand.description = `Use this command for affirmation.
`;

module.exports = AffirmMeCommand;
