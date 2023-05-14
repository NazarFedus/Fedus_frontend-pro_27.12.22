import React, { FC, useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Dropdown } from "antd";
import { IArtistProps } from "./ArtistCardTypes";

import down_arrow from "../../../icons/down-arrow.svg";
import top_arrow from "../../../icons/top-arrow.svg";
import axios from "axios";
import AlbumCard from "../AlbumCard/AlbumCard";
import { IAlbum } from "../../../types/AlbumTypes";

const { Meta } = Card;

const ArtistCard: FC<IArtistProps> = ({ artist }) => {
  const [isShownAlbums, setIsShownAlbums] = useState<boolean>(false);
  const [currentAlbums, setCurrentAlbums] = useState<IAlbum[]>([]);

  console.log(artist);

  const showAlbums = async () => {
    setIsShownAlbums((prev) => !prev);
    try {
      const albums = await axios.get("http://localhost:3000/albums");
      setCurrentAlbums(
        albums.data.filter((album: IAlbum) => album.userId === artist.id)
      );
    } catch (e) {
      console.log(e);
    }
  };

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
     //    <button onClick={showAlbums} className="btn-action">
     //      {!isShownAlbums && (
     //        <img
     //          style={{ width: "18px", height: "18px", margin: "0px" }}
     //          src={down_arrow}
     //          alt="arrow-more"
     //        />
     //      )}
     //      {isShownAlbums && (
          //   <>
          //     <img
          //       style={{ width: "15px", height: "15px", margin: "0px" }}
          //       src={top_arrow}
          //       alt="arrow-more"
          //     />
          //     <div>
          //       {currentAlbums.map((album: IAlbum) => (
          //         <AlbumCard key={album.id} title={album.title} />
          //       ))}
          //     </div>
          //   </>
          <Dropdown albums={currentAlbums} />
          // )}
     //    </button>,
     //  ]}
    >
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title={artist.name}
        description="Artist"
      />
    </Card>
  );
};

export default ArtistCard;
