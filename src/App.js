import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums } from "./api/api";
import { fetchNewAlbums } from "./api/api1";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    setTopAlbumsData(data);
  };

  const generateNewAlbumsData = async () => {
    const data = await fetchNewAlbums();
    console.log(data);
    setNewAlbumsData(data);
  };

  useEffect(() => {
    generateTopAlbumsData();
  }, []);

  useEffect(() => {
    generateNewAlbumsData();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
        <Section data={newAlbumsData} type="album" title="New Albums" />
      </div>
    </div>
  );
}

export default App;
