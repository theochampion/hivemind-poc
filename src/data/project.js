module.exports = {
  user: {
    username: "Cossio",
    firstName: "Antoine",
    lastName: "Cauquil"
  },
  project: {
    name: "Low table for the 21st Century",
    quote:
      "A modular multifunction low table that can implement cutting-edge technology features",
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
    ],
    conversation: [
      {
        name: "Guillaume Baud",
        msg:
          "Someone posted a request of pneumatic feets, I found this is a good idea"
      },
      {
        name: "Thomas Chevrie",
        msg: "Yes I love it! Do you know someone who can do this?"
      },
      {
        name: "Guillaume Baud",
        msg: "Not really, maybe we could look at the suggested contributors"
      },
      {
        name: "Thomas Chevrie",
        msg: "Yes, Antoine Cauquil seems to be a good choice!"
      }
    ]
  },
};
