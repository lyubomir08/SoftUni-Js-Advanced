class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        for (let player of footballPlayers) {
            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            const currPlayer = this.invitedPlayers.find(player => player.name === name);

            if (currPlayer) {
                if (playerValue > currPlayer.playerValue) {
                    currPlayer.playerValue = playerValue;
                }
            }

            this.invitedPlayers.push({ name, age, playerValue });
        }

        let result = `You successfully invite `;

        this.invitedPlayers.forEach((player, idx, self) => {
            result += idx < self.length - 1 ? `${player.name}, ` : `${player.name}.`;
        });

        return result;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);

        const currPlayer = this.invitedPlayers.find(player => player.name === name);

        if(!currPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if(playerOffer < currPlayer.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${currPlayer.playerValue - playerOffer} million more are needed to sign the contract!`);
        }

        currPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const currPlayer = this.invitedPlayers.find(player => player.name === name);

        if (!currPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if(currPlayer.age < age) {
            let diff = age - currPlayer.age;

            if(diff < 5) {
                return `${name} will sign a contract for ${age - currPlayer.age} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }

        return `${name} is above age limit!`;
    }

    transferWindowResult() {
        let result = [`Players list:`];

        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name)).forEach(player => {
            result.push(`Player ${player.name}-${player.playerValue}`);
        });

        return result.join('\n');
    }
}