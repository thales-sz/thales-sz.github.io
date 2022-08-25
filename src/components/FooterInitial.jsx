import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import './FooterInitial.css';

export default function FooterInitial() {
  return (
    <footer className="initial">
      <div className="arrowDown" style={ { marginTop: '25px' } }>
        <div>
          <AiOutlineArrowDown size="35px" />
        </div>
      </div>
    </footer>
  );
}
