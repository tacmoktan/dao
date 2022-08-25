import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import avatar1 from "assets/1.svg";
import avatar2 from "assets/2.svg";
import avatar3 from "assets/3.svg";
import avatar4 from "assets/4.svg";
import avatar5 from "assets/5.svg";
import avatar6 from "assets/6.svg";
import avatar7 from "assets/7.svg";
import avatar8 from "assets/8.svg";
import avatar9 from "assets/9.svg";

import * as S from "./Styles";

export const Row = () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  const images = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    undefined,
    avatar7,
    avatar8,
    avatar9,
  ];
  return (
    <S.CustomRow>
      <h5>Designer</h5>
      <S.CustomAvatarGroup>
        <Avatar.Group
          maxCount={9}
          maxStyle={{ color: "#FFFFFF", backgroundColor: "#2E2D3A" }}
        >
          {images.map((image: string) => (
            <Avatar size={38} src={image} icon={<UserOutlined />} />
          ))}
        </Avatar.Group>
      </S.CustomAvatarGroup>
      <div>
        <S.CustomSwitch defaultChecked onChange={onChange} />
      </div>
      <div>
        <S.CustomSwitch defaultChecked onChange={onChange} />
      </div>
      <div>
        <S.CustomSwitch defaultChecked onChange={onChange} />
      </div>
    </S.CustomRow>
  );
};
