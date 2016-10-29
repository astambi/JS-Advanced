function monkeyPatcher(input) {
    switch (input) {
        case 'upvote':   this.upvotes++; break;
        case 'downvote': this.downvotes++; break;
        case 'score':    return score(this); // obj
    }

    function score(obj) {
        let modifier = 0;
        if (obj.upvotes + obj.downvotes > 50)
            modifier = Math.ceil(Math.max(obj.upvotes, obj.downvotes) * 0.25);
        let score = obj.upvotes - obj.downvotes;
        let rating = '';
        if (obj.upvotes + obj.downvotes < 10)
            rating = 'new';
        else if (score < 0)
            rating = 'unpopular';
        else if (obj.upvotes / (obj.upvotes + obj.downvotes) > 0.66)
            rating = 'hot';
        else if (obj.upvotes > 100 || obj.downvotes > 100)
            rating = 'controversial';
        else
            rating = 'new';
        return [obj.upvotes + modifier,
                obj.downvotes + modifier,
                score,
                rating];
    }
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
console.log(monkeyPatcher.call(post, 'score'));
for (let i = 0; i < 50; i++)
    monkeyPatcher.call(post, 'downvote');
console.log(monkeyPatcher.call(post, 'score'));
// console.log(post);

// let post = {
//     id: '1',
//     author: 'pesho',
//     content: 'hi guys',
//     upvotes: 0,
//     downvotes: 0
// };
// monkeyPatcher.call(post, 'upvote');
// console.log(monkeyPatcher.call(post, 'score'));