import './TabHome.css';
import Subtitle from '../../GlobalComponents/Subtitle/Subtitle';
import Playlist from '../../GlobalComponents/Playlist/Playlist';
import PlaylistsConteiner from '../../GlobalComponents/PlaylistsConteiner/PlaylistsConteiner';
import CustomModal from '../../GlobalComponents/CustomModal/CustomModal';
import { /*useEffect,*/ useState } from 'react';
import Whatever from '../../../images/GlobalComponents/Playlists/1.png'; 
import Skyfall from '../../../images/GlobalComponents/Playlists/2.png'; 
import Superman from '../../../images/GlobalComponents/Playlists/3.png'; 
import Softcore from '../../../images/GlobalComponents/Playlists/4.png'; 
import Lonliest from '../../../images/GlobalComponents/Playlists/5.png'; 

{/*const CLIENT_ID = "2f41bd8bc5a348209ae24d4440062751";
const CLIENT_SECRET = "54a1c59c62a8459b90e668cfce518c96";*/}


export default function TabHome({children})  {

    const [isOpenModal, setIsOpenModal] = useState(false)

    document.body.style.overflow = isOpenModal ? 'hidden' : '';

    {/*const [accessToken, setAccessToken] = useState('');
    const [albumData, setAlbumData] = useState([]);

    useEffect (() => { 
    
        var authParameters = { 
        method: 'POST', 
        headers: { 
        'Content-Type': 'application/x-www-form-urlencoded' 
        }, 
        body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET 
        } 
        fetch('https://accounts.spotify.com/api/token', authParameters) 
        .then(result => result.json()) 
        .then(data => setAccessToken(data.access_token)) 

        }, [])

        async function search(){ 
        
            var artistParameters = { 
            method: 'GET', 
            headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + accessToken 
            } 
        } 
        
        await fetch('https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02/top-tracks?market=DE', artistParameters) 
        .then(response => response.json()) 
        .then (data => setAlbumData(data)) 

        }

    useEffect (() => { 
    
        if (!accessToken) return; 
        search()
         }, [accessToken])
        
*/}

    return (
        <section className="home">
            <div className="home__background-image">
                <h1 className="home__title">All the <span>Best Songs</span> in One Place</h1>
                <p className="home__info">
                    On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!
                </p>
                <button className="home__create-playlist">Create Playlist</button>
            </div>
            <Subtitle text={" Songs"}>Weekly Top</Subtitle>
            <PlaylistsConteiner>
                <>
                {/*<Playlist src={Whatever} playlistName={albumData.tracks?.[0].name} artist="Imagne Dragons" 
                    onClick={() => setIsOpenModal(true)}
                ></Playlist>*/}
                <Playlist src={Whatever} playlistName="Whatever It Takes" artist="Imagne Dragons" onClick={() => setIsOpenModal(true)}></Playlist>
                <CustomModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}></CustomModal>
                <Playlist src={Skyfall} playlistName="Skyfall" artist="Adele"></Playlist>
                <Playlist src={Superman} playlistName="Superman" artist="Eminiem"></Playlist>
                <Playlist src={Softcore} playlistName="Softcore" artist="The Neighberhood"></Playlist>
                <Playlist src={Softcore} playlistName="Softcore" artist="The Neighberhood"></Playlist>
                <Playlist src={Lonliest} playlistName="The Lonliest" artist="Måneskin"></Playlist>
                </>
            </PlaylistsConteiner>
            
        </section>
    )
}