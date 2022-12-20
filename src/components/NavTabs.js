import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <div style={{
        gap: '30px',
        backgroundColor: '#ef6817',
        width: '100%'
      }}>
        <h1> Andrew Dippel</h1>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a style={{ color: 'black' }}
              href="#about"
              onClick={() => handlePageChange('About')}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a style={{ color: 'black' }}
              href="#projects"
              onClick={() => handlePageChange('Projects')}
              // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a style={{ color: 'black' }}
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a style={{ color: 'black' }}
              href="#Resume"
              onClick={() => handlePageChange('Resume')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavTabs;
