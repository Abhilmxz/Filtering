import React from 'react';
import "./Recommended.css";
import Buttons from '../Components/Buttons';

const Recommended = ({handleClick}) => {
  return (
    <>
    <div className=''>
      <h2 className='recommended-title'>Recommended</h2>
      <div className='recommended-flex'>
      <Buttons onClickHandler={handleClick} value="" title="All Products" className='btns'>All Products</Buttons>
      <Buttons onClickHandler={handleClick} value="Nike" title="Nike" className='btns'>Nike</Buttons>
      <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" className='btns'>Adidas</Buttons>
      <Buttons onClickHandler={handleClick} value="Puma" title="Puma" className='btns'>Puma</Buttons>
      <Buttons onClickHandler={handleClick} value="vans" title="Vans" className='btns'>Vans</Buttons>
      </div>
      </div>
    </>
  );
};

export default Recommended;
