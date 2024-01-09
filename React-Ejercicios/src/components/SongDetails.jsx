import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ search, lyric }) => {
  if (!lyric) return null;

  return (
    <div>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message msg={`Error No Existe La Canción: ${search.song}`} bgColor="#dc3545" />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics}/>
      )}
    </div>
  );
};

export default SongDetails;
