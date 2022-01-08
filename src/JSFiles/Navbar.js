import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import img1 from '../assetPhotos/Rectangle35.png';
import Avatar from '@mui/material/Avatar';
import img2 from '../assetPhotos/LoremIPSUM.png';
import '../css/Navbar1.css';
function Navbar() {
  return (
    <>
      <div className='nav_bar'>
      <Paper elevation={3} className='upr_paper'>
      <div>
      <img className='lorem' style={{width:"118px",height:"40px",top:"15px",left:"113px"}}  src={img2} alt="LoremIPSUM"/>
      </div>
      <div className='home'>
      <Typography className='home1' style={{
        fontFamily: "Poppins",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "16px",
lineHeight: "19px",
color: "#333333"
      }}>About Us
      </Typography>
      </div>
      <div className='Contact_Us'>
      <Typography style={{
fontFamily: "Poppins",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "16px",
lineHeight: "19px",
color: "#333333"
      }}>Contact Us
      </Typography>
      </div>
      <div className='Courses'>
      <Typography style={{
fontFamily: "Poppins",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "16px",
lineHeight: "19px",
color: "#333333"
      }}>Courses
      </Typography>
      </div>
      <div className='Mentors'>
      <Typography style={{
fontFamily: "Poppins",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "16px",
lineHeight: "19px",
color: "#333333"
      }}>Mentors
      </Typography>
      </div>
      
      <div className="search" style={{float:"right",display:"inline-block",justifyContent:"space-between"}}>
                <div className="searchInput" >
                        <input  type="text" placeholder='search'  style={{width:"310px",borderColor:"#FBB03B", Height: "50px",background: "#FBB03B",position:"absolute", left:" 65%", right: "11.96%",padding:"5px",top:"18px",borderRadius:"15px"}}/>
                        <div className='searchIcon' style={{width : "16.13px",Height: "16.21px",top: "21px",left :"1316px" ,position: "absolute",border: "2px"}}>
                            <SearchIcon/>
                        </div>
                </div>
                
          </div>
          <Avatar alt="logo" src={img1} className='avt_ar' />


      </Paper>
       
      </div>
    </>
  )
}

export default Navbar



