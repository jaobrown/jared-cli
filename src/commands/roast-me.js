const { Command } = require("@oclif/command");

class RoastMeCommand extends Command {
  async run() {
    await fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((roast) => {
        return this.log(roast.insult);
      });
  }
}

RoastMeCommand.description = `WARNING: EXPLICIT! But use this command when you're feeling cocky. 
`;

module.exports = RoastMeCommand;
