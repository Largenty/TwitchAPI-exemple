import React, {useState, useEffect} from 'react';
import api from '../../api';

const SideBar = () => {

  const [topStreams, setTopStreams] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      
      const result = await api.get('https://api.twitch.tv/helix/streams')
      let dataArray = result.data.data;
      console.log(dataArray);

      let gameIDS = dataArray.map(stream => {
        return stream.game_id;
      })

      let userIDS = dataArray.map(stream => {
        return stream.user_id;
      })

      console.log(gameIDS, userIDS);
      


      
    
    }

    fetchData();
  }, [])

  return (
    <div className="sidebar">
      <h2 className="titreSidebar">Chaînes recommandées</h2>
      <ul className="listeStream">
    
      </ul>
    </div>
  )
}

export default SideBar;