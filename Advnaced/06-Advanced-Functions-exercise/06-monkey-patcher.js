function monkeyPatcher(action) {
    let result = [];
    let that = this;

    switch (action) {
        case 'upvote': this.upvotes++; break;
        case 'downvote': this.downvotes++; break;
        case 'score': result = getScore(); break;
    }

    function getScore() {
        let positive = that.upvotes;
        let negative = that.downvotes;
        let total = positive + negative;
        let score = positive - negative;

        if (total > 50) {
            let roundedNumber = Math.ceil(Math.max(positive, negative) * 0.25);
            positive += roundedNumber;
            negative += roundedNumber;
        }

        let rating = 'new';

        if (total < 10) {
            rating = 'new';
        } else if (that.upvotes > total * 0.66) {
            rating = 'hot';
        } else if (score >= 0 && total > 100) {
            rating = 'controversial';
        } else if (score < 0) {
            rating = 'unpopular';
        }

        return [positive, negative, score, rating];
    }

    return result;
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score');
monkeyPatcher.call(post, 'downvote');
score = monkeyPatcher.call(post, 'score');