import React from 'react';

export default function Footer() {
  return (
    <>
      <footer>
        <div style={{
          display: 'flex',
          margin: '30px',
          gap: '30px',
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          <a style={{ color: 'white' }} href="https://github.com/AndrewDippel"><i class="fa-brands fa-square-github"></i></a>
          <a style={{ color: 'white' }} href="https://www.linkedin.com/in/andrew-dippel-803679249/"><i class="fa-brands fa-linkedin"></i></a>
          <a style={{ color: 'white' }} href="https://stackoverflow.com/users/19600133/andrew"><i class="fa-brands fa-stack-overflow"></i></a>
        </div>
      </footer >
    </>
  );
}