
import React,{useState, useEffect} from 'react';

const blinkWordMapping = [
    "young startups",
    "bootstrappers",
    "small business"
]
const BlinkWord = () => {
    const [blinkWord, setBlinkWord] = useState("young startups")
    useEffect(()=>{
        var index=1;
       const interval= setInterval(()=>{
        if(index>2){index=0;} 
            setBlinkWord(blinkWordMapping[index])
            index++;
        },3000)
        return (()=>{
            clearTimeout(interval)
        })
    },[])
  return <p className="blink">{blinkWord}</p>;
};

export default BlinkWord;
