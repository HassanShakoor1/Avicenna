import React from 'react';
import "./footer.css";
import logo1 from '../image/logo1.png';
import lg1 from '../image/lg1.svg';
import lg2 from '../image/lg2.svg';
import lg3 from '../image/lg3.svg';
import lg4 from '../image/lg4.svg';
function Footer() {
    const footerarr = [
        {
            title: 'Company',
            heading: ['About Us', 'Portfolio', 'Blog', 'Careers', 'Contact Us']
        },
        {
            title: 'Solutions',
            heading: ['App Discovery Services', 'Team Augmentation', 'Enterprise App Development', 'AR/VR Application Development', 'IoT Application Development', 'Wearables Apps Development', 'Field Sales', 'On-Demand Apps Development']
        },
        {
            title: 'Services',
            heading: ['iOS', 'Android', 'React Native', 'Flutter', 'Ionic', 'Xamarin', 'NativeScript', 'HTML 5', 'Sencha']
        },
        {
            title: 'Industries',
            heading: ['Retail', 'Agriculture', 'Healthcare', 'Pharmaceutical', 'Manufacturing', 'Automotive', 'Logistics', 'Education', 'NFC']
        }
    ];
    
    return (
        <div style={{background: `linear-gradient(90.28deg, rgba(98, 98, 98, 0.25) 0%, rgba(168, 168, 168, 0.25) 100%)`,
       marginTop:"90px",
       borderTop:'2px solid grey',
    borderTopRightRadius: '30px',
    borderTopLeftRadius: '30px',
        }}>
            <footer >
                {footerarr.map((item, index) => (
                    <div key={index} className="footer-row" style={{ marginBottom: "20px" }}>
                        <h4 style={{ fontSize: "25px", fontWeight: 500, marginTop: "20px" }}>{item.title}</h4>
                        <ul style={{ marginTop: "30px" }}>
                            {item.heading.map((subItem, subIndex) => (
                                <li style={{ lineHeight: "40px", fontSize: "18px", fontWeight: 100 }} key={subIndex}>{subItem}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                {/* Horizontal line */}

            </footer>
            <hr style={{ width: "100%", borderBottom: "1px solid white" ,marginBottom:'50px'}} />
            
            <div className='main-div'>
                
                <div>
                    <img className='main-img' src={logo1} alt="logo" />
                    <p style={{width:'55%',paddingTop:'30px',fontSize:'14px',color:'rgb(255, 255, 255)',fontWeight:100}}>Our main focus includes planning, analysis, design, development & implementation, testing, and <br /> maintenance.</p>
                </div>
                <div className='flo-icn'>
                    <h1 style={{fontSize:'24px',textAlign:'center'}}>Follow Us On:</h1>
                    <div style={{display:'flex',justifyContent:'center',gap:'10px'}}>
                    <img   className='icon-img' style={{width:'45px'}} src={lg1} alt="lg" />
                    <img   className='icon-img' style={{width:'45px'}} src={lg2} alt="lg" />
                    <img   className='icon-img' style={{width:'45px'}} src={lg3} alt="lg" />
                    <img   className='icon-img' style={{width:'45px'}} src={lg4} alt="lg" />

                    </div>
                </div>
            </div>
            <hr style={{ width: "100%", borderBottom: "1px solid white" ,marginTop:'50px'}} />

            <div className='copy' style={{color:'white',margin:'0px auto',width:"80%",display:'flex',justifyContent:'space-between',alignItems:"center",height:'70px'}}>
                <p  style={{fontWeight:100,fontSize:'20px'}}>@2023 All the Copyright Reserved.</p>
                <p style={{fontWeight:100,fontSize:'20px'}}>Privacy Policy | Terms of Services</p>
            </div>
            
        </div>
    );
}

export default Footer;
