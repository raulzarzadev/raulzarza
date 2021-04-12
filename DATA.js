export const ABOUT_ME = {
  title: 'Hi there!',
  subtitle: `
  I am a Full Stack Developer, especially with JavaScript, 
  especially with technologies like React.js, Node.js, MongoDB, 
  Express, Git and more.`,
  content: `I am a multifaceted person, in addition to web development, 
    swimming teaching, is another of my passions. That doesn't limit 
    me to practicing almost any other activity, especially outdoors.
     Hiking, mountaineering, camping, city or mountain bike, he recently 
    discovered sandboarding in the sand dunes of La Paz, B.C.S.`,

  images: [],
}
export const TECHS = [
  {
    title: 'HTML 5',
    icon: '/icons/techs/html-5.svg',
    ref: 'HMTL',
  },
  {
    title: 'CSS3',
    icon: '/icons/techs/css-5.svg',
    ref: 'CSS',
  },
  {
    title: 'Javascript',
    icon: '/icons/techs/javascript-1.svg',
    ref: 'JS',
  },
  {
    title: 'Git',
    icon: '/icons/techs/git.png',
    ref: 'GIT',
  },
  {
    title: 'Node.js',
    icon: '/icons/techs/node.svg',
    ref: 'NODE',
  },
  {
    title: 'Reactjs',
    icon: '/icons/techs/react-2.svg',
    ref: 'REACT',
  },
  {
    title: 'React-router',
    icon: '/icons/techs/react-router.svg',
    ref: 'REACT_ROUTER',
  },
  {
    title: 'Nextjs',
    icon: '/icons/techs/nextjs-3.svg',
    ref: 'NEXT',
  },
  {
    title: 'MaterialUI',
    icon: '/icons/techs/material-ui.svg',
    ref: 'MUI',
  },
  {
    title: 'Express',
    icon: '/icons/techs/express-109.svg',
    ref: 'EXP',
  },
  {
    title: 'MongoDB',
    icon: '/icons/techs/mongodb.svg',
    ref: 'MONGO',
  },
  {
    title: 'ningx',
    icon: '/icons/techs/nginx-1.svg',
    ref: 'NGINX',
  },
  {
    title: 'Docker',
    icon: '/icons/techs/docker.png',
    ref: 'DOCKER',
  },
  {
    title: 'Docker-compose',
    icon: '/icons/techs/docker-compose.png',
    ref: 'DC',
  },
  {
    title: 'Jira',
    icon: '/icons/techs/jira-1.svg',
    ref: 'JIRA',
  },
  ,
  {
    title: 'Firebase',
    icon: '/icons/techs/firebase.png',
    ref: 'FIREBASE',
  },
  {
    title: 'BitBucket',
    icon: '/icons/techs/bitbucket-icon.svg',
    ref: 'BB',
  },
  {
    title: 'AWS Lamda',
    icon: '/icons/techs/lamda.png',
    ref: 'LAMDA',
  },

  {
    title: 'Inkascape',
    icon: '/icons/techs/inkascape.png',
    ref: 'INKA',
  },
]
export const WORKS = [
  {
    ref: 'talentMarket',
    title: 'The Talent Market',
    icon: '/images/talent/talent-market.svg',
    url: '/details/talentMarket',
    resume: {
      title: 'Talent Market ',
      content: `
      Maqueta de una aplicación pre diseñada
      - Funcionalidad básica, CRUD de talento y roles. 
      - Responsive 
      - Backend con node.js y express
      `,
      link: 'https://talent-market-front.vercel.app/',
      technologies: ['NEXT', 'DOCKER', 'EXP', 'NODE'],
      images: ['/images/talent/map.png', '/images/talent/market.png'],
      repos: [
        {
          href: 'https://github.com/raulzarzadev/talent-market-front',
          label: 'React Frontend',
        },
        {
          href: 'https://github.com/raulzarzadev/talent-market-backend',
          label: 'Backend ',
        },
      ],
    },
  },
  {
    ref: 'ranchito',
    title: 'Mi Ranchito Digital',
    icon: '/images/ranchito/Logotipo.svg',
    url: '/details/ranchito',

    resume: {
      title: 'Mi Ranchito Digital',
      content: `
      El problema:
      Un veterinario/granjero olvida las fechas en las que su vaca lechera debe parir o ser inseminada
      Propuesta: 
      Mantener informado al veterinario/granjero de las datos importantes para relizar un mejor trabajo 
      Consideraciones:
      - Debe ser extremadamente sencillo
      - Trabajar sin conexión
      `,
      link: 'https://miranchito.digital',
      technologies: ['NEXT'],
      images: [
        '/images/ranchito/rancho1.png',
        '/images/ranchito/rancho2.png',
        '/images/ranchito/rancho3.png',
      ],
    },
  },

  {
    ref: 'packshoe',
    title: 'packshoe',
    icon: '/icons/works/navBarBanner.png',
    url: '/details/packshoe',
    resume: {
      title: 'Packshoe',
      content: `Packshoe es es una SPA que permite unir a zapateros con clientes`,
      link: 'https://www.packshoe.com',
      technologies: ['LAMDA', 'BB', 'REACT', 'MUI', 'GQL'],
      images: [
        '/images/packshoe/build-repair.png',
        '/images/packshoe/packshoe-insta.png',
        '/images/packshoe/packshoe-openbox.png',
        '/images/packshoe/select-item.png',
      ],
    },
  },
  {
    ref: 'negocios',
    title: 'negocios del barrio',
    icon: '/icons/works/NegDelBar.png',
    url: '/details/negocios',
    resume: {
      title: 'Negocios del Barrio',
      content: `negocioasdelbarrio.com.mx nace con la idea de facilitar el comercio local y aprovechar todas las ventajas que este representa, al hacer mas facil publicar un anuncio en un barrio especifico.   `,
      link: 'https://www.negociosdelbarrio.com',
      technologies: [
        'REACT',
        'MUI',
        'NODE',
        'MONGO',
        'EXP',
        'NGINX',
        'GIT',
        'JS',
      ],
      images: [
        '/images/negocios/NegDelBar.png',
        '/images/negocios/negdelbar-villas.png',
      ],
    },
  },
  {
    ref: 'rickAndMorty',
    title: 'Rick & Morty',
    icon: '/images/rick&morty/r&m.png',
    url: '/details/rickAndMorty',
    resume: {
      title: 'Rick & Morty',
      content: `Encuentra a tu personaje favorito de Rick And Morty en esta página web minimalista `,
      link: 'https://rick-and-morty.raulzarzadev.vercel.app/',
      technologies: ['REACT', 'CSS', 'JS', 'GIT'],
      images: [
        '/images/rick&morty/r&m1.png',
        '/images/rick&morty/r&m2.png',
        '/images/rick&morty/r&m3.png',
      ],
    },
  },
  {
    ref: 'nomadas',
    title: 'nomadasgroup',
    icon: '/icons/works/nomadas-negro.png',
    url: '/details/nomadas',
    resume: {
      title: 'nomadasgroup',
      content: `
      noamdasgroup es una pagina web estatica y la puerta de entrada a un grupo de servicios en torno al turismo y el turismo sustentable. 
      Implementa tecnologia de contenedores para desarrollo y produccion, CSS puro, NEXTjs . `,
      link: 'https://www.nomadasgroup.com.mx',
      technologies: ['NEXT', 'REACT', 'CSS', 'JS', 'DOCKER', 'GIT'],
      images: [
        '/images/nomadas/NOMADAS.png',
        '/images/nomadas/negro.png',
        '/images/nomadas/NOMADA BLANCO.png',
        '/images/nomadas/guia_nomadas.png',
      ],
    },
  },

  /*  {
    ref: "nadamas",
    title: "nadamas",
    icon: "/icons/works/nadamas4.png",
    url: "/details/nadamas",
    resume: {
      title: "nadamas",
      content: "",
      link: "https://www.nadamas.com.mx",
    },
  }, */
  /*  {
    ref: "nomadas",
    title: "nomadasgroup",
    icon: "/icons/works/nomadas-negro.png",
    url: "/details/nomadas",
    resume: {
      title: "nomadasgroup",
      content: "",
      link: "https://www.nomadasgroup.com.mx",
    },
  }, */
  {
    ref: 'lanegrin',
    title: 'Cremeria La negrin',
    icon: '/icons/works/negrin1.png',
    url: '/details/lanegrin',
    resume: {
      title: 'Cremeria La negrin',
      content:
        'Pagina Web Estatica creada con el generador de paguinas de GoDaddy y hospedado en el mismo sitio. Aquí el trabajo fue mas enfocado en las fotografias, la redacción y el CEO ',
      link: 'https://www.lanegrin.com',
      technologies: ['GIT', 'JS', 'INKA'],
      images: [
        '/images/negrin/negrin1.png',
        '/images/negrin/lanegrin-outside.png',
        '/images/negrin/negrin2.png',
        '/images/negrin/queso_y_huevos.png',
      ],
    },
  },
  /* {
    ref: "pirules",
    title: "Cremeria Pirules",
    icon: "/icons/pirules.png",
    url: "/details/pirules",
    resume: {
      title: "Cremeria Pirules",
      content: "",
      link: "https://www.cremeriapirules.com",
    },
  }, */
  {
    ref: 'raulzarza',
    title: 'RZ Personal Page',
    icon: '/icons/works/RZ-blanco.svg',
    url: '/details/raulzarza',
    resume: {
      title: 'RZ Personal Page',
      content:
        'Mi portafolio persional creado desde cero, implementando SSR con NEXT y CSS module, ademas de usar Docker y nginx para hospedarlo en la nuve.',
      link: 'https://www.raulzarza.com',
      technologies: ['GIT', 'JS', 'REACT', 'NEXT', 'DOCKER', 'DC', 'NODE'],
      images: [
        '/images/rz/rz-page.png',
        '/images/rz/logo.png',
        '/images/rz/logo-color-test.png',
        '/images/rz/logo-test-box.png',
        '/images/rz/logo-test.png',
      ],
    },
  },
]

export const LEARNING = [
  {
    title: 'Firebase',
    icon: '/icons/techs/firebase.png',
    ref: 'FIREBASE',
  },
  {
    title: 'GRAPHQL',
    icon: '/icons/techs/graphql.svg',
    ref: 'GQL',
  },
]
