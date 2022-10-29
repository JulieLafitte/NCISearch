import images from './images';

const shows = [
    {
        title: 'NCIS',
        status: 'onGoing',
        // saddly
        seasonNumber: '20',
        // Too many
        episodeNumber: '441',
        stars: '5',
    },
    {
        title: 'NCIS Los Angeles',
        status: 'onGoing',
        seasonNumber: '13',
        episodeNumber: '286',
        stars: '5',
    },
    {
        title: 'NCIS New Orleans',
        status: 'onGoing',
        seasonNumber: '7',
        episodeNumber: '95',
        stars: '5',
    },
    {
        title: 'NCIS Hawaï',
        status: 'onGoing',
        seasonNumber: '2',
        episodeNumber: '27',
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
        imgUrl: images.dinozzo
    },
    {
        name: 'Caitlin',
        lastName: 'Todd',
        ncis: 'ncis',
        status: 'dead',
        imgUrl: images.todd
    },
    {
        name: 'Timothy',
        lastName: 'McGee',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.mcgee
    },
    {
        name: 'Abigail',
        lastName: 'Sciuto',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.sciuto
    },
    {
        name: 'Donald',
        lastName: 'Mallard',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.mallard
    },
    {
        name: 'Ziva',
        lastName: 'David',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.david
    },
    {
        name: 'Jennifer',
        lastName: 'Shepard',
        ncis: 'ncis',
        status: 'dead',
        imgUrl: images.shepard
    },
    {
        name: 'Jimmy',
        lastName: 'Palmer',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.palmer
    },
    {
        name: 'Leon',
        lastName: 'Vance',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.vance
    },
    {
        name: 'Eleanor',
        lastName: 'Bishop',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.bishop
    },
    {
        name: 'Nick',
        lastName: 'Torres',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.torres
    },
    {
        name: 'Jacqueline',
        lastName: 'Sloane',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.sloane
    },
    {
        name: 'Kasie',
        lastName: 'Hines',
        ncis: 'ncis',
        status: 'alive',
        imgUrl: images.hines
    },
];

const actors = [
    {
        name: 'Mark',
        lastName: 'Harmon',
        character: '',
        show: 'ncis',
        season: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19',
    },
    {
        name: 'Michael',
        lastName: 'Weatherly',
        character: '',
        show: 'ncis',
        season: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13',
    },
    {
        name: 'Sasha',
        lastName: 'Alexander',
        character: '',
        show: 'ncis',
        season: '1, 2',
    },
    {
        name: 'Sean',
        lastName: 'Murray',
        character: '',
        show: 'ncis',
        season: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20',
    },
    {
        name: 'Pauley',
        lastName: 'Perrette',
        character: '',
        show: 'ncis',
        season: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15',
    },
    {
        name: 'David',
        lastName: 'McCallum',
        character: '',
        show: 'ncis',
        season: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20',
    },
    {
        name: 'Cote',
        lastName: 'De Pablo',
        character: '',
        show: 'ncis',
        season: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11',
    },
    {
        name: 'Lauren',
        lastName: 'Holly',
        character: '',
        show: 'ncis',
        season: '3, 4, 5',
    },
    {
        name: 'Brian',
        lastName: 'Dietzen',
        character: '',
        show: 'ncis',
        season: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20',
    },
    {
        name: 'Rocky',
        lastName: 'Carroll',
        character: '',
        show: 'ncis',
        season: '6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20',
    },
    {
        name: 'Emily',
        lastName: 'Wickersham',
        character: '',
        show: 'ncis',
        season: '11, 12, 13, 14, 15, 16, 17, 18',
    },
    {
        name: 'Wilmer',
        lastName: 'Valderrama',
        character: '',
        show: 'ncis',
        season: '14, 15, 16, 17, 18, 19, 20',
    },
    {
        name: 'Maria',
        lastName: 'Bello',
        character: '',
        show: 'ncis',
        season: '15, 16, 17, 18',
    },
    {
        name: 'Diona',
        lastName: 'Reasonover',
        character: '',
        show: 'ncis',
        season: '16, 17, 18, 19, 20',
    },
];

const seasons = [
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
    {
        number: '5',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '6',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '7',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '8',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '9',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '10',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '11',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '12',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '13',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '14',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '15',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '16',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '17',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '18',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '19',
        stars: '5',
        imgUrl: images.gibbs
    },
    {
        number: '20',
        stars: '5',
        imgUrl: images.gibbs
    },
];

const episodes = [
    {
        number: '1',
        season: '1',
        title: 'Yankee White',
        titleFr: 'Air Force One',
        resume: "While on Air Force One, a Navy commander, Ray Trapp who was tasked with carrying the 'football' dies under mysterious circumstances, forcing an emergency landing in Wichita, Kansas. But while his death is originally thought to be a tragic accident, NCIS eventually uncovers evidence suggesting the commander was in fact murdered and that it might be connected to a possible assassination attempt on the President.",
        resumeFr: "À la suite du décès d'un officier à bord de l'avion du Président, Air Force One, les agents spéciaux de l'équipe d'intervention du NCIS, Leroy Jethro Gibbs, Tony DiNozzo, et le Dr Donald « Ducky » Mallard, médecin légiste, se lancent dans l'enquête, ce qui ne semble guère au goût de T.C. Fornell, l'agent du FBI chargé des investigations au sujet de cette mort suspecte où la vie du président des États-Unis est en jeu, dans Air Force One à l'instigation même d'Al-Qaïda.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode1
    },
    {
        number: '2',
        season: '1',
        title: 'Hung Out To Dry',
        titleFr: 'Le Dernier Saut',
        resume: "A Marine dies during a night-time training jump. The culprit seems to be a faulty parachute, but standard investigation reveals that the death might not have been an accident after all. Gibbs begins to believe that the supposed accident which resulted in the Marine's death might actually be murder after all and he and Tony, along with new recruit Kate Todd, set out to find out who tampered with the dead Marine's faulty parachute and eventually sent him to his death.",
        resumeFr: "Durant un périlleux saut d'entraînement de nuit, le parachute d'un marine ne s'ouvre pas, ni son parachute de secours, précipitant la jeune recrue sur une voiture garée, où se trouvaient deux adolescents. Les agents du NCIS doivent déterminer rapidement la cause de la mort. Le marine a sauté avec une clavicule cassée et sous l'influence de médicaments. L'enquête montre que certains parachutes ont été sabotés.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode2
    },
    {
        number: '3',
        season: '1',
        title: 'Seadog',
        titleFr: 'Réaction En Chaîne',
        resume: "When a driver-less boat and several bodies, including that of a Navy commander, wash up on the beach, seemingly during a freelance drug deal gone sour, the media is quick to link him to drug trafficking and the evidence stacks up. Being a former Marine himself, Gibbs refuses to believe that a good officer could be so corrupt. In his efforts to clear the commander's record and good name, Gibbs uncovers a turf war between two rival drug gangs and a terrorist's scheme to knock out the national power grid. The NCIS team is aided in its investigation by a DEA Agent, and FBI Special Agent Tobias Fornell.",
        resumeFr: "Sur une plage, un groupe de jeunes personnes est réuni pour une soirée. Ils sont surpris par des coups de feu et assistent à l'échouage d'un hors-bord qui fonce sur eux. Pendant ce temps, l'équipe du NCIS enquête sur une autre partie de la plage où a été ramené le corps d'un officier de marine retrouvé au large des côtes. L'équipe ne tarde pas à faire le lien entre ce meurtre et celui de deux hommes mêlés à un trafic de drogue et de fausse monnaie. Gibbs reste cependant sceptique quant à l'implication du capitaine, connu pour son implication sociale, dans une affaire aussi douteuse qui finalement s'avère être une entreprise terroriste.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode3
    },
    {
        number: '4',
        season: '1',
        title: 'The Immortals',
        titleFr: 'Les immortels',
        resume: "The discovery of a drowned sailor in dress whites, with an officer's ceremonial sword and weights chained to his waist, sparks a suicide investigation and eventually sends the team to the USS Foster so that they can dig into the deceased officer's life and find out what his colleagues thought of him. Kate refuses to believe that the deceased sailor committed suicide as, like her, he came from a Catholic family where suicide is considered a mortal sin. Meanwhile, Abby discovers a link between the crew of the USS Foster and an MMORPG known as The Immortals, and begins searching the game for clues to help Gibbs and the team solve the case and save the ship from possible destruction.",
        resumeFr: "Au cours d'une plongée en apnée, un jeune plongeur découvre le corps d'un marin en tenue de cérémonie, et arborant une épée, mais lesté de poids. L'équipe du NCIS ne tarde pas à découvrir que le jeune marin, Russel McDonald, faisait partie d'un cercle d'adeptes de jeux de rôles sur internet, tellement pris au jeu qu'ils n'arrivent plus à faire la différence entre vie virtuelle et réelle.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode4
    },
    {
        number: '5',
        season: '1',
        title: 'The Curse',
        titleFr: 'La Momie',
        resume: "Gibbs and the team are called in when a mummified lieutenant, who was believed to have absconded with 1.2 million dollars of stolen Navy funds nine years previously and later received a dishonorable discharge for allegedly deserting his position, is found in a half-buried cargo pod with Navy markings on it by a deer hunter deep in the woods of St. Mary's River State Park. Two former shipmates who served with the deceased come under suspicion for both the murder and the theft. Gibbs and Tony work at investigating the murder, while Kate is charged with tracking down the missing funds, although she is more devoted to ensuring the dead lieutenant's former wife and young daughter receive his death benefits. Abby uses a computer reconstruction to work a confession out of a possible suspect.",
        resumeFr: "Dans une forêt du Maryland, un chasseur découvre le réservoir d'un avion militaire, contenant un cadavre momifié. Après enquête, tout porte à croire qu'il s'agit du lieutenant Marc Gils, officier payeur sur le Porte-avions de l'US Navy USS Dwight D. Eisenhower. Dix ans plus tôt, en 1994, celui-ci avait été porté disparu en mer, le jour même où une forte somme d'argent avait été dérobée dans le coffre-fort du navire. Le rapport de l'époque laisse supposer que Gils est l'auteur du vol. Néanmoins, si son corps est retrouvé, l'argent lui, s'est volatilisé. Les analyses de Ducky prouvent que le lieutenant a été tué, avant d'être placé dans le réservoir à l'intérieur duquel Abby décèle les empreintes d'un certain Martinez, mécanicien sur l’Eisenhower. Constatant que son prédécesseur sur l'affaire a bâclé son rapport, Gibbs considère que Martinez était, sinon le complice, le meurtrier de Gils. Martinez ayant été assassiné, les soupçons se portent alors sur la séduisante Erin Tonner. Quartier maître à bord du porte-avions, luxueusement retirée de l'armée, elle avait une liaison avec Martinez. Reste à prouver que ces deux-là sont les auteurs du meurtre de Gils et du vol.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode5
    },
    {
        number: '6',
        season: '1',
        title: 'High Seas',
        titleFr: 'Trafic En Haute Mer',
        resume: "One of Gibbs's former team members, NCIS Special Agent Stan Burley, who is on board the USS Enterprise investigating a case, calls for assistance when a sailor suffers a meth overdose while on leave, despite the sailor in question claiming that he's never taken the drug. Gibbs, Tony, and Kate fly out to investigate. Not long after their arrival, another sailor is admitted to sickbay under the same circumstances and later dies. The team also discovers that the crew is unusually efficient and several senior crew members are behaving strangely.",
        resumeFr: "Confronté à une affaire de drogue, Stan, un ancien équipier de Gibbs, l'appelle en renfort. Lors d'une escale, le quartier-maître Wilkes est retrouvé dans un état second, dû à une prise régulière de méthamphétamine. Interrogé par Gibbs, il jure ne s'être jamais drogué, et paraît sincèrement dépassé par ce qui lui arrive. Un autre cas semblable au sien survient au cours d'un exercice d'appontage. Dans le même temps, Wilkes décède, a priori d'un arrêt cardiaque. L'autopsie de Ducky montre qu'il s'agit d'un meurtre. Les deux jeunes matelots appartiennent à l'équipe du maître Reyes, que Tony juge rude et exigeant, mais dont les états de service sont irréprochables. En visionnant les bandes vidéo des entraînements, Gibbs et Stan s'aperçoivent que Reyes fournit des gélules à ses hommes. Celui-ci n'en fait d'ailleurs pas mystère, puisque les gélules ne contiennent que de la caféine. Les tests auxquels procède Tony lui donnent raison. Pourtant Gibbs flaire une supercherie et, tout comme ses collaborateurs, reste convaincu que Reyes drogue ses gars à leur insu.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode6
    },
    {
        number: '7',
        season: '1',
        title: 'Sub Rosa',
        titleFr: 'L Imposteur',
        resume: "NCIS Norfolk Case Agent Timothy McGee works on a case of a partially dissolved corpse found in a barrel of acid at the Norfolk Naval Base, and calls in the Major Case Response Team to help him. As the investigation continues, it soon becomes apparent that the killer took steps to prevent the body from being identified. Gibbs quickly comes to believe that the motive for the brutal murder was identity theft and his suspicions are further confirmed when it is revealed that although a submariner is dead, no one has been reported missing, leading Gibbs to believe that an impostor is on one of the submarines. Tony, Abby, and McGee are tasked with identifying the deceased, while Gibbs and Kate are sent underwater on a submarine to vet five possible suspects, one of whom might have been responsible for the murder and to also prevent a possible sarin attack from taking place.",
        resumeFr: "Gibbs et son équipe doivent élucider à qui appartient le corps rongé par de l'acide fluorhydrique et découvert sur la base navale, dans un baril de ce même produit, et savoir le pourquoi du meurtre. Les conclusions de Ducky laissent présumer que l'homme était sous-marinier sur l'USS Philadelphia (sous-marin nucléaire de la Classe Los Angeles) récemment parti en exercice dans le cadre de manœuvres de l'OTAN. De l'avis de Gibbs, un imposteur s'est glissé à bord du sous-marin, prenant la place du matelot assassiné et encore non identifié. Accompagné de Kate, il se fait déposer sur le Philadelphia commandé par Peters, peu enclin à collaborer à l'enquête qui perturbe ses manœuvres. Parmi les cinq nouveaux sous-mariniers présentant une morphologie semblable à celle du cadavre, Drews, opérateur sonar, retient l'attention de Gibbs et de Kate. À la base, les recherches d'Abby et de Tony éclairent l'enquête : le corps identifié est celui de Drews et l'homme qui le remplace sur le Philadelphia se nomme en réalité Shoan Travis. Membre d'un groupe d'écologistes radicaux, Travis projette de diffuser du gaz neurotoxique mortel sarin dans le sous-marin. Se voyant démasqué, le kamikaze se suicide. Gibbs n'est cependant pas sûr que tout risque est écarté.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode7
    },
    {
        number: '8',
        season: '1',
        title: 'Minimum Security',
        titleFr: 'Fausse Piste',
        resume: "The team heads for Cuba when Ducky and Gerald discover that a dead translator from Gitmo they have been working on has a stomach full of emeralds. NCIS Special Agent Paula Cassidy turns out to be deceitful to Tony when he is ordered to investigate her involvement, while Gibbs and Kate try to discover where the emeralds came from, how they ended up in their translator's stomach, and prevent the assassination of an important prisoner with links to Osama Bin Laden.",
        resumeFr: "Depuis 1903, les États-Unis possèdent une concession territoriale sur l'île de Cuba : Guantanamo Bay, la Base navale de la baie de Guantánamo hébergeant à présent un centre de détention: le camp de Guantánamo. Après son séjour à Guantanamo, un interprète de la Navy meurt soudainement au volant de sa voiture alors qu'il rentrait chez lui. Accident ou crime ? Dans son corps on découvre des émeraudes provenant d'Afghanistan. À nouveau à pied d’œuvre, l'équipe du NCIS met le cap sur Cuba afin d'établir un rapport entre la mort de l'officier interprète et une affaire de contrebande dans le centre de détention. Tout le flair de Gibbs, allié à la sagacité de profiler de Kate, ne sera pas de trop pour faire aboutir la mission. Un tueur d'Al Qaïda y est présent avec comme mission de tuer un gendre de Ben Laden.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode8
    },
    {
        number: '9',
        season: '1',
        title: 'Marine Down',
        titleFr: 'Mort-Vivant',
        resume: "The team is called to investigate when a dead Marine's wife receives a phone call from her husband who supposedly died under suspicious circumstances. However, the case is complicated when someone impersonates the Marine's CO and Tony. As the investigation continues, the Marine turns up embalmed, having been killed two days after his funeral supposedly took place. Gibbs suspects CIA involvement, and the team soon find themselves tracking a rogue operative who killed the first Marine as a part of a cover-up in regards to a classified mission that ended in disaster and is now attempting to kill off the dead Marine's partner to make sure that the investigation is wrapped up while he flees with the money the CIA previously paid in an attempt to save the two kidnapped Marines. As such, the team find themselves racing against the clock as they attempt to rescue the deceased Marine's partner before another murder takes place and take down the rogue CIA agent once and for all.",
        resumeFr: "Alors que la femme d'un marine s'apprête à se rendre à l'enterrement de son mari déclaré mort au combat, elle reçoit un appel de celui-ci lui annonçant être en vie. L'équipe est chargée de vérifier s'il s'agit d'un canular ou si l'homme est toujours en vie. L'enquête montre qu'il travaillait pour la CIA et qu'il était toujours en vie au moment de son enterrement. Cette mission emmènera l'équipe jusqu'en Colombie dans un sinistre centre funéraire. Jack Canton tenant en joue le major Peary, finira par être éliminé par DiNozzo et Todd par plusieurs coups de feu. À la fin, le major Peary retourne voir sa famille avec une blessure à l'oreille.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode9
    },
    {
        number: '10',
        season: '1',
        title: 'Left For Dead',
        titleFr: 'Amnésie',
        resume: "Kate immediately develops a close, personal bond with a young woman suffering from amnesia after she wakes up and crawls from her grave in a national park following a possible murder attempt. Her memory is completely blank but the woman or 'Jane Doe' claims to remember that a bomb is present on a Navy ship and that people will die unless it is found, leading Gibbs and the team on a hunt for the bomb and also to find Jane's true identity. But unknown to Kate and the team, Jane is actually lying to Kate as she is already beginning to secretly remember her past and is probably planning something to strike back against her employers, something that might end in bloodshed not only for her but could affect Gibbs and his team as well.",
        resumeFr: "Une jeune femme, enterrée vivante, parvient à sortir de terre, à rejoindre une route et être remarquée par des automobilistes. Placée en observation, elle est devenue amnésique mais a un souvenir qui laisse l'équipe perplexe ; une bombe placée sur un bateau de la marine. L'équipe est chargée de la découvrir, ainsi que de déterminer si la femme est responsable ou simple témoin. L'agent s'occupe beaucoup d'elle. L'agent Caitlin Todd amène la jeune femme amnésique, Suzanne McNeil, experte en explosifs, à la BFF, pour essayer de lui faire retrouver la mémoire. En fait, Suzanne,qui a entièrement retrouvé ses esprits, a pour idée d’éliminer le PDG de la société Walter Ritcher qui ne voulait pas se marier avec elle et qui de plus avait choisi de la licencier. Par vengeance, elle fabrique un dernier explosif et le déclenche. La déflagration blesse l'agent Todd.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode10
    },
    {
        number: '11',
        season: '1',
        title: 'Eye Spy',
        titleFr: 'L Oeil De L Espion',
        resume: "NCIS is called in to investigate the murder of a naval officer at Little Creek Naval Base following an anonymous tip-off. McGee manages to track the tip-off to Langley, suggesting that the CIA has been spying on the base. Gibbs and Kate follow the tip-off, coming across a witness who leads the team to several possible suspects. At first the murder seems to be tied in with work the officer was involved in, but Gibbs soon begins to suspect that the motive for the death might not actually be espionage-related and that someone else might be the true killer.",
        resumeFr: "Alors qu'il observe de Langley — via un satellite espion — une jeune femme faire du bronzage intégral sur une plage, un jeune scientifique sous contrat pour la CIA est le témoin du meurtre d'un sergent de la marine. L'équipe découvre que le marine était chargé de tester des armes pour la Marine et travaillait sur un projet de sonar portable top secret en liaison avec une société privée. Le meurtre du sergent permet à cette société d'obtenir un délai supplémentaire pour finir la mise au point. Un ami d'Abby, spécialiste de la NASA va assister l'équipe pour reconstituer la scène, mais finalement l'enquête se tourne vers une banale affaire de jalousie.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode11
    },
    {
        number: '12',
        season: '1',
        title: 'My Other Left Foot',
        titleFr: 'La Mante Religieuse',
        resume: "When the severed leg of a marine is discovered in a dumpster, Gibbs and the team immediately run into a problem – identifying who the leg belongs to and finding the rest of his body. Kate and Tony are ordered to find the marine's place of burial and exhume the body, only to discover that the marine to whom the leg belongs to was apparently cremated years ago by a very distraught woman claiming to be the deceased marine's sister. Gibbs talks to an old Marine buddy of his and discovers that there is more to this 'sister' than meets the eye. The NCIS team decide to investigate closer to home where they uncover a mother and daughter who are both guarding a deep secret.",
        resumeFr: "Une jambe est retrouvée dans une poubelle. Grâce à un tatouage, Abby et Ducky apprennent au reste de l'équipe qu'il s'agit d'un marine. Or aucun marine n'est porté disparu. L'enquête montre que la jambe recèle un élément de prothèse numéroté au niveau de sa cheville et que le marine est déclaré mort depuis deux ans. L'équipe se tourne vers le médecin de la petite ville où il est mort, une vieille dame qui aurait dû faire l'autopsie mais ne l'a pas faite. Tout cela pour une sombre affaire d'escroquerie à l'assurance.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode12
    },
    {
        number: '13',
        season: '1',
        title: 'One Shot, One Kill',
        titleFr: 'Tireur D Elite',
        resume: "When an over-embellishing marine recruiter is killed, the NCIS team quickly discover that a highly intelligent and skilled sniper was behind the attack. Initially, the team believes the sniper had a grudge against the recruiter, but when a second attack occurs the investigation takes on a wider scope and as a result, the FBI are called in, bringing Gibbs into direct conflict with his old friend Fornell. After hitting several dead ends, the team realize that the killer had left a calling card in the form of a white feather at each scene and was most likely targeting recruiters in revenge for being rejected by the Corps. Hoping to lure out the killer, Gibbs dons his old Marine uniform and takes over the recruitment office with Kate as his new Commanding officer, while DiNozzo and the FBI team lie in wait.",
        resumeFr: "Un recruteur de la marine, le sergent Alvarez, est assassiné par un tireur d'élite qui laisse comme indice une plume blanche. Peu de temps après, un autre recruteur de la marine est assassiné par le même homme. Gibbs décide de lui tendre un piège.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode13
    },
    {
        number: '14',
        season: '1',
        title: 'The Good Samaritan',
        titleFr: 'Alibi',
        resume: "A local county sheriff calls in NCIS upon discovering a murdered lieutenant commander by the roadside, quickly followed by the murder of a civilian contractor two counties over. As the team struggle to find a motive or suspects for either case, another murder occurs; this time a naval aviator. Ducky points out that while the murders appear to follow the same modus operandi and seem to have been carried out by a serial killer, some elements are different, indicating that the murders were not carried out by the same individual which suggests that there is a copycat on the loose. A DNA sample draws suspicion onto the widow of the third victim, but she has an iron-clad alibi, leaving Gibbs and the team with a complex investigation and many loose ends to tie up.",
        resumeFr: "Un soir, sur le bord d'une route, un dentiste de la marine s'arrête pour aider une automobiliste ayant des soucis avec sa voiture. Le lendemain, il est retrouvé nu et sans vie. Alors que l'équipe est chargée de l'enquête, deux autres hommes sont assassinés. Gibbs envisage l'hypothèse d'un tueur en série.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode14
    },
    {
        number: '15',
        season: '1',
        title: 'Enigma',
        titleFr: 'Faux Semblant',
        resume: "Gibbs puts his career on the line after finding out that a marine colonel, William Ryan (Terry O'Quinn) who also happens to be his former CO has absconded from Iraq with two million dollars, and returned to the States under an assumed name. The FBI, led by Fornell, believe that he staged the ambush and stole the money for himself while Gibbs denies the claim, believing he is innocent. Ryan later contacts Gibbs, and explains that he has discovered a conspiracy to siphon funds out of Iraq for use on black ops while vehemently denying any responsibility. Gibbs finds himself in a delicate situation as he realizes that Ryan is mentally unstable after the latter kept mentioning a Lt. Cameron, Gibbs's former company XO who had died in his arms years ago. Gibbs later learns that Lt. Cameron is alive, but only in Ryan’s head and is working with Ryan to stop the conspiracy. After being arrested for pissing off the FBI, Gibbs, along with Fornell, set out to discover the truth behind the Colonel's claims in a tense standoff and discover that Ryan had indeed been framed. With the truth out and the standoff over, Ryan is admitted into a mental hospital so that he can be treated for his paranoid schizophrenia.",
        resumeFr: "Le colonel Ryan, en mission en Irak, est porté disparu. Celui-ci était chargé du recouvrement des fonds américains dans ce pays, et soupçonnait un supérieur de détourner des fonds. Alors que tout le monde le recherche, celui-ci contacte Gibbs et lui demande son aide. Ryan était en effet le supérieur de Gibbs lorsque celui-ci était marine.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode15
    },
    {
        number: '16',
        season: '1',
        title: 'Bête Noire',
        titleFr: 'Piège En Sous-sol',
        resume: "Ducky responds to an emergency call when the Israeli Embassy sends a Royal Navy officer to NCIS for autopsy, only to find a gunman (revealed in later episodes to be recurring antagonist Ari Haswari) inside the body bag. As Ducky, Gerald and eventually Kate are held hostage in the autopsy lab, the director and Gibbs coordinate with an FBI strike team to negotiate their release. Meanwhile, Kate questions herself after she hesitates when presented with an opportunity to kill her captor, while Gibbs and Tony assist with the hostage rescue team. Haswari asks for Gibbs in the autopsy lab and challenges him to try and shoot him.",
        resumeFr: "Alors qu'ils sont appelés à la morgue pour recevoir un corps, Ducky et Gerald sont pris en otage par Ari, un terroriste qui s'est dissimulé dans le sac mortuaire. Celui-ci semble beaucoup s'intéresser à un certain Quassam, un terroriste palestinien tué par Gibbs quelque temps plus tôt. Kate descend au sous-sol pour amener des preuves à Ducky et est à son tour prise en otage.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode16
    },
    {
        number: '17',
        season: '1',
        title: 'The Truth Is Out There',
        titleFr: 'Zones D Ombre',
        resume: "During a rave party, the body of a petty officer falls through the basement ceiling. Preliminary investigation suggests that the petty officer was killed in the nearby parking lot, and was dressed after his death. Upon checking the victim's room, evidence surfaces that he might have been taking financial bribes or someone else may have been blackmailing him. Gibbs suspects the victim's co-workers of involvement in the death when their separate versions of events are too consistent. Forensic evidence links them to the scene, and they eventually confess that their coworker's death was a result of a prank gone wrong. However, Gibbs believes that the petty officer's death was more than just an accident.",
        resumeFr: "Les célèbres soirées de Darin Spotnitz cassent la baraque mais elles crèvent aussi le plafond. C'est en effet du plafond de la boîte de nuit que le cadavre du première classe Chris Gordon est tombé. Le jeune homme était venu se distraire avec ses quatre inséparables amis, tous magasiniers de l'armée. Les premiers indices relevés indiquent qu'il a été écrasé avant d'être dissimulé dans cette cachette improbable. En fouillant sa chambre, Gibbs découvre que les enceintes hi-fi servaient de tirelire à quarante mille dollars ; le mobile du crime. Contrairement à Kate et Tony qui soupçonnent le supérieur de Gordon, Gibbs préfère se pencher sur le cas de ses quatre camarades… De fait, il s'agit d'une tentative de captation d'héritage par l'un d'entre eux.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode17
    },
    {
        number: '18',
        season: '1',
        title: 'UnSEALed',
        titleFr: 'Affaire Non Classée',
        resume: "Jack Curtin, a former Navy SEAL convicted of a double-homicide, escapes from Leavenworth, resulting in Kate and McGee being assigned to protect the son and in-laws of the escapee. During the night, Curtin breaks into the house to see his son before fleeing, subduing Agent Todd and taking her weapon in the process. Using her profiling skills, Kate theorizes that he may actually be innocent and had discovered the identity of the real killer while in jail. At headquarters, the team has to contend with the antagonistic defense and prosecution attorneys as they review the evidence in order to find the real murderer before Curtin can take matters into his own hands.",
        resumeFr: "Jack Curtin, commandant de marines rétrogradé, purgeait une peine pour le meurtre de sa femme et d'un agent du câble ; crime passionnel. Son évasion est signalée par un couple chez qui il s'est introduit dans la nuit pour voler les vêtements du mari en échange de sa défroque de détenu. Gibbs poste Kate chez les grands-parents de Kevin, le fils de Curtin. Comme prévu, le père rend visite à l'enfant, prouvant son amour paternel, avant de repartir. Gibbs pense que ce soldat loyal et courageux, qui a toujours crié son innocence, ne s'est évadé que pour exécuter le véritable coupable, l'amant de sa femme. Sa femme avait en effet une liaison mais tout à fait inattendue.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode18
    },
    {
        number: '19',
        season: '1',
        title: 'Dead Man Talking',
        titleFr: 'Dernières Paroles D Un Mort',
        resume: "Special Agent Chris Pacci is brutally murdered while investigating a cold case, prompting a guilt-ridden Gibbs to step in and take over the case while attempting to find Pacci's killer. Picking up from where Pacci left off with McGee's assistance, the team follows the trail of millions of dollars embezzled by Navy Lt. Cmdr. Hamilton Voss (who died before trial), and is led to a mysterious woman named Amanda Reed who seems to appear near wherever Voss has been stationed. The agents take shifts conducting a stake-out on the woman's house, until Tony is caught raiding the mailbox. Forced to improvise, he introduces himself as a resident of the neighborhood and strikes up a conversation based on what he had heard via surveillance. This gives him a chance to get close to the suspect in order to find out more, as he goes on a successful date with her. Meanwhile, Abby makes a shocking discovery which turns the direction of the case and will give Kate something to mock Tony about for time to come.",
        resumeFr: "L'agent spécial du NCIS Chris Pacci est retrouvé mort dans un ascenseur, éventré, éviscéré et baignant dans son sang, mais le tueur lui a tiré dessus dans les étages de l'immeuble. L'agent Pacci avait tenté de parler à Gibbs lors de l'épisode précédent, à la 29e minute. Lors de l'autopsie, Ducky découvre dans l'œsophage de l'agent la carte mémoire de l'appareil numérique de celui-ci. L'équipe découvre alors des photos d'une mystérieuse femme, Amanda Reed, sur qui enquêtait Pacci. Cette dernière semble liée à une ancienne histoire de détournement dans les services de la marine d'un montant de 12 millions de dollars. Mais elle n'est pas celle qu'on croît…",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode19
    },
    {
        number: '20',
        season: '1',
        title: 'Missing',
        titleFr: 'Bienvenue En Enfer',
        resume: "The disappearance of a marine from a bar draws NCIS in to investigate, and it is discovered that several marines from the same unit have also vanished under similar circumstances. When skeletal remains of one of the missing men is found chained to a pipe in a small sewer room, Gibbs begins to suspect the unit CO (the only team member not dead or missing) as a serial killer. However, when Tony vanishes while tailing the CO from the unit, the investigation takes on a more frantic pace and McGee is called back in from Norfolk to help as Gibbs and Kate work against the clock to find Tony before it is too late.",
        resumeFr: "Le NCIS enquête sur la disparition du sergent chef Bill Atlas. La veille au soir, dans un bar à musique country, Atlas confiait ses craintes à sa maîtresse, Carol Powers, une journaliste. Deux de ses anciens frères d'armes ont disparu et il redoutait de subir le même sort ; on le retrouve enchaîné et croupissant dans les égouts de la ville, surveillé par un invisible tortionnaire. Après avoir interrogé la serveuse du bar et la journaliste, Gibbs cible Joe Sacco, le supérieur d'Atlas, car trois membres de la mission qu'il dirigeait aux Philippines, dont Bill Atlas, ont disparu sans laisser de trace. Tandis que l'enquête tourne autour du bar, d'autant plus que Joe Sacco le fréquente, l'agent DiNozzo est à son tour drogué et enlevé, avant d'être enfermé dans le même cachot que Bill Atlas.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode20
    },
    {
        number: '21',
        season: '1',
        title: 'Split Decision',
        titleFr: 'Face Cachée',
        resume: "As Ducky meets his new assistant, Jimmy Palmer who is replacing the injured Gerald Jackson, Gibbs and the team handle the case of a marine found impaled on a tree stump after being shot with a SMAW. The investigation uncovers the sale of decommissioned military weapons on the black market. Tony goes undercover and meets the buyer, only to stumble into an undercover ATF operation. Working with ATF Special Agent Stone, Gibbs poses as a weapons supplier to complete the deal, and must double-cross everyone in order to find the corrupt person at the center of the investigation, and the one responsible for the marine's death.",
        resumeFr: "Le corps d'un sous-officier responsable du matériel est découvert mutilé en forêt ; perforé au lance-roquettes anti-char SMAW en:Shoulder-launched Multipurpose Assault Weapon et empalé sur le reste d'un tronc d'arbre. Il semble que des armes qui auraient dû être détruites alimentent en fait le marché parallèle des amateurs et des milices. L'enquête mène les membres du NCIS jusqu'à une agent de l'ATF, déjà sur l'affaire et à un local militaire, où une vente d'armes a mal tourné.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode21
    },
    {
        number: '22',
        season: '1',
        title: 'A Weak Link',
        titleFr: 'Sans Issue',
        resume: "Routine training results in the death of a U.S. Navy SEAL lieutenant just days before he was due to deploy on a classified hostage rescue operation. The death is initially dismissed as an equipment malfunction, but Abby discovers that the link attaching the lieutenant to his rappelling rope was made of a weaker material than factory standard, suggesting sabotage and potentially murder. Pressure is applied by the CIA for the investigation to be wrapped up within 38 hours so the operation can continue or else the entire mission, which is of national security importance, will be scrubbed. As the case goes on, Gibbs discovers that the lieutenant had a secret, and that his wife might be holding back vital information about his death. Meanwhile, Abby deals with her relationship with McGee.",
        resumeFr: "L'équipe de Gibbs enquête sur la mort d'un marine, lors d'une descente en rappel de falaise, au cours d'un exercice d'entraînement en vue d'une mission classée top secret. L'enquête s'oriente vite, non pas vers un accident mais vers un meurtre : le mousqueton de son équipement a été changé par un autre de qualité très inférieure. En fait, l'enquête aboutit à une résolution tout à fait surprenante.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode22
    },
    {
        number: '23',
        season: '1',
        title: 'Reveille',
        titleFr: 'L Affrontement',
        resume: "As Gibbs's obsession with tracking down the infiltrator who held Todd and Ducky hostage in 'Bête Noire' begins reaching new heights, the team grow more concerned about him. But when Kate is kidnapped and reunited with the terrorist, Gibbs's anger goes into overdrive as he pushes McGee and Tony to find out more information about the man responsible, not realizing that Kate's life might be in great danger.",
        resumeFr: "Gibbs a le pressentiment qu'un important terroriste est aux États-Unis. Son équipe se prépare à mettre en œuvre un plan pour attaquer le Président Bush et le premier ministre israélien Ariel Sharon en visite et les faire prisonniers. Gibbs et son équipe enquêtent pour découvrir son identité et retrouver l'agent Caitlin Todd qui a été enlevée. Le NCIS arrive à découvrir son nom, mais curieusement aucun fichier des services secrets ne le connaît, pas même le Mossad.",
        actors: '',
        category: 'none',
        show: 'ncis',
        stars: '5',
        imgUrl: images.ncisEpisode23
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

export default { shows, characters, actors, seasons, episodes };