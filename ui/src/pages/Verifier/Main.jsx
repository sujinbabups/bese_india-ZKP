/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VerifierHome from './VerifierHome';
import NewRequest from './NewRequest';
import Requests from './Requests';
import Navbar from './Navbar'

const Verifier = () => {
  return (
<div>
  <Navbar />
  <div className='w-screen bg-[#2e3b55] h-[900px] text-[#e1e1e6]'>
    <Routes>
      <Route path="/" element={<VerifierHome />} />
      <Route path="/newrequest" element={<NewRequest />} />
      <Route path="/request" element={<Requests />} />
    </Routes>
  </div>
</div>


  );
}

export default Verifier;
