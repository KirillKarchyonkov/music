import AsideSectionTitle from "./components/aside/AsideSectionTitle"
import AsideSectionButton from "./components/aside/AsideSectionButton/AsideSectionButton"
import TabHome from "./components/tabs/TabHome/TabHome"
import TabAlbums from "./components/tabs/TabAlbums"
import TabDiscover from "./components/tabs/TabDiscover"
import TabArtists from "./components/tabs/TabArtists"
import TabFavorites from "./components/tabs/TabFavorites"
import TabPlaylists from "./components/tabs/TabPlaylists"
import Callback from "./components/tabs/TabPlaylists"
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

      <aside className="aside">

        <h1 className="aside__title">Melodies</h1>

        <section>

          <AsideSectionTitle>Menu</AsideSectionTitle>

          <AsideSectionButton
            to="/"
            src={home}
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Home
          </AsideSectionButton>

          <AsideSectionButton
            to="/discover"
            src={discover}
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Discover
          </AsideSectionButton>

          <AsideSectionButton
            to="/albums"
            src={albums}
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Albums
          </AsideSectionButton>

          <AsideSectionButton
            to="/artists" 
            src={artists}
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Artists
          </AsideSectionButton>
        </section>

        <section>

          <AsideSectionTitle>Playlist and favorite</AsideSectionTitle>

          <AsideSectionButton
            to="/favorites"
            src={favorites}
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Your favorites
          </AsideSectionButton>

          <AsideSectionButton 
            to="/playlists"
            src={playlists}
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Your playlists
          </AsideSectionButton>

        </section>
  
      </aside>

      <main className="main">
        <Routes>

          <Route path="/" element={<TabHome>home</TabHome>} />
          <Route path="/discover" element={<TabDiscover>discover</TabDiscover>} />
          <Route path="/albums" element={<TabAlbums>albums</TabAlbums>} />
          <Route path="/artists" element={<TabArtists>artists</TabArtists>} />
          <Route path="/favorites" element={<TabFavorites>favorites</TabFavorites>} />
          <Route path="/playlists" element={<TabPlaylists>playlists</TabPlaylists>} />
          <Route path="/callback" element={<Callback />} />

        </Routes>
      </main>

    </Router>
    </>
  )
}

export default App
