import React, { FC, useState } from "react";
// import "./index.css";
import { DownOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { IAlbum } from "../../../types/AlbumTypes";
import { Link } from "react-router-dom";
import { mutateAlbumsData } from "../../../Helpers/dataMutations";

const DropDown: FC<IAlbum[]> = ({ albums }) => {
     const [isAlbumListVisible, setAlbumListVisible] = useState<boolean>(false);
     console.log(albums)
     mutateAlbumsData(albums)
     const data = mutateAlbumsData(albums)
     console.log(data)
     const items: MenuProps['items'] = mutateAlbumsData(albums)

     //    console.log(items)

     const showAlbums = (e) => {
          e.preventDefault()
          setAlbumListVisible(!isAlbumListVisible);
     }

  return (
    <Dropdown
      overlay={
        <Menu>
          {items.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
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
