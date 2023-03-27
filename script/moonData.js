const moons = [
  {
    name: "Luna",
    history: "Luna in Latin is the main adjective for all things moon-related.",
    radiusInMiles: 1079.6,
    distanceInMiles: 243036,
    planetId: 3,
  },
  {
    name: "Deimos",
    history:
      "One of two horses that pull the Roman god of war, Mars’, chariot.",
    radiusInMiles: 3.8525,
    distanceInMiles: 14576,
    planetId: 4,
  },
  {
    name: "Phobos",
    history:
      "One of two horses that pull the Roman god of war, Mars’, chariot.",
    radiusInMiles: 7.0008,
    distanceInMiles: 3700,
    planetId: 4,
  },
  {
    name: "Io",
    history: "A priestess of Hera who became one of Zeus's lovers.",
    radiusInMiles: 1131.9,
    distanceInMiles: 261220,
    planetId: 5,
  },
  {
    name: "Europa",
    history: "The woman who was abducted by the Greek god Zeus.",
    radiusInMiles: 969.84,
    distanceInMiles: 417002,
    planetId: 5,
  },
  {
    name: "Ganymede",
    history:
      "A beautiful young boy who was carried to Olympus by Zeus who became the cupbearer of the Olympian gods.",
    radiusInMiles: 1636.8,
    distanceInMiles: 665100,
    planetId: 5,
  },
  {
    name: "Callisto",
    history: "A woman turned into a bear by Zeus in Greek mythology.",
    radiusInMiles: 1497.7,
    distanceInMiles: 1169856,
    planetId: 5,
  },
  {
    name: "Naiad",
    history: "Female spirits (nymphs) associated with bodies of freshwater.",
    radiusInMiles: 20.505,
    distanceInMiles: 29967,
    planetId: 5,
  },
  {
    name: "Thalassa",
    history: "The sea goddess.",
    radiusInMiles: 25.476,
    distanceInMiles: 31115,
    planetId: 8,
  },
  {
    name: "Despina",
    history: "A nymph.",
    radiusInMiles: 46.603,
    distanceInMiles: 32638,
    planetId: 8,
  },
  {
    name: "Galatea",
    history: "One of the Nereids.",
    radiusInMiles: 54.308,
    distanceInMiles: 38496,
    planetId: 8,
  },
  {
    name: "Larissa",
    history: "Nymph and lover of Poseidon.",
    radiusInMiles: 60.273,
    distanceInMiles: 45701,
    planetId: 8,
  },
  {
    name: "Hippocamp",
    history:
      "Named for hippocampus, a mythical creature associated with Poseidon.",
    radiusInMiles: 5.5923,
    distanceInMiles: 65420,
    planetId: 8,
  },
  {
    name: "Proteus",
    history: "The shapeshifting sea god.",
    radiusInMiles: 130.49,
    distanceInMiles: 73102,
    planetId: 8,
  },
  {
    name: "Triton",
    history: "The sea god, son of Poseidon.",
    radiusInMiles: 840.96,
    distanceInMiles: 220437,
    planetId: 8,
  },
  {
    name: "Nereid",
    history: "A group of ea nymphs.",
    radiusInMiles: 105.63,
    distanceInMiles: 3426128,
    planetId: 8,
  },
  {
    name: "Halimede",
    history: "One of the Nereids.",
    radiusInMiles: 19.263,
    distanceInMiles: 10321597,
    planetId: 8,
  },
  {
    name: "Sao",
    history: "One of the Nereids.",
    radiusInMiles: 13.67,
    distanceInMiles: 13811839,
    planetId: 8,
  },
  {
    name: "Laomedeia",
    history: "One of the Nereids.",
    radiusInMiles: 13.049,
    distanceInMiles: 14643855,
    planetId: 8,
  },
  {
    name: "Psamathe",
    history: "One of the Nereids.",
    radiusInMiles: 11.806,
    distanceInMiles: 29885469,
    planetId: 8,
  },
  {
    name: "Neso",
    history: "One of the Nereids.",
    radiusInMiles: 18.641,
    distanceInMiles: 30624279,
    planetId: 8,
  },
  {
    name: "Charon",
    history: "Ferryman of the underworld in Greek mythology.",
    radiusInMiles: 376.55,
    distanceInMiles: 10896,
    planetId: 9,
  },
  {
    name: "Nix",
    history:
      "Egyptian spelling of Nyx, goddess of the night in Greek mythology.",
    radiusInMiles: 35,
    planetId: 9,
  },
  {
    name: "Styx",
    history: "One of the rivers of the underworld in the Greek underworld.",
    radiusInMiles: 8,
    planetId: 9,
  },
  {
    name: "Kerberos",
    history:
      "Greek spelling of Cerberus, the many-headed dog who guards the Greek underworld.",
    radiusInMiles: 5.6,
    planetId: 9,
  },
  {
    name: "Hydra",
    history: "The many-headed serpent who guards the Greek underworld.",
    radiusInMiles: 35,
    planetId: 9,
  },
  {
    name: "Enceladus",
    history: "A giant in Greek mythology, son of Gaia and Uranus.",
    radiusInMiles: 156,
    distanceInMiles: 147909,
    planetId: 6,
  },
  {
    name: "Titan",
    history: "The old gods in Greek mythology.",
    radiusInMiles: 1600,
    distanceInMiles: 759000,
    planetId: 6,
  },
  {
    name: "Dione",
    history: "A Greek goddess, potentially the mother of Aphrodite.",
    radiusInMiles: 349,
    distanceInMiles: 234515,
    planetId: 6,
  },
  {
    name: "Prometheus",
    history:
      "A Greek titan, known for stealing fire and giving it to humanity.",
    radiusInMiles: 26,
    distanceInMiles: 86607,
    planetId: 6,
  },
  {
    name: "Oberon",
    history:
      "The king of fairies in Shakespeare's \"A Midsummer Night's Dream\".",
    radiusInMiles: 473,
    distanceInMiles: 362570,
    planetId: 7,
  },
  {
    name: "Titania",
    history:
      "The queen of fairies in Shakespeare's \"A Midsummer Night's Dream\".",
    radiusInMiles: 489,
    distanceInMiles: 271104,
    planetId: 7,
  },
  {
    name: "Ariel",
    history: 'A spirit in Shakespeare\'s "The Tempest".',
    radiusInMiles: 489,
    distanceInMiles: 118620,
    planetId: 7,
  },
  {
    name: "Puck",
    history: "A sprite in Shakespeare's \"A Midsummer Night's Dream\".",
    radiusInMiles: 489,
    distanceInMiles: 53438,
    planetId: 7,
  },
  {
    name: "Adrastea",
    history: "The Cretian nymph who took care of Zeus.",
    radiusInMiles: 5.0952,
    distanceInMiles: 80156,
    planetId: 5,
  },
  {
    name: "Aitne",
    history: "A Sicillian nymph said to have been with the Roman god Jupiter.",
    radiusInMiles: 0.621,
    distanceInMiles: 14415811,
    planetId: 5,
  },
  {
    name: "Amalthea",
    history: "A naiad who nursed the newborn Jupiter.",
    radiusInMiles: 51.88,
    distanceInMiles: 112716,
    planetId: 5,
  },
  {
    name: "Ananke",
    history: "The mother of Adrastea.",
    radiusInMiles: 8.6,
    distanceInMiles: 13200000,
    planetId: 5,
  },
  {
    name: "Aoede",
    history: 'One of the Muses. Aoede means "song".',
    radiusInMiles: 1.24,
    distanceInMiles: 14900000,
    planetId: 5,
  },
  {
    name: "Arche",
    history: 'One of the Muses. Arche means "beginning".',
    radiusInMiles: 1,
    distanceInMiles: 14500000,
    planetId: 5,
  },
  {
    name: "Autonoe",
    history: "A mother of the Graces.",
    radiusInMiles: 1.2,
    distanceInMiles: 14900000,
    planetId: 5,
  },
  {
    name: "Callirrhoe",
    history: "The daughter of the River god.",
    radiusInMiles: 2.7,
    distanceInMiles: 15000000,
    planetId: 5,
  },
  {
    name: "Carme",
    history: "The mother of Britomartis.",
    radiusInMiles: 14,
    distanceInMiles: 14500000,
    planetId: 5,
  },
  {
    name: "Carpo",
    history: "A goddess of the seasons.",
    radiusInMiles: 1.9,
    distanceInMiles: 10500000,
    planetId: 5,
  },
  {
    name: "Chaldene",
    history: "The mother of Solymos.",
    radiusInMiles: 1,
    distanceInMiles: 14300000,
    planetId: 5,
  },
  {
    name: "Cyllene",
    history: "A nymph, daughter of Zeus.",
    radiusInMiles: 0.62,
    distanceInMiles: 14800000,
    planetId: 5,
  },
  {
    name: "Dia",
    history: "The daughter of the seashore.",
    radiusInMiles: 1.2,
    distanceInMiles: 7801315,
    planetId: 5,
  },
  {
    name: "Eirene",
    history: "The goddess of peace, daughter of Zeus",
    radiusInMiles: 1.2,
    distanceInMiles: 15000000,
    planetId: 5,
  },
  {
    name: "Elara",
    history: "One of the lovers of Zeus.",
    radiusInMiles: 26.7,
    distanceInMiles: 7300000,
    planetId: 5,
  },
  {
    name: "Erinome",
    history:
      "A young woman who fell in love with Jupiter, the Roman equivalent of Zeus.",
    radiusInMiles: 1,
    distanceInMiles: 14400000,
    planetId: 5,
  },
  {
    name: "Ersa",
    history: "Daughter of Zeus.",
    radiusInMiles: 0.93,
    distanceInMiles: 7084000,
    planetId: 5,
  },
  {
    name: "Euanthe",
    history: "A mother of the Graces.",
    radiusInMiles: 1,
    distanceInMiles: 13000000,
    planetId: 5,
  },
  {
    name: "Eukelade",
    history: 'One of the Muses. Eupheme means "well sounding".',
    radiusInMiles: 1.2,
    distanceInMiles: 14400000,
    planetId: 5,
  },
  {
    name: "Eupheme",
    history: "The spirit of praise and good omen.",
    radiusInMiles: 1,
    distanceInMiles: 13000000,
    planetId: 5,
  },
  {
    name: "Euporie",
    history: "A goddess of the seasons.",
    radiusInMiles: 0.6,
    distanceInMiles: 11900000,
    planetId: 5,
  },
  {
    name: "Eurydome",
    history: "A mother of the Graces.",
    radiusInMiles: 0.9,
    distanceInMiles: 14300000,
    planetId: 5,
  },
  {
    name: "Harpalyke",
    history: "A woman who was transformed into a night bird.",
    radiusInMiles: 1.3,
    distanceInMiles: 13100000,
    planetId: 5,
  },
  {
    name: "Hegemone",
    history: 'One of the Graces. Hegemone means "female leader".',
    radiusInMiles: 0.93,
    distanceInMiles: 14600000,
    planetId: 5,
  },
  {
    name: "Helike",
    history: "One of the Muses.",
    radiusInMiles: 1.2,
    distanceInMiles: 13100000,
    planetId: 5,
  },
  {
    name: "Hermippe",
    history: "One of the lovers of Zeus.",
    radiusInMiles: 1.2,
    distanceInMiles: 13200000,
    planetId: 5,
  },
  {
    name: "Herse",
    history: "A daughter of Zeus.",
    radiusInMiles: 0.62,
    distanceInMiles: 14500000,
    planetId: 5,
  },
  {
    name: "Himalia",
    history: "A nymph and one of the lovers of Zeus.",
    radiusInMiles: 52.8,
    distanceInMiles: 7100000,
    planetId: 5,
  },
  {
    name: "Iocaste",
    history: "The mother of Agamedes.",
    radiusInMiles: 1.6,
    distanceInMiles: 13200000,
    planetId: 5,
  },
  {
    name: "Isonoe",
    history: "The mother of Orchomenus.",
    radiusInMiles: 1.1,
    distanceInMiles: 14400000,
    planetId: 5,
  },
  {
    name: "Kale",
    history: 'One of the Graces. Kale means "beautiful".',
    radiusInMiles: 0.6,
    distanceInMiles: 14400000,
    planetId: 5,
  },
  {
    name: "Kallichore",
    history: 'One of the Muses. Kallichore means "beautiful in dance".',
    radiusInMiles: 0.6,
    distanceInMiles: 14400000,
    planetId: 5,
  },
  {
    name: "Kalyke",
    history: "The mother of Endymion.",
    radiusInMiles: 1.6,
    distanceInMiles: 14600000,
    planetId: 5,
  },
  {
    name: "Kore",
    history: "A daughter of Zeus.",
    radiusInMiles: 0.6,
    distanceInMiles: 15200000,
    planetId: 5,
  },
  {
    name: "Leda",
    history: "A woman seduced by Zeus.",
    radiusInMiles: 6.2,
    distanceInMiles: 6900000,
    planetId: 5,
  },
  {
    name: "Lysithea",
    history: "One of the lovers of Zeus.",
    radiusInMiles: 11.1,
    distanceInMiles: 7200000,
    planetId: 5,
  },
  {
    name: "Megaclite",
    history: "One of the lovers of Jupiter, the Roman equivalent of Zeus.",
    radiusInMiles: 1.6,
    distanceInMiles: 14700000,
    planetId: 5,
  },
  {
    name: "Metis",
    history: "The first wife of Zeus, whom he also ate.",
    radiusInMiles: 13.3,
    distanceInMiles: 262000,
    planetId: 5,
  },
  {
    name: "Mneme",
    history: 'One of the Muses. Mneme means "memory".',
    radiusInMiles: 0.6,
    distanceInMiles: 13000000,
    planetId: 5,
  },
  {
    name: "Orthosie",
    history: "A goddess of the seasons",
    radiusInMiles: 0.6,
    distanceInMiles: 13100000,
    planetId: 5,
  },
  {
    name: "Pandia",
    history: "A daughter of Zeus.",
    radiusInMiles: 0.93,
    distanceInMiles: 7133962,
    planetId: 5,
  },
  {
    name: "Pasiphae",
    history: "The wife of Minos.",
    radiusInMiles: 18.6,
    distanceInMiles: 14600000,
    planetId: 5,
  },
  {
    name: "Pasithee",
    history: 'One of the Graces. Pasithee means "kind to everybody".',
    radiusInMiles: 0.62,
    distanceInMiles: 14000000,
    planetId: 5,
  },
  {
    name: "Philophrosyne",
    history: "Granddaughter of Zeus.",
    radiusInMiles: 0.62,
    distanceInMiles: 14000000,
    planetId: 5,
  },
  {
    name: "Praxidike",
    history: "The Greek goddess of justice.",
    radiusInMiles: 2,
    distanceInMiles: 13000000,
    planetId: 5,
  },
  {
    name: "Sinope",
    history: "A nymph who Zeus wanted to be with.",
    radiusInMiles: 11.8,
    distanceInMiles: 14800000,
    planetId: 5,
  },
  {
    name: "Sponde",
    history: "A goddess of the seasons.",
    radiusInMiles: 0.62,
    distanceInMiles: 14800000,
    planetId: 5,
  },
  {
    name: "Taygete",
    history: "One of the lovers of Zeus.",
    radiusInMiles: 1.5,
    distanceInMiles: 14400000,
    planetId: 5,
  },
  {
    name: "Thebe",
    history: "A nymph and one of the lovers of Zeus.",
    radiusInMiles: 30.4,
    distanceInMiles: 138000,
    planetId: 5,
  },
  {
    name: "Thelxinoe",
    history: 'One of the Muses. Thelxinoe means "charm".',
    radiusInMiles: 0.62,
    distanceInMiles: 13100000,
    planetId: 5,
  },
  {
    name: "Themisto",
    history: "One of the lovers of Zeus.",
    radiusInMiles: 2.5,
    distanceInMiles: 4500000,
    planetId: 5,
  },
  {
    name: "Thyone",
    history: "The mother of Dionysus, lover of Zeus.",
    radiusInMiles: 1,
    distanceInMiles: 13200000,
    planetId: 5,
  },
];

module.exports = moons;
