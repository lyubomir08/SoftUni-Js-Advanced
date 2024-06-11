function createPesron(firstName, lastName) {
    let result = {
        firstName,
        lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(value) {
            let [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    };

    return result;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName);
person.lastName = "Peterson";
console.log(person.fullName);
person.fullName = "Nikola Tesla";
console.log(person.firstName)
console.log(person.lastName);