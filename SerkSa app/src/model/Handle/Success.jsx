import { useState } from "react";
import "./Check.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function SuccessModal({status,message,colorStatus}){
    return(
            <>
                <div className ="boxI">
                    <div id ="progress" style ={{color: {colorStatus}}}>
                        <Progress status={status}/>
                    </div>
                    <span>{message}</span>
                </div>
            </>
    )
}




const Progress=({status})=>{
    return(
            <>
                <CircularProgressbar
                        value={status}
                        text={`${status}%`}
                        styles={{
                            // Customize the root svg element
                        root: {},
                            // Customize the path, i.e. the "completed progress"
                        path: {
                            // Path color
                        stroke: `green`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 1s ease 0s',
                        // Rotate the path
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        },
                        // Customize the circle behind the path, i.e. the "total progress"
                        trail: {
                        // Trail color
                        stroke: '#d6d6d6',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Rotate the trail
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                        },
                        // Customize the text
                        text: {
                        // Text color
                        fill: 'black',
                        // Text size
                        fontSize: '25px',
                        },
                        // Customize background - only used when the `background` prop is true
                        background: {
                        fill: 'red',
                        },
                    }}/>
            </>
    )
}