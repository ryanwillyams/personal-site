import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="https://i.imgur.com/qnCGW4k.jpeg" alt="" />
      </Link>
      <header>
        <h2>Ryan Williams</h2>
        <p><a href="mailto:ryanwillyamsdo@gmail.com">ryanwillyamsdo@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> I am Ryan Williams, a computer science graduate from CSUF.
        With a strong background in backend engineering
        , cloud computing, and application engineering,
        I bring extensive experience to contribute to your team.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
