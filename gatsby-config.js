module.exports = {
  siteMetadata: {
    name: 'Andrew Usher',
    projects: [
      {
        name: 'Mortypedia',
        description:
          'Rick and Morty encyclopedia that includes episodes, locations, and characters that pulls from API',
        id: '7af2f520-9a53-4f85-bd6f-12f926fb3bdb',
        tags: ['API', 'Babel', 'ESLint', 'React', 'React Router', 'Stylus', 'Webpack'],
        liveSite: 'http://andrewusher.co/rick-and-morty'
      },
      {
        name: 'Lorem Ipsum Generator',
        description: 'Customizable lorem ipsum text generator',
        id: '808d502b-4fa0-42fc-807b-391527b1dbf1',
        tags: ['API', 'Babel', 'React', 'Stylus'],
        liveSite: 'http://andrewusher.co/lorem-ipsum-generator'
      },
      {
        name: 'Projects List',
        description: 'Searchable and filterable list of my creations',
        id: '72a3a704-8f7e-4a2c-84f5-a848cd227339',
        tags: ['Babel', 'React', 'Styled Components', 'Webpack'],
        liveSite: 'http://andrewusher.co/projects'
      },
      {
        name: 'React and Webpack Boilerplate',
        description: 'Boilerplate for modern React applications with Webpack, Babel, and ESLint',
        id: 'c453e157-c81a-4a83-93ee-3a6269dc86a1',
        tags: ['Babel', 'ESLint', 'Boilerplate', 'React', 'Webpack'],
        liveSite: 'https://github.com/react-webpack-boilerplate'
      },
      {
        name: 'React and Parcel Boilerplate',
        description: 'Boilerplate for modern React applications using Parcel, Babel, and ESLint',
        id: 'cf67a390-2bc5-4ecb-adc5-03714a370fd5',
        tags: ['Boilerplate', 'React', 'Parcel', 'Babel'],
        liveSite: 'https://github.com/AndrewUsher/react-parcel-boilerplate'
      },
      {
        name: 'Gulp and Stylus Boilerplate',
        description: 'Boilerplate for projects that use Gulp and Stylus',
        id: '74b956bc-afd7-416c-b8d1-8a86c6e85306',
        tags: ['Babel', 'Boilerplate', 'Gulp', 'Stylus'],
        liveSite: 'https://github.com/AndrewUsher/gulp-stylus-boilerplate'
      },
      {
        name: 'Breakout',
        description: 'Breakout clone made with Vanilla JS',
        id: 'ed6eba7a-2bcb-45d9-a288-5c2afe73f4bd',
        tags: ['Game', 'Javascript'],
        liveSite: 'https://codepen.io/uncledrew35/pen/RgwOON'
      },
      {
        name: 'Pong',
        description: 'Pong clone made with ES6 vanilla JS',
        tags: ['Game', 'Javascript', 'ES6'],
        id: '08bb5319-8405-4dfc-a8d2-5c3dca45a776',
        liveSite: 'https://andrewusher.github.io/es6-pong'
      },
      {
        name: 'Animated Buttons',
        description: "Buttons with effect that is used on Vine's website",
        id: 'ed255ba9-6e76-42c9-b303-f3d362e491b0',
        tags: ['Buttons', 'Fun', 'Stylus'],
        liveSite: 'https:/www.andrewusher.co/animated-buttons/'
      },
      {
        name: 'Bikemapper',
        description: 'Landing page for company that sells bike map subscriptions',
        tags: ['Landing Page', 'Stylus'],
        id: 'eb37cb06-82b4-4208-9a48-42e19ba7564f',
        liveSite: 'https://andrewusher.github.io/fcc-landing-page'
      },

      {
        name: 'Google Redesign',
        description: 'Redesign concept for Google Homepage',
        id: '2873017b-5464-4882-86dd-26f9065f9170',
        tags: ['Gulp', 'Redesign', 'Stylus'],
        liveSite: 'https://www.andrewusher.co/google-redesign'
      },
      {
        name: 'Introduction To ES6',
        description: 'Crash course for new features in ES6',
        tags: ['ES6', 'Mini Course'],
        id: 'd264a8c7-5a1c-49d7-95f6-ca654ac63ddb',
        liveSite: 'https://andrewusher.github.io/intro-to-es6'
      },
      {
        name: 'Random Color Generator',
        description: 'Site that generates random colors on click',
        id: 'f567f860-d68a-46ee-a3f3-c48a18692385',
        tags: ['Experiment', 'Javascript'],
        liveSite: 'http://www.andrewusher.co/random-color-generator/'
      },
      {
        name: 'Random Name Generator',
        description: 'Random name and image generator that pulls from API',
        id: '2a3d15e7-266b-4adc-8a08-def79b7a521b',
        tags: ['API', 'Javascript', 'ES6'],
        liveSite: 'http://www.andrewusher.co/random-name-generator/'
      },

      {
        name: 'Star Wars Text Effect',
        description: 'Star Wars text effect made with Stylus',
        id: 'aa510c8f-10ec-4cd6-81cd-ea6e72700086',
        tags: ['CSS', 'Fun'],
        liveSite: 'https://www.andrewusher.co/star-wars'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-stylus',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
