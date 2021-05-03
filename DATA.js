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

  images: []
}
export const TECHS = [
  {
    title: 'HTML 5',
    icon: '/icons/techs/html-5.svg',
    ref: 'HMTL'
  },
  {
    title: 'CSS3',
    icon: '/icons/techs/css-5.svg',
    ref: 'CSS'
  },
  {
    title: 'Javascript',
    icon: '/icons/techs/javascript-1.svg',
    ref: 'JS'
  },
  {
    title: 'Git',
    icon: '/icons/techs/git.png',
    ref: 'GIT'
  },
  {
    title: 'Node.js',
    icon: '/icons/techs/node.svg',
    ref: 'NODE'
  },
  {
    title: 'Reactjs',
    icon: '/icons/techs/react-2.svg',
    ref: 'REACT'
  },
  {
    title: 'React-router',
    icon: '/icons/techs/react-router.svg',
    ref: 'REACT_ROUTER'
  },
  {
    title: 'JsonWebTokens',
    icon: '/icons/techs/JWT.svg',
    ref: 'JWT'
  },
  {
    title: 'Nextjs',
    icon: '/icons/techs/nextjs-3.svg',
    ref: 'NEXT'
  },
  {
    title: 'MaterialUI',
    icon: '/icons/techs/material-ui.svg',
    ref: 'MUI'
  },
  {
    title: 'Express',
    icon: '/icons/techs/express-109.svg',
    ref: 'EXP'
  },
  {
    title: 'MongoDB',
    icon: '/icons/techs/mongodb.svg',
    ref: 'MONGO'
  },
  {
    title: 'ningx',
    icon: '/icons/techs/nginx-1.svg',
    ref: 'NGINX'
  },
  {
    title: 'Docker',
    icon: '/icons/techs/docker.png',
    ref: 'DOCKER'
  },
  {
    title: 'Docker-compose',
    icon: '/icons/techs/docker-compose.png',
    ref: 'DC'
  },
  {
    title: 'Jira',
    icon: '/icons/techs/jira-1.svg',
    ref: 'JIRA'
  },
  ,
  {
    title: 'Firebase',
    icon: '/icons/techs/firebase.png',
    ref: 'FIREBASE'
  },
  {
    title: 'BitBucket',
    icon: '/icons/techs/bitbucket-icon.svg',
    ref: 'BB'
  },
  {
    title: 'AWS Lamda',
    icon: '/icons/techs/lamda.png',
    ref: 'LAMDA'
  },

  {
    title: 'Inkascape',
    icon: '/icons/techs/inkascape.png',
    ref: 'INKA'
  },
  {
    title: 'GRAPHQL',
    icon: '/icons/techs/graphql.svg',
    ref: 'GQL'
  }
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
          label: 'React Frontend'
        },
        {
          href: 'https://github.com/raulzarzadev/talent-market-backend',
          label: 'Backend '
        }
      ]
    }
  },
  {
    ref: 'ranchito',
    title: 'Mi Ranchito Digital',
    icon: '/images/ranchito/Logotipo.svg',
    url: '/details/ranchito',

    resume: {
      title: 'Mi Ranchito Digital',
      content: `
      A half-freelance and half-personal project.             
      
      A farmer loses a lot of money when
       he cannot predict the reproductive 
       cycle of a cow, this problem is 
       greater when they are mini cows and it is 
      difficult to have a paper record.

      These farmers cannot afford a 
      sophisticated and expensive system. 
      Mainly because that means paying a 
      lot of money for software and protections. 

      And for a limited number of cows, this may be unfeasible. 
      `,
      link: 'https://miranchito.digital',
      technologies: ['NEXT', 'FIREBASE', 'JS'],
      images: [
        '/images/ranchito/rancho1.png',
        '/images/ranchito/rancho2.png',
        '/images/ranchito/rancho3.png'
      ],
      repos: [
        {
          href: 'https://github.com/raulzarzadev/mi-ranchito',
          label: 'Next and Firebase'
        }
      ]
    }
  },
  {
    ref: 'negocios-next',
    title: 'negocios del barrio (nextjs)',
    icon: '/images/negocios/logotipo-next.png',
    url: '/details/negocios-next',
    resume: {
      title: 'Negocios del Barrio (NEXT.js)',
      content: `Version 2. This is done with firebase to save development time, improve security, and make it easier for the user to join and manage their preferences.`,
      link: 'https://www.negociosdelbarrio.com',
      technologies: ['REACT', 'NEXT', 'FIREBASE', 'GIT', 'JS'],
      images: [
        '/images/negocios/curvas.svg',
        '/images/negocios/logotipo-next.png'
      ],
      repos: [
        {
          href: 'https://github.com/raulzarzadev/negocios-nextjs',
          label: 'nextjs negocios'
        }
      ]
    }
  },
  {
    ref: 'negocios',
    title: 'negocios del barrio (services)',
    icon: '/images/negocios/NegDelBar.png',
    url: '/details/negocios',
    resume: {
      title: 'Negocios del Barrio',
      content: `A personal project. An SPA focused on making small and locals businesses easier to find on the web. Businesses near you`,
      link: 'https://www.negociosdelbarrio.com',
      technologies: [
        'DOCKER',
        'REACT',
        'MUI',
        'NODE',
        'MONGO',
        'EXP',
        'NGINX',
        'GIT',
        'JS'
      ],
      images: [
        '/images/negocios/NegDelBar.png',
        '/images/negocios/negdelbar-villas.png'
      ],
      repos: [
        {
          href: 'https://github.com/raulzarzadev/negocios',
          label: 'negocios (services)'
        }
      ]
    }
  },
  {
    ref: 'packshoe',
    title: 'packshoe',
    icon: '/icons/works/navBarBanner.png',
    url: '/details/packshoe',
    resume: {
      title: 'Packshoe',
      content: `An SPA focused in join shoemakers and peapole with shoes wath need a fix or preventive care`,
      link: 'https://www.packshoe.com',
      technologies: ['LAMDA', 'BB', 'REACT', 'MUI', 'GQL'],
      images: [
        '/images/packshoe/build-repair.png',
        '/images/packshoe/packshoe-insta.png',
        '/images/packshoe/packshoe-openbox.png',
        '/images/packshoe/select-item.png'
      ]
    }
  },
  {
    ref: 'rickAndMorty',
    title: 'Rick & Morty',
    icon: '/images/rick&morty/r&m.png',
    url: '/details/rickAndMorty',
    resume: {
      title: 'Rick & Morty',
      content: `You can search your favorite character from Rick and Morti. Easly and minimalist tool usign an popular API`,
      link: 'https://rick-and-morty.raulzarzadev.vercel.app/',
      technologies: ['REACT', 'CSS', 'JS', 'GIT'],
      images: [
        '/images/rick&morty/r&m1.png',
        '/images/rick&morty/r&m2.png',
        '/images/rick&morty/r&m3.png'
      ],
      repos: [
        {
          href: 'https://github.com/raulzarzadev/rick-and-morty',
          label: 'Rick & Morty'
        }
      ]
    }
  },
  {
    ref: 'raulzarza',
    title: 'RZ Personal Page',
    icon: '/icons/works/RZ-blanco.svg',
    url: '/details/raulzarza',
    resume: {
      title: 'RZ Personal Page',
      content:
        'My personal page. Build with next.js and css modules. Some other versions was maked with react, node , docker and nginx',
      link: 'https://www.raulzarza.com',
      technologies: ['NEXT', 'CSS'],
      images: [
        '/images/rz/rz-page.png',
        '/images/rz/logo.png',
        '/images/rz/logo-color-test.png',
        '/images/rz/logo-test-box.png',
        '/images/rz/logo-test.png'
      ],
      repos: [
        { href: 'https://github.com/raulzarzadev/raulzarza', label: 'RZ v.2' }
      ]
    }
  },
  {
    ref: 'auth-service',
    title: 'Authentication Service',
    icon: '/images/auth/auth-doc.png',
    url: '/details/auth-service',
    resume: {
      title: 'Authentication Service',
      content:
        'A two-step authentication service built with node, express, JWT, and a small UI.\n The main idea is to develop a reusable authentication service for many applications that can be deployed in one place.',
      link: 'https://www.raulzarza.com',
      technologies: ['NODE', 'DOCKER', 'JWT', 'MONGO', 'EXP', 'NGINX', 'CSS'],
      images: ['/images/auth/auth-doc.png', '/images/auth/auth-ui.png'],
      repos: [
        {
          href: 'https://github.com/raulzarzadev/auth-service',
          label: 'Auth-service'
        }
      ]
    }
  },
  /*  {
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
        '/images/nomadas/guia_nomadas.png'
      ]
    }
  }, */

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
        '/images/negrin/queso_y_huevos.png'
      ]
    }
  }
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
]

export const LEARNING = [
  {
    title: 'Firebase',
    icon: '/icons/techs/firebase.png',
    ref: 'FIREBASE'
  },
  {
    title: 'GRAPHQL',
    icon: '/icons/techs/graphql.svg',
    ref: 'GQL'
  }
]
