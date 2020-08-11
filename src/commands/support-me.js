const { Command, flags } = require("@oclif/command");

class SupportMeCommand extends Command {
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

SupportMeCommand.description = `Describe the command here
...
Extra documentation goes here
`;

SupportMeCommand.flags = {
  name: flags.string({ char: "n", description: "name to print" }),
};

module.exports = SupportMeCommand;
