import { Route, Routes } from "react-router-dom";
import Layout from './components/Layout'
import AllKitties from './components/page/AllKitties'
import FavoriteKitties from './components/page/FavoriteKitties'
import NotFoundPage from './components/page/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllKitties />} />
        <Route path="favoritekitties" element={<FavoriteKitties />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
