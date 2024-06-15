describe('buyLotteryTicket', () => {
    it('should throw error if invalid input data is passed', () => {
        assert.throws(() => lottery.buyLotteryTicket('pesho', 5, 1), 'Invalid input!');
        assert.throws(() => lottery.buyLotteryTicket(1, '1', true), 'Invalid input!');
        assert.throws(() => lottery.buyLotteryTicket(1, 1, 'pesho'), 'Invalid input!');
    });

    it('should return false if boolean buy is false', () => {
        assert.throws(() => lottery.buyLotteryTicket(30, 10, false), 'Unable to buy lottery ticket!');
    });

    it('should return message if if it is valid', () => {
        assert.equal(lottery.buyLotteryTicket(10, 5, true), `You bought 5 tickets for 50$.`);
        assert.equal(lottery.buyLotteryTicket(1, 1, true), `You bought 1 tickets for 1$.`);
        assert.equal(lottery.buyLotteryTicket(30, 4, true), `You bought 4 tickets for 120$.`);
    });

    it('test with  min ticketCount', () => {
        assert.throws(() => lottery.buyLotteryTicket(10, 0, true), 'Invalid input!');
    });

    it('test with min ticket price', () => {
        assert.throws(() => lottery.buyLotteryTicket(0, 10, true), 'Invalid input!');
    });
});

describe('checkTicket', () => {
    it('should throw error if invalid input data is passed', () => {
        assert.throws(() => lottery.checkTicket(1, 'pesho'), 'Invalid input!');
        assert.throws(() => lottery.checkTicket('pesho', 1), 'Invalid input!');
        assert.throws(() => lottery.checkTicket(undefined, 1), 'Invalid input!');
        assert.throws(() => lottery.checkTicket({}, {}), 'Invalid input!');
    });

    it('test with valid input data length', () => {
        let ticketNumbers = [1, 2, 3, 4, 5, 6];
        let luckyNumbers = [1, 2, 3, 4, 5, 6];

        assert.equal(ticketNumbers.length, luckyNumbers.length);
    });

    it('test with invalid input length', () => {
        assert.throws(() => lottery.checkTicket([1, 2], [1, 2, 3, 4]), 'Invalid input!');
        assert.throws(() => lottery.checkTicket([1, 2, 3, 4], [1, 2]), 'Invalid input!');
        assert.throws(() => lottery.checkTicket('pesho', [1, 2]), 'Invalid input!');
        assert.throws(() => lottery.checkTicket([1, 2, 3, 4], 'pesho'), 'Invalid input!');
        assert.throws(() => lottery.checkTicket([1, 2, 3, 4], [1, 2]), 'Invalid input!');
        assert.throws(() => lottery.checkTicket('pesho', 'pesho'), 'Invalid input!');
    });

    it('should return message if there is form 3 to 5 winning numbers in the ticket', () => {
        assert.equal(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]), 'You win the JACKPOT!!!');
        assert.equal(lottery.checkTicket([1, 2, 3, 4, 7, 8], [1, 2, 3, 4, 5, 6]), 'Congratulations you win, check your reward!');
        assert.equal(lottery.checkTicket([1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]),);
    });
});

describe('secondChance', () => {
    it('should throw error if invalid input data is passed', () => {
        assert.throws(() => lottery.secondChance('pesho', [12]), "Invalid input!");
        assert.throws(() => lottery.secondChance(1, 1), "Invalid input!");
        assert.throws(() => lottery.secondChance('1', '1'), "Invalid input!");
        assert.throws(() => lottery.secondChance('1', []), "Invalid input!");
    });

    it('test valid', () => {
        assert.equal(lottery.secondChance(10, [10]), 'You win our second chance prize!');
        assert.equal(lottery.secondChance(10, [20]), `Sorry, your ticket didn't win!`);
    });
});