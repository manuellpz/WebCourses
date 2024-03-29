import React, { useState, useEffect } from "react";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);

      let songRes = await helpHttp().get(songUrl);

      setLyric(songRes);

      console.log(songRes);

      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <>
      <h2>Song Search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {search && !loading && <SongDetails search={search} lyric={lyric} />}
      </article>
    </>
  );
};

export default SongSearch;
