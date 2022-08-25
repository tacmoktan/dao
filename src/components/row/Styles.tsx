import { Switch } from "antd";
import styled from "styled-components";

export const CustomRow = styled.div`
  display: grid;
  grid-template-columns:
    minmax(auto, 18.5%) minmax(auto, 28%) minmax(auto, 15.2%)
    minmax(auto, 21.8%) minmax(auto, auto);
  align-items: center;
  height: 72px;
  max-width: 1556px;
  margin: 60px auto;
  border-radius: 6px;
  width: 100%;
  background: #1d1c28;
  padding: 0 16px;
  h5 {
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #b7b3c1;
  }
  > h5,
  > div {
    padding: 0 16px;
  }
`;

export const CustomAvatarGroup = styled.div`
  display: flex;
  .ant-avatar-group {
    .ant-avatar {
      border: 3px solid #1d1c28;
      height: 38px;
      width: 38px;
    }

    .ant-avatar:not(:first-child) {
      margin-left: -15px;
    }
    .ant-avatar-string {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      width: 100%;
      cursor: pointer;
    }
  }
`;

export const CustomSwitch = styled(Switch)`
  &.ant-switch {
    min-width: 40px;
    height: 24px;
    line-height: 24px;
    background: #282737;
    border-radius: 20px;
    &-checked {
      background: #2481ff;
    }
    .ant-switch-handle {
      top: 3px;
    }
  }
`;
