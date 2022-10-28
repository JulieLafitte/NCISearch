import images from './images';

const show = [
    {
        title: 'NCIS',
        status: 'onGoing',
        // saddly
        seasonNumber: '18',
        // Too many
        episodeNumber: '520',
        stars: '5',
    },
    {
        title: 'NCIS Los Angeles',
        status: 'onGoing',
        seasonNumber: '18',
        episodeNumber: '520',
        stars: '5',
    },
    {
        title: 'NCIS New Orleans',
        status: 'onGoing',
        seasonNumber: '18',
        episodeNumber: '520',
        stars: '5',
    },
    {
        title: 'NCIS Hawai',
        status: 'onGoing',
        seasonNumber: '18',
        episodeNumber: '520',
        stars: '5',
    },
];

const characters = [
    {
        name: 'Leroy Jethro',
        lastName: 'Gibbs',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.gibbs
    },
    {
        name: 'Anthony',
        lastName: 'DiNozzo',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.gibbs
    },
    {
        name: 'Caitlyn',
        lastName: 'Todd',
        ncis: 'ncis',
        status: 'dead',
        imgUrl: images.gibbs
    },
    {
        name: 'Timothy',
        lastName: 'McGee',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.gibbs
    },
    {
        name: 'Ziva',
        lastName: 'David',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.gibbs
    },
];

const actors = [
    {
        name: '',
        lastName: '',
        character: '',
        show: 'ncis',
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
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '3',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '4',
        stars: '5',
        imgUrl: images.gibbs
    },
];

const episode = [
    {
        number: '1',
        season: '1',
        title: 'fgkjdflgj',
        resume: 'skjhfsldkfhslfhs',
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.gibbs
    },
];

// const category = [
//     {
//         title: 'christmas',
//     },
//     {
//         title: 'halloween'
//     },
//     {
//         title: 'death'
//     },
//     {
//         title: 'goodbyes'
//     },
//     {
//         title: 'crossover'
//     },
// ];

export default { show, characters, actors, season, episode };