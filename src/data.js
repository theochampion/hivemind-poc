module.exports = {
  user: {
    username: "Cossio",
    firstName: "Antoine",
    lastName: "Cauquil"
  },
  project: {
    name: "Low table for the 21st Century",
    quote:
      "A modular multifunction low table that can implements cutting-edge technology features",
    likes: 1336,
    liked: false,
    tags: ["Woodwork", "Arduino", "Raspberry Pi"],
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
        title: "Multifunction touchscreen",
        description:
          "A touchscreen that can support a lot of features, thanks to the RaspberryPi capablility, like games, utlities, or home-automation.",
        tags: ["Raspberry Pi"],
        points: 42,
        contributors: 2,
        commits: 1
      },
      {
        title: "Pneumatic feets",
        description:
          "Pneumatic feets that enable elevation adjustment of the table",
        tags: ["Mechanics", "Arduino"],
        points: 25,
        contributors: 3,
        commits: 5
      }
    ]
  },
  homeCardProject: {
    cards: [
      {
        title: "Robot",
        name: "New Hand Steel Robot",
        img:
          "http://www.trossenrobotics.com/Shared/Images/Product/PhantomX-Reactor-Robot-Arm-Kit/reac-1.jpg",
        desc:
          "In this tutorial, i built my own robot arm! That was a lot of fun!"
      },
      {
        title: "Drone",
        name: "Homemade Drone",
        img:
          "https://cdn.instructables.com/F55/QFKF/I12KEORV/F55QFKFI12KEORV.LARGE.jpg",
        desc:
          "Building a quadricopter with materials that are easily findable in shops"
      },
      {
        title: "Sound",
        name: "Guitard Home Made",
        img:
          "https://i2.wp.com/paris.makerfaire.com/wp-content/uploads/sites/109/2017/07/maker_faire_paris_2017_jour_2_samedi_photo_quentin_chevrier-18-stand-Toystroy.jpg?fit=3490%2C5235&ssl=1",
        desc:
          "If you ever thought building your own guitar, start here, with materials you can find at home."
      },
      {
        title: "woodenStool",
        name: "Wooden Stool HomeMade",
        img:
          "https://i1.wp.com/makezine.com/wp-content/uploads/2017/10/CNC_FamilyStool-4.jpg?resize=1024%2C683&ssl=1",
        desc:
          "This tutorial will explain you the how I made a wooden stool using Modern builds design."
      },
      {
        title: "rCar",
        name: "Autonomous R/C Car",
        img:
          "https://i0.wp.com/makezine.com/wp-content/uploads/2017/08/FEATUREDDonkeyVehicleOpeners-4.jpg?resize=1024%2C683&ssl=1",
        desc: "Make your own RC car at home using cheap and resistant materials"
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
