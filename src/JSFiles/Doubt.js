import  Paper  from '@mui/material/Paper';
import React from 'react';
import '../css/Doubt.css';
import img7 from '../assetPhotos/image2.png';
import { Typography } from '@mui/material';
import img8 from '../assetPhotos/Group61.png';
function Doubt() {
    return (
        <>
        <div>
        <Paper className='doubt' elevation={3} >

        <div >
        <img className='av_tar' src={img7} alt='av_tar'/>
        </div>

        <div className='down_box'>
        <Typography className='Book_mentor'>Book Your Free Mentorship Session Now!</Typography>

        </div>

        <div className='outer'>
        <Typography className='Any_doubt' style={{
            position: "absolute",
            width: "164px",
            height: "30px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "21px",
            lineHeight: "27px",
            color:" #FFFFFF",
            top:"26px",
            left: "210px",
        }}>
        Any Any Doubts?
        </Typography>

           <Typography className='list'>
           <li>
           Talk to our mentors
           </li>
           <li>
           Get expert Guidance
           </li>
           <li>
           Talk to our mentors
           </li>
           </Typography>

        </div>
       
        </Paper>
        </div>
        <div >
        <img className='Right_side_design' src={img8} alt='design'/>
        </div>
           
        </>
    )
}

export default Doubt
