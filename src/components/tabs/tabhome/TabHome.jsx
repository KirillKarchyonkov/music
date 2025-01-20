import './TabHome.css';

export default function TabHome({children})  {

    return (
        <section className="home">
            <div className="home__background-image">
                <h1 className="home__title">All the <span>Best Songs</span> in One Place</h1>
                <p className="home__info">
                    On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!
                </p>
                <button className="home__create-playlist">Create Playlist</button>
            </div>
        </section>
    )
}