import React from 'react'
import Paper from '@mui/material/Paper';
//import Box from '@mui/material/Box';
import '../css/Remus.css';
import img3 from '../assetPhotos/Group55(1).png';
import  Avatar from '@mui/material/Avatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import img4 from '../assetPhotos/Rectangle35.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import  Typography  from '@mui/material/Typography';
import img9 from '../assetPhotos/Group62.png';
//import Button from '@mui/material/Button';
export default function Remus() {
  return (
    <>
      <div className='full_div'>
   
      <Paper className='remus_paper' elevation={3} style={{  display: 'flex',   m: 2,
      width:"51%",
      top: "112px",
      marginLeft:"81px",
      marginTop:"17px",
      borderRadius:"7px",
      flexWrap: 'wrap',height:"350px",left:"50px",backgroundColor:"white"}} >
      <div className='leftPhoto' >
        <img style={{width :"140px",height:"140px" , marginTop:"35px",marginLeft:"35px"}} src={img3} alt=""/>
        <Avatar style={{width:"138px",height:"136px", marginTop:"-142px",marginLeft:"39px"}} alt="Remus Lupin" src={img4}/>
        <div className='tw_fb_in' style={{display:"flex",padding:"4px",marginTop:"30px",opacity:"60%",position:"absolute"}}>
        <TwitterIcon style={{marginLeft:"60px",width:"20px",height:"20px"}}/>
        <FacebookIcon style={{marginLeft:"10px",width:"20px",height:"20px"}} />
        <InstagramIcon style={{marginLeft:"10px",width:"20px",height:"20px"}}/>
        </div>
        
      </div>

      <div className='rightContent' style={{opacity:"0.8"}}>

        <div className='text' style={{fontFamily:"Poppins",fontStyle:"normal"}}>
        <Typography className='textt' style={{position:"absolute",width:"195px",height:"45px",
        marginTop:"11px",left:"260px",fontWeight:600,
        fontSize:"30px",lineHeight:"45px",color:"#000237"}}>Remus&nbsp;Lupin</Typography>
        <Typography className='jEE' style={{fontWeight:400,fontSize:"13px",lineHeight:"19.5px",position: "absolute",
        width:"78px",
        color:"#000237",
        height:"20px",left:"259px",top:"78px"}}>JEE Aspirant</Typography>
        </div>
        <div>
        <div style={{marginLeft:"536px",position:"absolute",marginTop:"21px",
        width:"77px",height:"23.55px",
        fontStyle:"normal",
        textTransform:"lowercase",borderColor:"black",border:"0.5px solid  #000000",color:"black",opacity:"0.7",
        borderRadius:"4px",boxSizing:"border-box"
      }} variant="outlined" ><Typography style={{width:"61.6px",height:"17.05px",fontWeight:"400",fontStyle:"normal",fontFamily:"Poppins",
      fontSize:"12px",lineHeight:"18px",marginLeft:"9px",marginTop:"2px"}}>Edit&nbsp;Profile</Typography>
        </div>

        </div>
{/*
        <div style={{position:"absolute",justifyContent:"center",display:"flex"}}>
        <Button variant="outlined" style={{minWidth:2,maxwidth:4,height:"20px",marginTop:"-80px",
       borderRadius:"23px",marginLeft:"240px",
       border:"0.3px solid #4C4E73",
       boxSizing:"border-box"
      }}>
        <Typography style={{ lineHeight:"14.5px",fontSize:"10px",color:"#4C4E73",fontWeight:400,justifyContent:"center",
        fontFamily:"Poppins",fontStyle:"normal",width:"19.8px",height:"17.95px",textTransform:"lowercase"}}>Jee</Typography>
        </Button>

        <div className="cal" style={{position:"absolute",justifyContent:"center"
        ,display:"flex"}}>
        <Button variant='outline' style={{minWidth:2,maxWidth:55,height:"20px",borderRadius:"23px",
        border:"0.5px solid #4C4E73",boxSizing:"border-box",marginTop:"-80px",marginLeft:"360px"}}>
        <Typography  style={{fontWeight:400,color:"#4C4E73"
        ,textTransform:"lowercase",width:"17.95px",height:"19.8px",
        fontFamily:"Poppins",fontSize:"9px",lineHeight:"14.5px",textAlign:"center", marginRight:"12px",marginTop:"4px",
        fontStyle:"normal"}}>Calculus
        </Typography>
        </Button>
        </div>

        <div className='mech' style={{position:"absolute",justifyContent:"center"
        ,display:"flex"}}>
        <Button variant='outline'  style={{minWidth:2,maxWidth:55,height:"20px",borderRadius:"23px",
        border:"0.5px solid #4C4E73",boxSizing:"border-box",marginTop:"-80px",marginLeft:"483px"}}>
        <Typography  style={{fontWeight:400,color:"#4C4E73"
        ,textTransform:"lowercase",width:"17.95px",height:"19.8px",
        fontFamily:"Poppins",fontSize:"9px",lineHeight:"14.5px",textAlign:"center", marginRight:"20px",marginTop:"4px",
        fontStyle:"normal"}}>Mechanics
        </Typography>
        </Button>
        
        </div>
       

        <div className='org' style={{position:"absolute",justifyContent:"center"
        ,display:"flex"}}>
        <Button variant='outline'  style={{minWidth:2,maxWidth:55,height:"20px",borderRadius:"23px",
        border:"0.5px solid #4C4E73",boxSizing:"border-box",marginTop:"-80px",marginLeft:"610px"}}>
        <Typography  style={{fontWeight:400,color:"#4C4E73"
        ,textTransform:"lowercase",width:"17.95px",height:"19.8px",
        fontFamily:"Poppins",fontSize:"9px",lineHeight:"14.5px",textAlign:"center", marginRight:"11px",marginTop:"4px",
        fontStyle:"normal"}}>Organic
        </Typography>
        </Button>
        
        </div>

        <div className='B.tech'  style={{position:"absolute",justifyContent:"center"
        ,display:"flex"}}>
        <Button variant='outline'  style={{minWidth:2,maxWidth:55,height:"20px",borderRadius:"23px",
        border:"0.5px solid #4C4E73",boxSizing:"border-box",marginTop:"-80px",marginLeft:"728px"}}>
        <Typography  style={{fontWeight:400,color:"#4C4E73"
        ,textTransform:"lowercase",width:"17.95px",height:"19.8px",
        fontFamily:"Poppins",fontSize:"9px",lineHeight:"14.5px",textAlign:"center", marginLeft:"-4px",marginTop:"4px",
        fontStyle:"normal"}}>B.Tech
        </Typography>
        </Button>
        </div>

        <div className='thermo' style={{position:"absolute",justifyContent:"center"
        ,display:"flex"}}>
        <Button variant='outline'  style={{minWidth:70,maxWidth:90,height:"20px",borderRadius:"23px",
        border:"0.5px solid #4C4E73",boxSizing:"border-box",marginTop:"-80px",marginLeft:"887px"}}>
        <Typography  style={{fontWeight:400,color:"#4C4E73"
        ,textTransform:"lowercase",width:"17.95px",height:"19.8px",
        fontFamily:"Poppins",fontSize:"9px",lineHeight:"14.5px",textAlign:"center",marginTop:"4px",textAlignLast:"center",marginRight:"43px",
        fontStyle:"normal"}}>Thermodynamics
        </Typography>
        </Button>
        </div>

        <div className='cal_cu2'  style={{position:"absolute",justifyContent:"center"
        ,display:"flex"}}>
        <Button variant='outline'  style={{minWidth:2,maxWidth:55,height:"20px",borderRadius:"23px",
        border:"0.5px solid #4C4E73",boxSizing:"border-box",marginTop:"-53px",marginLeft:"240px"}}>
        <Typography  style={{fontWeight:400,color:"#4C4E73"
        ,textTransform:"lowercase",width:"17.95px",height:"19.8px",
        fontFamily:"Poppins",fontSize:"9px",lineHeight:"14.5px",textAlign:"center",
        marginTop:"4px",textAlignLast:"center",marginRight:"43px",marginLeft:"28px",
        fontStyle:"normal"}}>Calculus
        </Typography>
        </Button>
        </div>

        {/*
         
        
        
        

       
        
       
       
        

        <Button variant='outline' style={{}}>
        <Typography  style={{}}>
        </Typography>
        </Button>
        
       

        <Button variant='outline' style={{}}>
        <Typography  style={{}}>
        </Typography>
        </Button>
        
        

        <Button variant='outline' style={{}}>
        <Typography  style={{}}>
        </Typography>

        </Button>
        
        
        <Button variant='outline' style={{}}>
        <Typography  style={{}}>
        </Typography>
        </Button>
        
       
        <Button variant='outline' style={{}}>
        <Typography  style={{}}>
        </Typography>
        </Button>
        
        

        <Button variant='outline' style={{}}>
        <Typography  style={{}}>
        </Typography>
        </Button>
        
      

        <Button variant='outline' style={{}}>
        <Typography  style={{}}>
        </Typography>
        </Button>
        
       

        <Button variant='outline' style={{}}>
        <Typography  style={{}}>
        </Typography>
        </Button>
        
       

        <Button variant='outline' style={{}}>
        <Typography  style={{}}>
        </Typography>
        </Button>
        
      

        <Button variant='outline' style={{}}>
        <Typography  style={{}}>
        </Typography>

        </Button> 
      
        </div>
        
        */}
      </div>

        <div style={{display:"flex",position:"absolute",top:"115px",left:"255px",opacity:"0.7"}}>
            <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"32.04px",height:"20.65px",
            textAlign:"center",borderRadius:"23px"}}>
            <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"17.8px",textAlignLast:"center",marginLeft:"5px"}}>Jee</Typography>
            </div>
            <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",width:"64px",height:"20.65px",marginRight:"9px",
            textAlign:"center",borderRadius:"23px"}}>
            <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"39.63px",marginLeft:"4px"}}>Calculus</Typography>
           
            </div>
            <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",width:"78px",marginRight:"9px",height:"20.65px",
            textAlign:"center",borderRadius:"23px"}}>
            <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"49.62px",marginLeft:"4px"}}>Mechanics</Typography>
            
            </div>
            <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",width:"60px",marginRight:"9px",height:"20.65px",
            textAlign:"center",borderRadius:"23px"}}>
            <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"40.59px",marginLeft:"3px"}}>Organic</Typography>
            
            </div>
            <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",width:"55px",marginRight:"9px",height:"20.65px",
            textAlign:"center",borderRadius:"23px"}}>
            <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"32px",marginLeft:"4px"}}>B.Tech</Typography>
           
            </div>
            <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",width:"130px",height:"20.65px",
            textAlign:"center",borderRadius:"23px"}}>
            <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"82px",marginLeft:"5.5px"}}>Thermodynamics</Typography>
           
            </div>

        </div>

        <div  style={{display:"flex",position:"absolute",top:"155px",left:"255px",opacity:"0.7"}}>
        <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"64px",height:"20.65px",
        textAlign:"center",borderRadius:"23px"}}>
        <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"39.63px",marginLeft:"4px"}}>Calculus</Typography>
        </div>
        <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"78px",height:"20.65px",
        textAlign:"center",borderRadius:"23px"}}>
        <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"49.62px",marginLeft:"4px"}}>Mechanics</Typography>
        </div>
        <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"32.04px",height:"20.65px",
        textAlign:"center",borderRadius:"23px"}}>
        <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"20px"}}>CSE</Typography>
        </div>
        <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"60px",height:"20.65px",
        textAlign:"center",borderRadius:"23px"}}>
        <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"40.59px",marginLeft:"3px"}}>Organic</Typography>
        </div>
        <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"32.04px",height:"20.65px",
        textAlign:"center",borderRadius:"23px"}}>
        <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"17.8px",marginLeft:"5px"}}>Jee</Typography>
        </div>
        <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"55px",height:"20.65px",
        textAlign:"center",borderRadius:"23px"}}>
        <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"32px",marginLeft:"4px"}}>B.Tech</Typography>
        </div>
        </div>


        <div style={{display:"flex",position:"absolute",top:"195px",left:"255px",opacity:"0.7"}} >
        <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"130px",height:"20.65px",
        textAlign:"center",borderRadius:"23px"}}>
        <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"82px",marginLeft:"5.5px"}}>Thermodynamics</Typography>
        </div>
        <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"55px",height:"20.65px",
        textAlign:"center",borderRadius:"23px"}}>
        <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"32px",marginLeft:"4px"}}>B.Tech</Typography>
        </div>
        <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"64px",height:"20.65px",
        textAlign:"center",borderRadius:"23px"}}>
        <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"39.63px",marginLeft:"4px"}}>Calculus</Typography>
        </div>
        <div style={{border:"0.5px solid #4C4E73",display:"inline-table",padding:"5px",marginRight:"9px",width:"60px",height:"20.65px",
        textAlign:"center",borderRadius:"23px"}}>
        <Typography style={{fontFamily:"Poppins",fontStyle:"normal",height:"14.95px",width:"40.59px",marginLeft:"3px"}}>Organic</Typography>
        </div>
      </div>
      
        <hr className='hr'/>
      
        <div style={{width:"380px",height:"99px",opacity:"0.7",left:"260px",top:"270px",position:"absolute",display:"grid"}}>
        <Typography style={{fontFamily:"Poppins ,sans-serif", fontWeight:400,color: "solid #000000"  ,fontStyle:"normal",lineHeight:"18px",fontSize:"12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, <br/>
        turpis cras in pellentesque at blandit velit. Magna at lobortis <br/>
        lacus, ultricies in vel morbi adipiscing  Nibh purus a sollicitudin <br/>
        scelerisque.Integer eget dui orci, dis tellus.</Typography>
        
        </div>
    

      

      </Paper>
    </div>

    <div >
    <img className='left_design' src={img9} alt='design'/>
    </div>
    </>
  );
}


