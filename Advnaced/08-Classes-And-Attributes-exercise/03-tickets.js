function tickets(arr, sortCriteria) {
    const ticketList = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

        static sort(arr, sortCriteria) {
            return arr.sort((a,b) => {
                return sortCriteria == 'price' ?
                    a[sortCriteria] - b[sortCriteria] : 
                    a[sortCriteria].localeCompare(b[sortCriteria]);
            });
        }
    }

    for (let el of arr) {
        let [destination, price, status] = el.split('|');

        const currTicket = new Ticket(destination, price, status);
        ticketList.push(currTicket);
    }

    return Ticket.sort(ticketList, sortCriteria);
}

const result = tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');

console.log(result);