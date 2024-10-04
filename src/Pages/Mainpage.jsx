import React from 'react';
import logo1 from '../image/logo1.png'; // This path seems correct
import "./Main.css";  
import Info from '../Component/Info'; 
import Talktous from '../Component/Talktous'; // Consistent path to Talktous component
import 'bootstrap/dist/css/bootstrap.min.css';
import Doneprojects from '../Component/Doneprojects'; // Fixed path
import ArrayFun from '../Component/ArrayFun'; // Fixed path
import ChooseUs from '../Component/ChooseUs'; // Fixed path
import Tech_we_use from '../Component/Tech_we_use'; // Fixed path
import BLogs from '../Component/BLogs'; // Fixed path
import Appointment from '../Component/Appointment'; // Fixed path
import Footer from '../Component/Footer'; // Fixed path
import Develop from '../Component/Develop'; // Fixed path
import Nav from '../Component/Nav'; // Fixed path






function Mainpage() {
    return (
        <>

    
<div className='Containerr'style={{height:'100%',background:" #090e17" }}>
<div className='Hero'>
<div className='header-wrap' style={{ width: '90%', margin: '0px auto', paddingTop: "50px" }}>
            <header className='header'>
                <img loading='lazy' src={logo1} alt="Avicenna" />
                <div className='b-f' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "20px" }}>
                    <h3 style={{ color: 'white' }}>+92 320 0001511</h3>
                    <button className='main-btn'  > 
                        Start Your Project
                    </button>
                </div>
            </header>
        </div>

<Nav/>


      
      <div>
      <Talktous/>
      </div>




</div>

<Info/>

     


 
 
<div style={{background:'rgb(9, 14, 23)'}}>
<Develop/>

<Doneprojects />

 

<div className='indust' style={{width:"90%",display:'flex',margin:'0px auto',alignItems:"center",marginTop:"120px"}}>
<div  >
<h2 style={{color:'rgb(58, 237, 178)',fontSize:"55px",fontWeight:900}}>Industries <span style={{color:'white'}}>We Serve</span></h2>
<p style={{color:'white',fontSize:"20px",fontWeight:"100",width:'86%'}}>Our extensive experience in delivering mobile app development services, has given us the opportunity br
 to work with brands  on key industry issues and build efficient industry through smart apps.</p>
</div>


</div>


<ArrayFun/>
<ChooseUs/>
<Tech_we_use/>
<BLogs/>
<Appointment/>
<Footer/>







{/* last... */}
    </div>

   
</div>

    
        
        </>
    )
}

export default Mainpage