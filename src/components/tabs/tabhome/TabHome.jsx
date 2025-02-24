import './TabHome.css';
import Subtitle from '../../GlobalComponents/Subtitle/Subtitle';
import Playlist from '../../GlobalComponents/Playlist/Playlist';
import PlaylistsConteiner from '../../GlobalComponents/PlaylistsConteiner/PlaylistsConteiner';
import CustomModal from '../../GlobalComponents/CustomModal/CustomModal';
import { useState } from 'react';


export default function TabHome({children})  {

    const [isOpenModal, setIsOpenModal] = useState(false)

    document.body.style.overflow = isOpenModal ? 'hidden' : '';

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
                <Playlist src="src\images\GlobalComponents\Playlists\1.png" playlistName="Whatever It Takes" artist="Imagne Dragons" 
                    onClick={() => setIsOpenModal(true)}
                ></Playlist>
                <CustomModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}></CustomModal>
                <Playlist src="src\images\GlobalComponents\Playlists\2.png" playlistName="Skyfall" artist="Adele"></Playlist>
                <Playlist src="src\images\GlobalComponents\Playlists\3.png" playlistName="Superman" artist="Eminiem"></Playlist>
                <Playlist src="src\images\GlobalComponents\Playlists\4.png" playlistName="Softcore" artist="The Neighberhood"></Playlist>
                <Playlist src="src\images\GlobalComponents\Playlists\5.png" playlistName="The Lonliest" artist="Måneskin"></Playlist>
                </>
            </PlaylistsConteiner>
            
        </section>
    )
}