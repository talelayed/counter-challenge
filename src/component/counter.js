import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import RemoveIcon from '@mui/icons-material/Remove';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  export default class Counter extends React.Component {
      state={
          result:1
      }
      plus=()=>this.setState({result:(this.state.result+1)})
      moins=()=>{
          if(this.state.result>1){
            this.setState({result:(this.state.result-1)})
          }
     }
      
render(){
    return (
        <Card sx={{ width:"30%",position:"absolute",top:"27%",left:"35%",height:"250px",backgroundColor:"rgba(255, 255, 255, 0.267)" }}>
            <h1 style={{fontFamily:" Verdana",color:"rgba(141, 34, 141, 0.842)",marginLeft:"1%"}}>THE COUNTER</h1>
          <CardContent style={{display :"flex",justifyContent:"space-around",marginTop:"10%"}}>
          <a href='#' style={{marginTop:"3%"}} onClick={this.plus}><AddIcon style={{border:"1px solid purple",borderRadius:"100%",marginTop:"3%"}}/></a>
            <TextField label="Result" color="secondary" focused value={this.state.result}/>
            <a href='#' style={{marginTop:"3%"}} onClick={this.moins}><RemoveIcon style={{border:"1px solid purple",borderRadius:"100%"}}/></a>
          </CardContent>
        </Card>
      );
}
  }