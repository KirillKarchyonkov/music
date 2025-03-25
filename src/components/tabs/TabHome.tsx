import Subtitle from '../GlobalComponents/Subtitle';
import Playlist from '../GlobalComponents/Playlist';
import PlaylistsConteiner from '../GlobalComponents/PlaylistsConteiner';
import CustomModal from '../GlobalComponents/CustomModal/CustomModal';
import { /*useEffect,*/ useState } from 'react';
import Whatever from '../../images/GlobalComponents/Playlists/1.png'; 
import Skyfall from '../../images/GlobalComponents/Playlists/2.png'; 
import Superman from '../../images/GlobalComponents/Playlists/3.png'; 
import Softcore from '../../images/GlobalComponents/Playlists/4.png'; 
import Lonliest from '../../images/GlobalComponents/Playlists/5.png';
import mainBg from '../../images/tabs/home/main.png';

{/*const CLIENT_ID = "2f41bd8bc5a348209ae24d4440062751";
const CLIENT_SECRET = "54a1c59c62a8459b90e668cfce518c96";*/}


export default function TabHome()  {

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
        <section className="w-full h-full pr-16">
            <section className="w-full h-auto pt-12 pl-6.25 relative">
                <div style={{backgroundImage: `url(${mainBg})`}} className="bg-no-repeat bg-center bg-cover w-full pt-[56.25%] origin-top-left bg-gradient-to-r from-black/0 to-black/80 rounded-[25px]">
                    <div className="absolute top-[22%] left-[6%]">
                        <h1 className="text-white leading-[1.5em] text-justify w-85 h-auto font-extrabold text-[40px]">All the <span className='text-[#EE10B0]'>Best Songs</span> in One Place</h1>
                        <p className="text-white leading-[1.5em] text-justify font-light text-xs w-83 h-19 mt-10">
                            On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!
                        </p>
                        <button className="w-[147px] h-10 bg-[#EE10B0] rounded-sm font-medium text-base text-center text-white mt-8">Create Playlist</button>
                    </div>
                </div>
            </section>
            <Subtitle text={" Songs"}>Weekly Top</Subtitle>
            <PlaylistsConteiner>
                <>
                {/*<Playlist src={Whatever} playlistName={albumData.tracks?.[0].name} artist="Imagne Dragons" 
                    onClick={() => setIsOpenModal(true)}
                ></Playlist>*/}
                <Playlist src={Whatever} playlistName="Whatever It Takes" artist="Imagne Dragons" onClick={() => setIsOpenModal(true)}></Playlist>
                <CustomModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}></CustomModal>
                <Playlist src={Skyfall} playlistName="Skyfall" artist="Adele" onClick={() => setIsOpenModal(true)}></Playlist>
                <Playlist src={Superman} playlistName="Superman" artist="Eminiem" onClick={() => setIsOpenModal(true)}></Playlist>
                <Playlist src={Softcore} playlistName="Softcore" artist="The Neighberhood" onClick={() => setIsOpenModal(true)}></Playlist>
                <Playlist src={Softcore} playlistName="Softcore" artist="The Neighberhood" onClick={() => setIsOpenModal(true)}></Playlist>
                <Playlist src={Lonliest} playlistName="The Lonliest" artist="Måneskin" onClick={() => setIsOpenModal(true)}></Playlist>
                </>
            </PlaylistsConteiner>
            
        </section>
    )
}