import React, {useState, useEffect} from 'react';
import api from '../../api';

const SideBar = () => {

  const [topStreams, setTopStreams] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      
      const result = await api.get('https://api.twitch.tv/helix/streams')
      let dataArray = result.data.data;
      // console.log(dataArray);

      let gameIDS = dataArray.map(stream => {
        return stream.game_id;
      })

      let userIDS = dataArray.map(stream => {
        return stream.user_id;
      })

      // console.log(gameIDS, userIDS);

      // Create URLS perso

      let baseUrlGames = "https://api.twitch.tv/helix/games?";
      let baseUrlUsers = "https://api.twitch.tv/helix/users?";

      let queryParamsGame = "";
      let queryParamsUsers = "";

      gameIDS.map( id => {
        return (queryParamsGame = queryParamsGame + `id=${id}&`)
      })

      userIDS.map( id => {
        return (queryParamsUsers = queryParamsUsers + `id=${id}&`)
      })

      //url final

      let urlFinalGames = baseUrlGames + queryParamsGame;
      let urlFinalUsers = baseUrlUsers + queryParamsUsers;

      // console.log(urlFinalGames, urlFinalUsers)

      // call
      let gamesNames = await api.get(urlFinalGames);
      let getUsers = await api.get(urlFinalUsers);

      let gamesNameArray = gamesNames.data.data;
      let arrayUsers = getUsers.data.data;
      // console.log(gamesNameArray, arrayUsers);

      // create final []
      let finalArray = dataArray.map( stream => {
        stream.gameName = "";
        stream.truePic = "";
        stream.login= "";

        gamesNameArray.forEach(name => {
          arrayUsers.forEach( user => {
            if(stream.user_id === user.id && stream.game_id === name.id) {

              stream.truePic = user.profile_image_url;
              stream.gameName = name.name;
              stream.login = user.login;

            }
          })
        })
        return stream;
      })

      setTopStreams(finalArray.slice(0, 8));    
    }

    fetchData();
  }, [])

  console.log(topStreams);
  

  return (
    <div className="sidebar">
      <h2 className="titreSidebar">Chaînes recommandées</h2>
      <ul className="listeStream">
    
      </ul>
    </div>
  )
}

export default SideBar;