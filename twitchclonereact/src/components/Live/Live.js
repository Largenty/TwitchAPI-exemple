import React from 'react';
import ReactTwitchEmbebVideo from 'react-twitch-embed-video'
import {useParams} from 'react-router-dom';

const Live = () => {

  let {slug} = useParams();

  return (
    <div className="containerDecale">
      <ReactTwitchEmbebVideo height="754" width="100%" channel={slug}/>
    </div>
      
  )
}

export default Live;