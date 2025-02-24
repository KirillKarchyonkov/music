import './Playlist.css';

export default function Playlist({src, playlistName, artist, onClick}) {

    return (
        <section className="playlist">
            <button className='playlist__modal' onClick={onClick}><img src={src} alt="#" /></button>
            <h3 className='playlist__name'>{playlistName}</h3>
            <h4 className='playlist__artist'>{artist}</h4>
        </section>
    )
}
