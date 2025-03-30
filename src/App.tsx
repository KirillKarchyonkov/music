import AsideSectionTitle from "./components/aside/AsideSectionTitle"
import AsideSectionButton from "./components/aside/AsideSectionButton"
import TabHome from "./components/tabs/TabHome"
import TabAlbums from "./components/tabs/TabAlbums"
import TabDiscover from "./components/tabs/TabDiscover"
import TabArtists from "./components/tabs/TabArtists"
import TabFavorites from "./components/tabs/TabFavorites"
import TabPlaylists from "./components/tabs/TabPlaylists"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import home from './images/aside/home.svg'; 
import discover from './images/aside/discover.svg';
import albums from './images/aside/albums.svg';
import artists from './images/aside/artists.svg';
import favorites from './images/aside/favorites.svg';
import playlists from './images/aside/playlists.svg';


function App() {

    
  return (
    <>
    <Router basename="/music">

      <aside className="border-r-2 border-[#EE10B0] shadow-[8px_0_24px_0_rgba(238,16,176,0.15)] pt-12 pr-8 pl-16 grid-area-[1/1/1/1]">

        <h1 className="bg-[linear-gradient(91deg,#ee10b0_0%,rgba(14,158,239,0.92)_100%)] bg-clip-text text-transparent font-bold text-[32px] h-[50px] w-[174px] pb-[17px]">Melodies</h1>

        <section>

          <AsideSectionTitle>Menu</AsideSectionTitle>

          <AsideSectionButton
            to="/"
            src={home}
            >Home
          </AsideSectionButton>

          <AsideSectionButton
            to="/discover"
            src={discover}
            >Discover
          </AsideSectionButton>

          <AsideSectionButton
            to="/albums"
            src={albums}
            >Albums
          </AsideSectionButton>

          <AsideSectionButton
            to="/artists" 
            src={artists}
            >Artists
          </AsideSectionButton>
        </section>

        <section>

          <AsideSectionTitle>Playlist and favorite</AsideSectionTitle>

          <AsideSectionButton
            to="/favorites"
            src={favorites}
            >Your favorites
          </AsideSectionButton>

          <AsideSectionButton 
            to="/playlists"
            src={playlists}
            >Your playlists
          </AsideSectionButton>

        </section>
  
      </aside>

      <main className="grid-area-[1/2/1/3] h-full">
        <Routes>

          <Route path="/" element={<TabHome></TabHome>} />
          <Route path="/discover" element={<TabDiscover>discover</TabDiscover>} />
          <Route path="/albums" element={<TabAlbums>albums</TabAlbums>} />
          <Route path="/artists" element={<TabArtists>artists</TabArtists>} />
          <Route path="/favorites" element={<TabFavorites>favorites</TabFavorites>} />
          <Route path="/playlists" element={<TabPlaylists>playlists</TabPlaylists>} />

        </Routes>
      </main>

    </Router>
    </>
  )
}

export default App
