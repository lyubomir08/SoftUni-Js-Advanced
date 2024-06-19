class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook (title, author) {
        const currBook = this.books.find(book => book.title === title && book.author === author);

        if(currBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }

        this.books.push({ title, author });
        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }

    addMember (memberName) {
        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`;
        }

        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember (memberName, bookTitle) {
        const memberIdx = this.members.indexOf(memberName);

        if(memberIdx === -1) {
            throw new Error(`Member ${memberName} not found.`);
        }

        const currBookIdx = this.books.findIndex(book => book.title === bookTitle);

        if(currBookIdx === -1) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        const assignedBook = this.books.splice(currBookIdx, 1)[0];
        return  `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
    }

    generateReadingReport () {
        if (this.members.length === 0) {
            return `No members in the book club.`;
        }

        if (this.books.length === 0) {
            return `No available books in the library.`;
        }

        let result = [`Available Books in ${this.library} library:`];

        this.books.forEach(book => {
            result.push(`"${book.title}" by ${book.author}`);
        });

        return result.join('\n');
    }
}