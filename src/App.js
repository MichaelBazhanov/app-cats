import { Route, Routes } from "react-router-dom";
import Layout from './Layout'
import AllKitties from './components/page/AllKitties'
import FavouriteKitties from './components/page/FavoriteKitties'
import NotFoundPage from './components/page/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllKitties />} />
        <Route path="favouritekitties" element={<FavouriteKitties />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
