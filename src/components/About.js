import React from 'react'

const About = ({ children }) => (
  <div className="about">
    <h2>About Me</h2>
    <p>
      I'm a dedicated and dependable front-end web developer and designer that specializes in landing pages and personal
      portfolios. My goal is to use the Internet to reach out to others and assist them in establishing an online
      presence. I like to build things - usually with technology, and I believe technology should enhance every person's
      life.
    </p>
    <p>
      Throughout my life, I've had a passion for computers. As a teenager, I toyed around in programs like Adobe
      Illustrator and got pretty good at it. Now, I'm super passionate about web design and development, and I have one
      year of study behind me.
    </p>
    <p>
      I also enjoy cycling around the city and exploring, and have been riding bikes for over 10 years and have
      completed trips ranging from 20 to 40 miles. I'm inspired by a cup of hot chocolate, good music, and interesting
      documentaries.
    </p>
    <div className="resume">
      <span />
      <div className="resume-inside">
        <h3>/* --Resume-- */</h3>
        <h4>/* Summary of Qualifications */</h4>
        <ul>
          <li>Passionate about web development and new technologies.</li>
          <li>Excellent organization, self-motivation, and problem-solving skills.</li>
          <li>Passionate about web development and new technologies.</li>
        </ul>
        <h4>/* Skills */</h4>
        <h5>Core</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>Mobile and Responsive Design</li>
        </ul>
        <h5>Libraries</h5>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Webpack</li>
          <li>Gulp</li>
          <li>Babel</li>
        </ul>
        <h4>/* Projects */</h4>
        <h5>Mortypedia</h5>
        <ul>
          <li>Rick and Morty episode, character, and location encyclopedia</li>
          <li>Built With: React, React Router, Stylus</li>
        </ul>
        <h5>Projects List</h5>
        <ul>
          <li>Searchable and Filterable list of my projects</li>
          <li>Built With: React, Styled Components</li>
        </ul>
        <h5>Lorem Ipsum Generator</h5>
        <ul>
          <li>Customizable lorem ipsum text generator</li>
          <li>Built With: React, Styled Components</li>
        </ul>
        <h4>/* Education */</h4>
        <ul>
          <li>Memphis School of Excellence - High School Diploma 2017</li>
        </ul>
      </div>
    </div>
    {children}
  </div>
)

export default About
