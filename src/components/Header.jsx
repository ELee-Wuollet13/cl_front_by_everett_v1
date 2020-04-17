import React from 'react';



function Header(){

  return (
    <div className='header'>
    <style jsx>{`

      .textBox {
        text-align: right;
        margin-right: 6%;
        margin-top: 1%;
        z-index: 1;
        opacity: .5;
      }

      `}</style>
    <div className="textBox">
    <p> This is where the links go </p>
    </div>
    </div>
  );
};

export default Header;
