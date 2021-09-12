import { useEffect, useState } from "react"
import "../css/Progress.css"

interface props{
  Value: number,
  Max: number
  Color?: string,
}
const Progress = (props:props) => {
  const [porcentValue, setPorcentValue] = useState(0);

  useEffect(()=>{
    let calc = (props.Value*100)/props.Max;
    setPorcentValue(calc);
  })
    
  const styleTrack = {
    width: `${porcentValue}%`,
    background: `${props.Color}`
  }
  
  return(
    <div id="progress">
      <div id="progress_track" style={styleTrack}/>
    </div>
  )
}

export default Progress;