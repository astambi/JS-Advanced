function tickets(ticketsData, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let tickets = [];
    for (let item of ticketsData) {
        let tokens = item.split('|'); // <destinationName>|<price>|<status>
        let ticket = new Ticket(...tokens);
        tickets.push(ticket);
    }
    switch (sortingCriteria) {
        case 'price':
            tickets.sort((a, b) => a.price - b.price);
            break;
        case 'destination':
            tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'status':
            tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    return tickets;
}

console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));
console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));