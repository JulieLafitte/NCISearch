import images from './images';

const actors = [
    {
        name: 'Leroy Jethro',
        lastName: 'Gibbs',
        imgUrl: images.gibbs
    },
    {
        name: 'Anthony',
        lastName: 'DiNozzo',
        imgUrl: images.gibbs
    },
    {
        name: 'Caitlyn',
        lastName: 'Todd',
        imgUrl: images.gibbs
    },
    {
        name: 'Timothy',
        lastName: 'McGee',
        imgUrl: images.gibbs
    },
    {
        name: 'Ziva',
        lastName: 'David',
        imgUrl: images.gibbs
    },
];

const season = [
    {
        number: '1',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '2',
        imgUrl: images.gibbs
    },
    {
        number: '3',
        imgUrl: images.gibbs
    },
    {
        number: '4',
        imgUrl: images.gibbs
    },
];

const episode = [
    {
        number: '1',
        season: '',
        title: 'fgkjdflgj',
        resume: 'skjhfsldkfhslfhs',
        actors: '',
        category: 'none',
        stars: '5',
        imgUrl: images.gibbs
    },
];

const category = [
    {
        title: 'christmas'
    },
    {
        title: 'halloween'
    },
    {
        title: 'death'
    },
    {
        title: 'goodbyes'
    },
];

export default { actors, season, episode,category };