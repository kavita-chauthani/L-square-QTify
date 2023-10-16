import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import { fetchTopAlbums } from "./api/api";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    setTopAlbumsData(data);
  };

  useEffect(() => {
    generateTopAlbumsData();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      {topAlbumsData.map((item) => {
        return <Card data={item} type="album" />;
      })}
    </>
  );
}

export default App;
