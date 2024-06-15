class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        for (let candidate of candidates) {
            let [name, education, yearsExperience] = candidate.split('-');
            yearsExperience = Number(yearsExperience);

            let existCandidate = this.jobCandidates.find(el => el.name === name);

            if (existCandidate) {
                if (yearsExperience > existCandidate.yearsExperience) {
                    existCandidate.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
            }
        }

        let buff = `You successfully added candidates: `;
        this.jobCandidates.forEach((candidate, i, self) => {
            buff += i < self.length - 1 ? `${candidate.name}, ` : `${candidate.name}.`;
        });

        return buff;
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);

        let currPerson = this.jobCandidates.find(p => p.name === name);

        if(!currPerson) {
            throw new Error(`${name} is not in the candidates list!`);
        } else if (minimalExperience > currPerson.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        currPerson.yearsExperience = 'hired';

        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {
        let currPerson = this.jobCandidates.find(p => p.name === name);

        if(!currPerson) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if(currPerson.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if(currPerson.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length == 0) {
            throw new Error('Candidate Database is empty!');
        }

        let result = ['Candidates list:'];

        this.jobCandidates.sort((a,b) => a.name.localeCompare(b.name)).forEach(p => {
            result.push(`${p.name}-${p.yearsExperience}`);
        });

        return result.join('\n');
    }
}
