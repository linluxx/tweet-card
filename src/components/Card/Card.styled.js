import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

const Line = styled.div;
const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
const BackgroungImg = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
`;
const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  position: absolute;
`;
const Ellipse = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 26px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 150px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 150px;
    height: 8px;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
const AvatarBg = styled.div`
  background: #5736a3;
  border-radius: 50%;
  width: 62px;
  height: 62px;
  position: absolute;
`;

const List = styled.ul`
  margin-bottom: 24px;
`;
const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 18px;
  }
`;
const Text = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;
`;
const Button = styled.button`
  cursor: pointer;
  margin-bottom: 36px;
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  gap: 6px;
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #373737;
`;

export {
  Container,
  Button,
  Logo,
  BackgroungImg,
  Avatar,
  Ellipse,
  Text,
  Item,
  List,
  AvatarBg,
};
