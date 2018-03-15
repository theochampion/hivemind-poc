module.exports = {
  user: {
    username: "Cossio",
    firstName: "Antoine",
    lastName: "Cauquil"
  },
  project: {
    name: "AI-Controlled Multi-Pattern Search Radar",
    quote:
      "A high gain radar providing Helical, Raster, Palmer-Raster and Palmer-Helical scanning modes, all controlled by a powerful AI",
    likes: 1337,
    liked: false,
    tags: ["Electronics", "Arduino", "Machine Learning"],
    description: "# Description\nA long long description",
    tabIndex: 0,
    cards: [
      {
        title: "Monopulse Tracking",
        description:
          "The tracking solution may be determined on the basis of a single pulse rather than the beam sequence (sequential lobing) or a complete conical scan. The tracking data rate is therefore much higher and therefore potentially more accurate.",
        points: 42
      },
      {
        title: "Velocity Search",
        description:
          "The PRF ( Pulse repetition frequency ) are set at maximum, higher PRF results in more power on target, more power mean more reflection, this mode is specifically for detecting medium and high closure targets, with the cost of not detecting low and no-closure targets at all.",
        points: 25
      }
    ]
  },
  contributors: [
    {
      name: "Antoine Cauquil",
      competencies: [
        "Signal Processing",
        "Machine Learning",
        "Embedded OS",
        "Cryptography"
      ],
      reputation: 666,
      img: "https://i.imgur.com/5Tpbaii.jpg",
      location: "Beijing, China",
      inProject: false,
      commits: 4
    },
    {
      name: "Thomas Baakel",
      competencies: ["Street Art", "Wordpress", "Microsoft Office"],
      reputation: 2,
      img: "https://i.imgur.com/dalEMPI.jpg",
      location: "Montreuil, France",
      inProject: false,
      commits: 2
    },
    {
      name: "Nicolas Sebag",
      competencies: ["Project Management", "iOS", "Java"],
      reputation: 347,
      img: "https://i.imgur.com/DPoFICj.jpg",
      location: "Stockholm, Sweden",
      inProject: false,
      commits: 9
    },
    {
      name: "Guillaume Baud",
      competencies: ["DJ", "CAM", "Java"],
      reputation: 24,
      img: "https://i.imgur.com/OuboOag.jpg",
      location: "Dublin, Ireland",
      inProject: true,
      commits: 4
    },
    {
      name: "Thomas Chevrie",
      competencies: ["Electronics", "Radar", "Java"],
      reputation: 42,
      img: "https://i.imgur.com/hVIWg8W.jpg",
      inProject: true,
      location: "Tomsk, Russia",
      commits: 3
    }
  ]
};
