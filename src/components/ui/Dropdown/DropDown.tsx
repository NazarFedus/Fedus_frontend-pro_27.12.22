import React, { FC, useState } from "react";
import "./styles.css";
import { Menu, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { IAlbum } from "../../../types/AlbumTypes";
import { Link } from "react-router-dom";
import { mutateAlbumsData } from "../../../Helpers/dataMutations";

const DropDown: FC<IAlbum[]|[]> = ({ albums }) => {
     const [isAlbumListVisible, setAlbumListVisible] = useState<boolean>(false);

     const items: MenuProps['items'] = mutateAlbumsData(albums)

     const showAlbums = (e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault()
          setAlbumListVisible(!isAlbumListVisible);
     }

  return (
    <Dropdown
      overlay={
        <Menu>
          {items.map((item) => ( item !== null ?
            <Link to={`/album/${item.key}`}><Menu.Item key={item.key} className="tab">{item.label}</Menu.Item></Link> : null
          ))}
        </Menu>
      }
      visible={isAlbumListVisible}
      onVisibleChange={setAlbumListVisible}
      trigger={["click"]}
    >
      <div onClick={showAlbums}>
        <Space>
          <>
            Albums
          </>
        </Space>
      </div>
    </Dropdown>
  );
};

export default DropDown;
