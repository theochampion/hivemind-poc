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
    description: `## Features\n## Usage\n### Installation\n### Running examples in this repository

    
    ## Changelog
    
    See [changelog](docs/CHANGELOG.md).
    
    ## Contributing
    
    See the contributing [guidelines](CONTRIBUTING.md).
    
    ## Disclaimer
    
    This is not an official Google product.`,
    tabIndex: 0,
    files: [
      {
        isFolder: true,
        name: "public",
        comment: "add copyright informations",
        size: 4096,
        lmd: "23 hours ago"
      },
      {
        isFolder: true,
        name: "server",
        comment: "Add mongodb integration + routes",
        size: 4096,
        lmd: "12 hours ago"
      },
      {
        isFolder: true,
        name: "src",
        comment: "Global: Project / CardMatrix presentation components",
        size: 4096,
        lmd: "7 hours ago"
      },
      {
        isFolder: false,
        name: ".gitignore",
        comment: "Ignore vscode specifics",
        size: 124,
        lmd: "12 hours ago"
      },
      {
        isFolder: false,
        name: "README.md",
        comment: "Add dev and production guidlines",
        size: 407,
        lmd: "1 day ago"
      },
      {
        isFolder: false,
        name: "yarn.lock",
        comment: "Merge branch 'dev-front'",
        size: 124,
        lmd: "12 hours ago"
      }
    ],
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
  homeCardProject: {
    cards: [
      {
        title: "Robot",
        name: "New Hand Steel Robot",
        img: "http://www.trossenrobotics.com/Shared/Images/Product/PhantomX-Reactor-Robot-Arm-Kit/reac-1.jpg",
        desc: "Make your own robotic on static base"
      },
      {
        title: "Drone",
        name: "Homemade Drone",
        img: "https://cdn.instructables.com/F55/QFKF/I12KEORV/F55QFKFI12KEORV.LARGE.jpg",
        desc: "I show you how to build a simple homemade drone with 3D print"
      },
      {
        title: "Sound",
        name: "Guitard Home Made",
        img: "https://i2.wp.com/paris.makerfaire.com/wp-content/uploads/sites/109/2017/07/maker_faire_paris_2017_jour_2_samedi_photo_quentin_chevrier-18-stand-Toystroy.jpg?fit=3490%2C5235&ssl=1",
        desc: "Wanna do your own guitar with what you have at home ? Let watch my tuto"
      },
      {
        title: "woodenStool",
        name: "Wooden Stool HomeMade",
        img: "https://i1.wp.com/makezine.com/wp-content/uploads/2017/10/CNC_FamilyStool-4.jpg?resize=1024%2C683&ssl=1",
        desc: "Too small ? You dont like the design of stool at shop ? Build your own design WoodenStool to be taller"
      },
      {
        title: "rCar",
        name: "Autonomous R/C Car",
        img: "https://i0.wp.com/makezine.com/wp-content/uploads/2017/08/FEATUREDDonkeyVehicleOpeners-4.jpg?resize=1024%2C683&ssl=1",
        desc: "You want to be part of the futur? Build your own you dont need you to move? You find the good card!"
      },
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
