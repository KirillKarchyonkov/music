interface PlaylistProps {
    src: string;
    playlistName: string;
    artist: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Playlist({src, playlistName, artist, onClick}: PlaylistProps) {

    return (
        <section className="font-bold text-[32px] bg-[#1F1F1F] w-[175px] h-[214px] pt-1 pr-[15px] pl-[15px] rounded-[10px]">
            <button className='pbg-transparent h-[134px] w-[145px] transition-all delay-200 ease-in-out hover:opacity-50' onClick={onClick}>
                <img className='block' src={src} alt="#" />
            </button>
            <h3 className='font-medium text-base text-white mt-2'>{playlistName}</h3>
            <h4 className='font-light text-xs text-white opacity-80 mt-[5px]'>{artist}</h4>
        </section>
    )
}
