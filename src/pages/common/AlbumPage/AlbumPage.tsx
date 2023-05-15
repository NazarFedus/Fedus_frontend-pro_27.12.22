import { useLoaderData } from "react-router-dom";
import './styles.css'

const AlbumPage = () => {
  const data = useLoaderData();
  return (
    <div className="album_page">
      <h1 className="title">{data.album.title}</h1>
      <img className="img" src={data.photo.thumbnailUrl} alt="photo" />
    </div>
  );
};

export default AlbumPage;
