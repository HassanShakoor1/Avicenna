import React from 'react';
import './info.css';

function Info() {
  return (
    <section className='my-section' style={{ margin: '0px auto', width: '90%' ,paddingTop:"70px"}}>
      <div className="information">
        <div className='myclasss' style={{
          paddingTop: '20px',
          height:'300px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',  // Wrap for small screens
        }}>
          <div className="h1" style={{ width: '24%', textAlign: 'center',height:'140px' }}>
            <h1>300<span style={{ color: 'rgb(174, 175, 177)' }}>+</span></h1>
            <p >Designer, Developer <br /> and Miracle Workers</p>
          </div>
          <div style={{ width: '24%', textAlign: 'center' }}>
            <h1>500<span style={{ color: 'rgb(174, 175, 177)',height:'140px' }}>+</span></h1>
            <p>Satisfied Customer</p>
          </div>
          <div style={{ width: '24%', textAlign: 'center',height:'140px' }}>
            <h1>1000<span style={{ color: 'rgb(174, 175, 177)' }}>+</span></h1>
            <p>Delivered Projects</p>
          </div>
          <div style={{ width: '24%', textAlign: 'center',height:'140px' }}>
            <h1>15<span style={{ color: 'rgb(174, 175, 177)' }}>+</span></h1>
            <p>Years of Development <br />Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
