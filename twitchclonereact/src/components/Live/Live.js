import React, {useState, useEffect} from 'react';
import ReactTwitchEmbebVideo from 'react-twitch-embed-video'
import {useParams} from 'react-router-dom';
import api from '../../api'

const Live = () => {

  let {slug} = useParams();

  const [infoStream, setInfoStream] = useState([]);
  const [infoGame, setInfoGame] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`https://api.twitch.tv/helix/streams?user_login=${slug}`)

      let gameID =  result.data.data.map(gameid => {
        return gameid.game_id;
      })

      const resultNomGame = await api.get(`https://api.twitch.tv/helix/games?id=${gameID}`)

      let nomJeu = resultNomGame.data.data.map(gameName => {
        return gameName.name;
      })

      setInfoGame(nomJeu);
      setInfoStream(result.data.data[0])

    }
    fetchData()
  }, [])



  return (
    <div className="containerDecale">
      <ReactTwitchEmbebVideo height="754" width="100%" channel={slug}/>
      <div className="contInfo">
        <div className="titreStream">{infoStream.title}</div>
        <div className="viewer">Viewers : {infoStream.viewer_count}</div>
        <div className="infoGame">Streamer : {infoStream.user_name}, &nbsp; Langue : {infoStream.language}</div>
        <div className="nomJeu">Jeu : {infoGame}</div>
      </div>
    </div>
      
  )
}

export default Live;