import React, { FC, useEffect, useState } from "react";
import { Card, Avatar } from "antd";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import { IAlbum } from "../../../types/AlbumTypes";
import { IArtistProps } from "./ArtistCardTypes";
import "./styles.css";
import DropDown from "../Dropdown/DropDown";

const { Meta } = Card;

const ArtistCard: FC<IArtistProps> = ({ artist }) => {
  const [currentAlbums, setCurrentAlbums] = useState<IAlbum[]>([]);

  const showAlbums = async () => {
    try {
      const response = await axios.get("http://localhost:3000/albums");
      const albums = response.data.filter((album: IAlbum) => album.userId === artist.id);
      setCurrentAlbums(albums);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
     showAlbums()
  }, [])

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <DropDown albums={currentAlbums} />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
        title={artist.name}
        description="Artist"
      />
    </Card>
  );
};

export default ArtistCard;
