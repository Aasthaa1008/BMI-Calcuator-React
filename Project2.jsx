//BMI Calculator

import React, { useMemo, useState } from "react";

const Project2=()=>{
    const default_weight=50;
    const default_height=150;
    const [height,setHeight]=useState(default_height);
    const [weight,setWeight]=useState(default_weight);
    const onHeight=(event)=>{
        setHeight(event.target.value)
    }
    const onWeight=(event)=>{
        setWeight(event.target.value)
    }
    const Output=useMemo(()=>{
        const new_height=height/100;
        return(weight/(new_height*new_height)).toFixed(1);
    },[weight,height]);
    
    return(
        <>
            <div className="main_div">
                <div className="bmi">
                    <h1>Calculate Your Body Mass Index</h1>
                    <p className="weight">Enter Your Weight={weight}</p>
                    <input type="range" step="1"min="40" max="220" onChange={onWeight}></input>
                    <p className="height">Enter Your Height={height}</p>
                    <input type="range"  min="140" max="220" onChange={onHeight} ></input>
                    <p className="output">The Output is {Output}</p>
                    {/*<p>The res={Output<18.5?"Underweight":"Healthy Weight"}</p>
                    <p>The res={Output<25.0 || Output>29.9?"Overweight":"Obesity"}</p>
                    <p>{display_result}</p>*/}
                </div>
            </div>
        </>
    );
}

export default Project2;