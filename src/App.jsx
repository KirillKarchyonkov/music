import AsideSectionTitle from "./components/aside/AsideSectionTitle"
import AsideSectionButton from "./components/aside/AsideSectionButton/AsideSectionButton"
import TabHome from "./components/tabs/TabHome/TabHome"
import TabAlbums from "./components/tabs/TabAlbums"
import TabDiscover from "./components/tabs/TabDiscover"
import TabArtists from "./components/tabs/TabArtists"
import TabFavorites from "./components/tabs/TabFavorites"
import TabPlaylists from "./components/tabs/TabPlaylists"
import Callback from "./components/tabs/TabPlaylists"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Callback from "./components/Callback/Callback"

function App() {

  
  return (
    <>
    <Router>

      <Route path="/callback" element={<Callback />} />

      <aside className="aside">

        <h1 className="aside__title">Melodies</h1>

        <section>

          <AsideSectionTitle>Menu</AsideSectionTitle>

          <AsideSectionButton
            to="/"
            src="./src/images/aside/home.svg" 
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Home
          </AsideSectionButton>

          <AsideSectionButton
            to="/discover"
            src="./src/images/aside/discover.svg"
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Discover
          </AsideSectionButton>

          <AsideSectionButton
            to="/albums"
            src="./src/images/aside/albums.svg"
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Albums
          </AsideSectionButton>

          <AsideSectionButton
            to="/artists" 
            src="./src/images/aside/artists.svg"
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Artists
          </AsideSectionButton>
        </section>

        <section>

          <AsideSectionTitle>Playlist and favorite</AsideSectionTitle>

          <AsideSectionButton
            to="/favorites"
            src="./src/images/aside/favorites.svg"
            className={({ isActive }) => `section-item${isActive ? " section-item-active" : ""}`}
            >Your favorites
          </AsideSectionButton>

          <AsideSectionButton 
            to="/playlists"
            src="./src/images/aside/playlists.svg"
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

        </Routes>
      </main>

    </Router>
    </>
  )
}

export default App
