import React from "react";
import { TikTok } from "react-tiktok";

function Video(props){

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction, props);
        props.triggerNextStep({
            value: direction,
            trigger: `${props.step.id}-${direction}`
        })
      }

    return (
        <div className="video">
            <TikTok url={props.url} />
        </div>
    )
}

export default Video;