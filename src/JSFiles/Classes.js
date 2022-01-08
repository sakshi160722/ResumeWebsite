import React from 'react'
import Paper from '@mui/material/Paper';
import  Typography  from '@mui/material/Typography';
import img5 from '../assetPhotos/Rectangle2011.png';
import img6 from '../assetPhotos/Rectangle2411.png';
import '../css/Classes.css';
import img10 from '../assetPhotos/DiscoverLifelong1(1).png';
import img11 from '../assetPhotos/Story.png';
import img20 from '../assetPhotos/footer.png';
import img21 from '../assetPhotos/Group61.png';
function Classes() {
    return (
        <>
        <div>
        <Paper className='class' elevation={3}  style={{height:"1097px",width:"51.2%",top:"500px",left:"130px",
        borderRadius:"7px", 
        position:"absolute",backgroundColor:"white"}}>
        <img className='design_upcom' src={img10} alt='design'/>
        <div className='upcom_ing' style={{top:"501",width:"285px",height:"45px",left:"60px",position:"absolute",marginTop:"4px",marginRight:"501px"}}>
        <Typography style={{fontStyle:"normal",fontFamily:"Poppins",fontWeight:600,fontSize:"30px",
        lineHeight:"45px",color:"#000237;"}}> Upcoming Classes
        </Typography>
        </div>
       <div >
            <Typography style={{marginTop:"60px",marginLeft:"24px",opacity:"0.4",
            fontWeight:400,fontSize:"15px", lineHeight:"19.5px", position:"absolute",color:"black", 
            fontStyle:"normal",fontFamily:"Poppins"}}>Today</Typography>
       </div>
       <hr className='hr1'/>
        <Paper elevation={1} style={{
            position: "absolute",
width: "770px",
height: "128px",
marginLeft:"12px",
top:"95px",
background:" #FFFFFF",
border: "1.5px solid #FAFAFA",
boxSizing: "borderBox",
borderRadius: "21px"
        }}>
        <div style={{position:"absolute",marginLeft:"10px"}}>
       <img style={{marginTop:"9px",width:"111px",height:"111px",borderRadius:"13px"}} src={img5} alt='C++'/>
       <Typography className='heading' style={{marginTop:"-110px",marginLeft:"140px",width:"278px",height:"38px",fontSize:"19.8px", lineHeight:"30px", color:"#333333", fontWeight:500, fontFamily:"Poppins", fontStyle:"normal"}}>Lorem ipsum sit amet</Typography>
        <Typography className='paragraph' style={{ position: "absolute",
        width: "200%",
        height: "53px",fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "16px",
        color: "#666666",
        marginLeft:"140px",
        justifyContent:"space-between",
        letterSpacing:"1px",
        wordSpacing:"2px"
        }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi&nbsp;vitae vitae volutpat urna,<br/> nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed<br/> malesuada nulla pharetra hash.</Typography>
       
       
            <div className='right_side_clock' style={{left:"573px"}}> 
            <img className='clock' style={{position: "absolute",
            width: "18px",
            height: "18px",
           }} src={img11} alt='clock'/>
            <Typography className='time'style={{marginLeft:"23px", fontFamily: "Poppins",marginTop:"1.5px",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "12px",
            lineHeight: "19px",
            }} >4:00-6:00 PM</Typography>
            </div>

            <div className='join'>
            <Typography style={{position: "absolute",
                width: "64px",
                height: "21px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "13.9px",
                lineHeight: "21px",
                marginLeft:"11px",
                marginTop:"2px",
                color: "#FFFFFF"}}>Join Now</Typography>
            </div>
        </div>
        </Paper>
       
      {/**2 */}
        <Paper elevation={1} style={{
            position: "absolute",
width: "770px",
height: "128px",
marginLeft:"12px",
top:"250px",
background:" #FFFFFF",
border: "1.5px solid #FAFAFA",
boxSizing: "borderBox",
borderRadius: "21px"
        }}>
       <div style={{position:"absolute",marginLeft:"10px"}}>
       <img style={{marginTop:"9px",width:"111px",height:"111px",borderRadius:"13px"}} src={img6} alt='Js_CSS'/>
       <Typography className='heading' style={{marginTop:"-110px",marginLeft:"140px",width:"278px",height:"38px",fontSize:"19.8px", lineHeight:"30px", color:"#333333", fontWeight:500, fontFamily:"Poppins", fontStyle:"normal"}}>Lorem ipsum sit amet</Typography>
       <Typography className='paragraph' style={{ position: "absolute"
       ,width: "200%",
       height: "53px",fontFamily: "Poppins",
       fontStyle: "normal",
       fontWeight: "normal",
       fontSize: "12px",
       lineHeight: "16px",
       color: "#666666",
       marginLeft:"140px",
       justifyContent:"space-between",
        letterSpacing:"1px",
        wordSpacing:"2px"
       }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi&nbsp;vitae vitae volutpat urna,<br/> nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed<br/> malesuada nulla pharetra hash.</Typography>
       <div className='right_side_clock' style={{left:"573px"}}> 
            <img className='clock' style={{position: "absolute",
            width: "18px",
            height: "18px",
           }} src={img11} alt='clock'/>
            <Typography className='time'style={{marginLeft:"23px", fontFamily: "Poppins",marginTop:"1.5px",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "12px",
            lineHeight: "19px",
            }} >4:00-6:00 PM</Typography>
            </div>
            <div className='join1'>
            <Typography style={{position: "absolute",
                width: "64px",
                height: "21px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "13.9px",
                lineHeight: "21px",
                marginLeft:"11px",
                marginTop:"2px",
                color: "#FFFFFF"}}>Join Now</Typography>
            </div>
       </div>
    </Paper>

    <div className='date'>
    <Typography style={{fontFamily:"Poppins"
,fontStyle: "normal",
fontWeight: "normal",
fontSize: "15px",
lineHeight: "19px",
}}>16/09/21</Typography>
<hr className='hr12'/>
    </div>
    

    {/**3 */}
    <Paper elevation={1} style={{
        position: "absolute",
width: "770px",
height: "128px",
marginLeft:"12px",
top:"450px",
background:" #FFFFFF",
border: "1.5px solid #FAFAFA",
boxSizing: "borderBox",
borderRadius: "21px"
    }}>
       <div style={{position:"absolute",marginLeft:"10px"}}>
       <img style={{marginTop:"9px",width:"111px",height:"111px",borderRadius:"13px"}} src={img5} alt='C++'/>
       <Typography className='heading' style={{marginTop:"-110px",marginLeft:"140px",width:"278px",height:"38px",fontSize:"19.8px", lineHeight:"30px", color:"#333333", fontWeight:500, fontFamily:"Poppins", fontStyle:"normal"}}>Lorem ipsum sit amet</Typography>
       <Typography className='paragraph' style={{ position: "absolute"
       ,width: "200%",
       height: "53px",fontFamily: "Poppins",
       fontStyle: "normal",
       fontWeight: "normal",
       fontSize: "12px",
       lineHeight: "16px",
       color: "#666666",
       marginLeft:"140px",
       justifyContent:"space-between",
        letterSpacing:"1px",
        wordSpacing:"2px"
        }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi&nbsp;vitae vitae volutpat urna,<br/> nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed<br/> malesuada nulla pharetra hash.</Typography>
        <div className='right_side_clock' style={{left:"573px"}}> 
        <img className='clock' style={{position: "absolute",
        width: "18px",
        height: "18px",
       }} src={img11} alt='clock'/>
        <Typography className='time'style={{marginLeft:"23px", fontFamily: "Poppins",marginTop:"1.5px",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "12.9px",
        lineHeight: "19px",
        }} >4:00-6:00 PM</Typography>
        </div>
        <div className='join1'>
        <Typography style={{position: "absolute",
            width: "64px",
            height: "21px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "13.9px",
            lineHeight: "21px",
            marginLeft:"11px",
            marginTop:"2px",
            color: "#FFFFFF"}}>Join Now</Typography>
        </div>
       </div>
       </Paper>
{/**4 */}
<Paper elevation={1} style={{
    position: "absolute",
width: "770px",
height: "128px",
marginLeft:"12px",
top:"615px",
background:" #FFFFFF",
border: "1.5px solid #FAFAFA",
boxSizing: "borderBox",
borderRadius: "21px"
}}>
       <div style={{position:"absolute",marginLeft:"10px"}}>
       <img style={{marginTop:"9px",width:"111px",height:"111px",borderRadius:"13px"}} src={img6} alt='Js_CSS'/>
       <Typography className='heading' style={{marginTop:"-110px",marginLeft:"140px",width:"278px",height:"38px",fontSize:"19.8px", lineHeight:"30px", color:"#333333", fontWeight:500, fontFamily:"Poppins", fontStyle:"normal"}}>Lorem ipsum sit amet</Typography>
       <Typography className='paragraph' style={{ position: "absolute"
       ,width: "200%",
       height: "53px",fontFamily: "Poppins",
       fontStyle: "normal",
       fontWeight: "normal",
       fontSize: "12px",
       lineHeight: "16px",
       color: "#666666",
       marginLeft:"140px",
       justifyContent:"space-between",
        letterSpacing:"1px",
        wordSpacing:"2px"
       }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi&nbsp;vitae vitae volutpat urna,<br/> nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed<br/> malesuada nulla pharetra hash.</Typography>
       <div className='right_side_clock' style={{left:"573px"}}> 
            <img className='clock' style={{position: "absolute",
            width: "18px",
            height: "18px",
           }} src={img11} alt='clock'/>
            <Typography className='time'style={{marginLeft:"23px", fontFamily: "Poppins",marginTop:"1.5px",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "12.9px",
            lineHeight: "19px",
            }} >4:00-6:00 PM</Typography>
            </div>
            <div className='join1'>
            <Typography style={{position: "absolute",
                width: "64px",
                height: "21px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "13.9px",
                lineHeight: "21px",
                marginLeft:"11px",
                marginTop:"2px",
                color: "#FFFFFF"}}>Join Now</Typography>
            </div>
       </div>
</Paper>
{/**5 */}
<Paper elevation={1} style={{
    position: "absolute",
width: "770px",
height: "128px",
marginLeft:"12px",
top:"785px",
background:" #FFFFFF",
border: "1.5px solid #FAFAFA",
boxSizing: "borderBox",
borderRadius: "21px"
}}>
       <div style={{position:"absolute",marginLeft:"10px"}}>
       <img style={{marginTop:"9px",width:"111px",height:"111px",borderRadius:"13px"}} src={img5} alt='C++'/>
       <Typography className='heading' style={{marginTop:"-110px",marginLeft:"140px",width:"278px",height:"38px",fontSize:"19.8px", lineHeight:"30px", color:"#333333", fontWeight:500, fontFamily:"Poppins", fontStyle:"normal"}}>Lorem ipsum sit amet</Typography>
       <Typography className='paragraph' style={{ position: "absolute"
       ,width: "200%",
       height: "53px",fontFamily: "Poppins",
       fontStyle: "normal",
       fontWeight: "normal",
       fontSize: "12px",
       lineHeight: "16px",
       color: "#666666",
       marginLeft:"140px",
       justifyContent:"space-between",
        letterSpacing:"1px",
        wordSpacing:"2px"
        }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi&nbsp;vitae vitae volutpat urna,<br/> nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed<br/> malesuada nulla pharetra hash.</Typography>
        <div className='right_side_clock' style={{left:"573px"}}> 
            <img className='clock' style={{position: "absolute",
            width: "18px",
            height: "18px",
           }} src={img11} alt='clock'/>
            <Typography className='time'style={{marginLeft:"23px", fontFamily: "Poppins",marginTop:"1.5px",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "12.9px",
            lineHeight: "19px",
            }} >4:00-6:00 PM</Typography>
            </div>
            <div className='join1'>
            <Typography style={{position: "absolute",
                width: "64px",
                height: "21px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "13.9px",
                lineHeight: "21px",
                marginLeft:"11px",
                marginTop:"2px",
                color: "#FFFFFF"}}>Join Now</Typography>
            </div>
       </div>
</Paper>
{/**6 */}
<Paper elevation={1} style={{
    position: "absolute",
width: "770px",
height: "128px",
marginLeft:"12px",
top:"950px",
background:" #FFFFFF",
border: "1.5px solid #FAFAFA",
boxSizing: "borderBox",
borderRadius: "21px"
}}>
       <div style={{position:"absolute",marginLeft:"10px"}}>
       <img style={{marginTop:"9px",width:"111px",height:"111px",borderRadius:"13px"}} src={img6} alt='Js_CSS'/>
       <Typography className='heading' style={{marginTop:"-110px",marginLeft:"140px",width:"278px",height:"38px",fontSize:"19.8px", lineHeight:"30px", color:"#333333", fontWeight:500, fontFamily:"Poppins", fontStyle:"normal"}}>Lorem ipsum sit amet</Typography>
       <Typography className='paragraph' style={{ position: "absolute"
       ,width: "200%",
       height: "53px",fontFamily: "Poppins",
       fontStyle: "normal",
       fontWeight: "normal",
       fontSize: "12px",
       lineHeight: "16px",
       color: "#666666",
       marginLeft:"140px",
       justifyContent:"space-between",
        letterSpacing:"1px",
        wordSpacing:"2px"
       }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi&nbsp;vitae vitae volutpat urna,<br/> nulla. Sit suspendisse diam mauris hendrerit viverra diam feugiat mauris. Nec sed<br/> malesuada nulla pharetra hash.</Typography>
       <div className='right_side_clock' style={{left:"573px"}}> 
            <img className='clock' style={{position: "absolute",
            width: "18px",
            height: "18px",
           }} src={img11} alt='clock'/>
            <Typography className='time'style={{marginLeft:"23px", fontFamily: "Poppins",marginTop:"1.5px",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "12.9px",
            lineHeight: "19px",
            }} >4:00-6:00 PM</Typography>
            </div>
            <div className='join1'>
            <Typography style={{position: "absolute",
                width: "64px",
                height: "21px",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "13.9px",
                lineHeight: "21px",
                marginLeft:"11px",
                marginTop:"2px",
                color: "#FFFFFF"}}>Join Now</Typography>
            </div>
       </div>
       </Paper>

        </Paper>
        <img className='design_ing' src={img21} alt='design'/>
        <img  className='footer' src={img20} alt='footer'/>
        </div>
        </>
    )
}

export default Classes
