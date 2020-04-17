import React from 'react';



function Footer(){

  return (
    <div className='footer'>
    <style jsx>{`
      body {

      }

      .textBox {
        text-align: right;
        margin-right: 10%;
        margin-top: 10%;
        z-index: 1;
        opacity: .5;
      }

      `}</style>
    <div className="textBox">
    <p> This is where the credits go </p>
    </div>
    </div>
  );
};

export default Footer;
