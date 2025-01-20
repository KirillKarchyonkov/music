import AsideSectionTitle from "./components/aside/AsideSectionTitle"
import AsideSectionButton from "./components/aside/AsideSectionButton/AsideSectionButton"
import { useState } from "react"
import TabHome from "./components/tabs/TabHome"
import TabAlbums from "./components/tabs/TabAlbums"
import TabDiscover from "./components/tabs/TabDiscover"
import TabArtists from "./components/tabs/TabArtists"
import TabFavorites from "./components/tabs/TabFavorites"
import TabPlaylists from "./components/tabs/TabPlaylists"



function App() {

  const [asideSectionButtonActive, setAsideSectionButtonActive] = useState('home')

  function handleClick(type) {

    setAsideSectionButtonActive(type)

  }

  
  return (
    <>
      <aside className="aside">

        <h1 className="aside__title">Melodies</h1>

        <section>

          <AsideSectionTitle>Menu</AsideSectionTitle>

          <AsideSectionButton 
            src="./src/images/aside/home.svg" 
            className={`section-item ${asideSectionButtonActive ===  'home' ? ' section-item-active' : ''}`}
            onClick={() => handleClick('home')}
            >Home
          </AsideSectionButton>

          <AsideSectionButton
            src="./src/images/aside/discover.svg"
            className={`section-item ${asideSectionButtonActive === 'discover'? ' section-item-active' : ''}`}
            onClick={() => handleClick('discover')}
            >Discover
          </AsideSectionButton>

          <AsideSectionButton 
            src="./src/images/aside/albums.svg"
            className={`section-item ${asideSectionButtonActive === 'albums'? ' section-item-active' : ''}`}
            onClick={() => handleClick('albums')}
            >Albums
          </AsideSectionButton>

          <AsideSectionButton 
            src="./src/images/aside/artists.svg"
            className={`section-item ${asideSectionButtonActive === 'artists'? ' section-item-active' : ''}`}
            onClick={() => handleClick('artists')}
            >Artists
          </AsideSectionButton>
        </section>

        <section>

          <AsideSectionTitle>Playlist and favorite</AsideSectionTitle>

          <AsideSectionButton 
            src="./src/images/aside/favorites.svg"
            className={`section-item ${asideSectionButtonActive === 'favorites' ? ' section-item-active' : ''}`}
            onClick={() => handleClick('favorites')}
            >Your favorites
          </AsideSectionButton>

          <AsideSectionButton 
            src="./src/images/aside/playlists.svg"
            className={`section-item ${asideSectionButtonActive === 'playlists' ? ' section-item-active' : ''}`}
            onClick={() => handleClick('playlists')}
            >Your playlists
          </AsideSectionButton>

        </section>
  
      </aside>

      <main className="main">

          {asideSectionButtonActive === 'home' && <TabHome>home</TabHome>}
          {asideSectionButtonActive === 'discover' && <TabDiscover>discover</TabDiscover>}
          {asideSectionButtonActive === 'albums' && <TabAlbums>albums</TabAlbums>}
          {asideSectionButtonActive === 'artists' && <TabArtists>artists</TabArtists>}
          {asideSectionButtonActive === 'favorites' && <TabFavorites>favorites</TabFavorites>}
          {asideSectionButtonActive === 'playlists' && <TabPlaylists>playlists</TabPlaylists>}

      </main>
    </>
  )
}

export default App
