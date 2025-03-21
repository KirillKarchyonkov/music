//import './Playlist.css';

export default function Playlist({src, playlistName, artist, onClick}) {

    return (
        <section className="playlist font-bold text-[32px] bg-[#1F1F1F] w-[175px] h-[214px] pt-1 pr-[15px] pl-[15px] rounded-[10px]">
            <button className='playlist__modal bg-transparent h-[134px] w-[145px] transition-all delay-200 ease-in-out hover:opacity-50' onClick={onClick}>
                <img className='block' src={src} alt="#" />
            </button>
            <h3 className='playlist__name font-medium text-base text-white mt-2'>{playlistName}</h3>
            <h4 className='playlist__artist font-light text-xs text-white/80 mt-[5px]'>{artist}</h4>
        </section>
    )
}
