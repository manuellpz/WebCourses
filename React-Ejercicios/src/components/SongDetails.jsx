import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ search, lyric }) => {
  if (!lyric) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message msg={`Error No Existe La Canción: ${search.song}`} bgColor="#dc3545" />
      ) : (
        <SongLyric />
      )}
    </>
  );
};

export default SongDetails;
