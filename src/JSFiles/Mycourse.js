import React from 'react'
import '../css/Mycourse.css';
import Paper from '@mui/material/Paper';
import  Typography  from '@mui/material/Typography';
import img12 from '../assetPhotos/college(1).png';
import img13 from '../assetPhotos/react.png';
import img14 from '../assetPhotos/courses5.png';
import img15 from '../assetPhotos/js.png';
import img16 from '../assetPhotos/Rectangle20.png';
import img17 from '../assetPhotos/Rectangle24.png';
import img18 from '../assetPhotos/Group63.png';
import img19 from '../assetPhotos/star.png';
function Mycourse() {
    return (
        <>
        <div >
        <Paper className='My_course' elevation={3} >
        <img className='des' src={img12} alt='design'/>
        <div>
        <Typography className='course_heading' style={{fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "25px",
            lineHeight: "37px",
            color: "#000237",
            top: "10px",
    position: "absolute",
width: "149px",
height: "38px",
left: "34px"
}}>My Courses</Typography>
        </div>

        <div style={{marginTop:"40px",marginLeft:"-30px"}}>
        <img className='js' src={img15} alt='javascript'/>
        <Typography className='java_script' style={{
            position: "absolute",
width: "166px",
height:"28px",
fontFamily: "Poppins",
fontStyle: "normal",
marginLeft: "219px",
    marginTop: "8px",
fontWeight: "550",
fontSize: "17.8px",
lineHeight: "27px",
color: "#333333"
        }}>
        Lorem ipsum sit a</Typography>
        <Typography className='para' style={{
            position: "absolute",
width: "171px",
height: "33px",
fontFamily: "Poppins",
fontStyle: "normal",
fontWeight:"normal",
fontSize: "11px",
lineHeight: "15px",
color: "#666666",
marginTop: "42px",
marginLeft: "219px",

        }}>Lorem ipsum dolor sit amet, <br/>consectetuer adipisc Lorem<br/> ipsum dolor sit amet, </Typography>
        <div className='star'>
        <img  className='star1'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star2' style={{marginRight:"3px"}}src={img19} alt='star'/>
        <img   className='star3'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star4'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star5'style={{marginRight:"3px"}} src={img19} alt='star'/>
        </div>
       
        </div>
        <div style={{marginTop:"40px"}}>
        <img className='other' src={img14} alt='other_course'/>
        <Typography className='java_script' style={{
            position: "absolute",
width: "166px",
height:"28px",
fontFamily: "Poppins",
fontStyle: "normal",
marginLeft: "219px",
    marginTop: "140px",
fontWeight: "550",
fontSize: "17.8px",
lineHeight: "27px",
color: "#333333"
        }}>
        Lorem ipsum sit a</Typography>
        <Typography className='para' style={{
            position: "absolute",
width: "171px",
height: "33px",
fontFamily: "Poppins",
fontStyle: "normal",
fontWeight:"normal",
fontSize: "9.9px",
lineHeight: "15px",
color: "#666666",
marginTop: "175px",
marginLeft: "219px",   

        }}>Lorem ipsum dolor sit amet, <br/>consectetuer adipisc Lorem<br/> ipsum dolor sit amet, </Typography>
        <div className='star_sec'>
        <img  className='star1'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star2' style={{marginRight:"3px"}}src={img19} alt='star'/>
        <img   className='star3'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star4'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star5'style={{marginRight:"3px"}} src={img19} alt='star'/>
        </div>
        </div>
        <div style={{marginTop:"40px"}}>
        <img className='react' src={img13} alt='react'/>
        <Typography className='java_script' style={{
            position: "absolute",
width: "166px",
height:"28px",
fontFamily: "Poppins",
fontStyle: "normal",
marginLeft: "219px",
    marginTop: "280px",
fontWeight: "550",
fontSize: "17.8px",
lineHeight: "27px",
color: "#333333"
        }}>
        Lorem ipsum sit a</Typography>
        <Typography className='para' style={{
            position: "absolute",
width: "171px",
height: "33px",
fontFamily: "Poppins",
fontStyle: "normal",
fontWeight:"normal",
fontSize: "11px",
lineHeight: "15px",
color: "#666666",
marginTop: "315px",
marginLeft: "219px",   

        }}>Lorem ipsum dolor sit amet, <br/>consectetuer adipisc Lorem<br/> ipsum dolor sit amet, </Typography>
        <div className='star_third'>
        <img  className='star1'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star2' style={{marginRight:"3px"}}src={img19} alt='star'/>
        <img   className='star3'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star4'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star5'style={{marginRight:"3px"}} src={img19} alt='star'/>
        </div>

        </div>
        <div style={{marginTop:"40px"}}>
        <img className='html_css' src={img17} alt='html_css'/>
        <Typography className='java_script' style={{
            position: "absolute",
width: "166px",
height:"28px",
fontFamily: "Poppins",
fontStyle: "normal",
marginLeft: "219px",
    marginTop: "420px",
fontWeight: "550",
fontSize: "17.8px",
lineHeight: "27px",
color: "#333333"
        }}>
        Lorem ipsum sit a</Typography>
        <Typography className='para' style={{
            position: "absolute",
width: "171px",
height: "33px",
fontFamily: "Poppins",
fontStyle: "normal",
fontWeight:"normal",
fontSize: "11px",
lineHeight: "15px",
color: "#666666",
marginTop: "455px",
marginLeft: "219px",   

        }}>Lorem ipsum dolor sit amet, <br/>consectetuer adipisc Lorem<br/> ipsum dolor sit amet, </Typography>
        <div className='star_fourth'>
        <img  className='star1'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star2' style={{marginRight:"3px"}}src={img19} alt='star'/>
        <img   className='star3'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star4'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star5'style={{marginRight:"3px"}} src={img19} alt='star'/>
        </div>
        </div>
        <div style={{marginTop:"43px"}}>
        <img className='c' src={img16} alt='C'/>
        <Typography className='java_script' style={{
            position: "absolute",
width: "166px",
height:"28px",
fontFamily: "Poppins",
fontStyle: "normal",
marginLeft: "219px",
    marginTop: "555px",
fontWeight: "550",
fontSize: "17.8px",
lineHeight: "27px",
color: "#333333"
        }}>
        Lorem ipsum sit a</Typography>
        <Typography className='para' style={{
            position: "absolute",
width: "171px",
height: "33px",
fontFamily: "Poppins",
fontStyle: "normal",
fontWeight:"normal",
fontSize: "11px",
lineHeight: "15px",
color: "#666666",
marginTop: "590px",
marginLeft: "219px",   

        }}>Lorem ipsum dolor sit amet, <br/>consectetuer adipisc Lorem<br/> ipsum dolor sit amet, </Typography>
        <div className='star_fourth'>
        <img  className='star1'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star2' style={{marginRight:"3px"}}src={img19} alt='star'/>
        <img   className='star3'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star4'style={{marginRight:"3px"}} src={img19} alt='star'/>
        <img  className='star5'style={{marginRight:"3px"}} src={img19} alt='star'/>
        </div>
        </div>
       
        
        </Paper>

        <img className='de_g' src={img18} alt='design'/>
        </div>
            
        </>
    )
}

export default Mycourse
