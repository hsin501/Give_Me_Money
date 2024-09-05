/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <a href='#' className='logo' onClick={(e) => e.preventDefault()}>
          <DollarSignIcon />
          <span>Give Me Money 給我錢</span>
        </a>
      </div>
    </header>
  );
};

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='12' x2='12' y1='2' y2='22' />
      <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
    </svg>
  );
}

export default Header;
