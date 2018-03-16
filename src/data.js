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
  homeCardProject: {
    cards: [
      {
        title: "Robot",
        name: "New Hand Steel Robot",
        img: "http://www.trossenrobotics.com/Shared/Images/Product/PhantomX-Reactor-Robot-Arm-Kit/reac-1.jpg"
      },
      {
        title: "Drone",
        name: "Homemade Drone",
        img: "https://cdn.instructables.com/F55/QFKF/I12KEORV/F55QFKFI12KEORV.LARGE.jpg"
      },
      {
        title: "Sound",
        name: "Génerateur de Son",
        img: "https://i2.wp.com/paris.makerfaire.com/wp-content/uploads/sites/109/2017/07/maker_faire_paris_2017_jour_2_samedi_photo_quentin_chevrier-18-stand-Toystroy.jpg?fit=3490%2C5235&ssl=1",
      },
      {
        title: "woodenStool",
        name: "Wooden Stool HomeMade",
        img: "https://i1.wp.com/makezine.com/wp-content/uploads/2017/10/CNC_FamilyStool-4.jpg?resize=1024%2C683&ssl=1"
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
      reputation: 666
    },
    {
      name: "Thomas Baakel",
      competencies: ["Street Art", "Wordpress", "Microsoft Office"],
      reputation: 2
    },
    {
      name: "Nicolas Sebag",
      competencies: ["Project Management", "Android", "Java"],
      reputation: 347
    }
  ]
};
