/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserProvider } from 'ethers';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const provider = new BrowserProvider(window.ethereum);

  async function connectToMetamask() {
    const signer = await provider.getSigner();
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-screen h-20 bg-[#00bcd4] font-bold text-[#08244d] text-xl'>
  <div className='flex justify-between items-center mx-[4%] h-full'>
    <div>
      <Link to="/">
        <h1 className='text-3xl'>ZKP</h1>
      </Link>
    </div>

    <ul className='hidden md:flex gap-5 items-center'>
      <Link to="/verifier/">
        <li>Home</li>
      </Link>
      <Link to="/verifier/newrequest">
        <li>New Request</li>
      </Link>
      <Link to="/verifier/request">
        <li>Requests</li>
      </Link>
    </ul>

    <div className='md:hidden' onClick={toggleMenu}>
      {isMenuOpen ? (
        <FiX size={30} className='text-[#08244d]' />
      ) : (
        <FiMenu size={30} className='text-[#08244d]' />
      )}
    </div>
  </div>

  <ul
    className={`md:hidden bg-[#00bcd4] flex flex-col items-center gap-5 mt-1 absolute w-full left-0 transition-all duration-300 ease-in-out ${
      isMenuOpen ? 'top-[80px]' : 'top-[-300px]'
    }`}
  >
    <Link to="/verifier/">
      <li onClick={toggleMenu}>Home</li>
    </Link>
    <Link to="/verifier/newrequest">
      <li onClick={toggleMenu}>New Request</li>
    </Link>
    <Link to="/verifier/request">
      <li onClick={toggleMenu}>Requests</li>
    </Link>
  </ul>
</div>

  );
};

export default Nav;
