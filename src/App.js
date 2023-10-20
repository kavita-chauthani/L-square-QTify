import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setFilteredDataValue] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    console.log(value);
    generateSongsData(value);
  }, [value]);

  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
    } catch (err) {
      console.error(err);
    }
  };

  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValue(res);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredData = (val) => {
    setFilteredDataValue(val);
  };

  useEffect(() => {
    generateData();
    generateAllSongsData();
  }, []);

  return (
    <div>
      <Navbar data={data} />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section
          data={data}
          type="album"
          title="Top Albums"
          filteredDataValues={data}
        />
        <Section
          data={data}
          type="album"
          title="New Albums"
          filteredDataValues={data}
        />
        <Section
          data={songsData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleToggle={handleToggle}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default App;
