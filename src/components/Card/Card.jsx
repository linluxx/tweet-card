import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import logo from "../../images/Logo.png";
import qa from "../../images/question.png";

import {
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
} from "./Card.styled";

const Card = ({ avatar, tweets, followers, id }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem(`card ${id}`)) || {
      isFollow: false,
      followersCount: followers,
    }
  );

  useEffect(() => {
    localStorage.setItem(
      `card ${id}`,
      JSON.stringify({
        isFollow: userInfo.isFollow,
        followersCount: userInfo.followersCount,
      })
    );
  }, [userInfo, id]);

  const onFollowClick = () => {
    setUserInfo((prevState) => ({
      ...prevState,
      isFollow: !prevState.isFollow,
    }));
    if (!userInfo.isFollow) {
      setUserInfo((prevState) => ({
        ...prevState,
        followersCount: prevState.followersCount + 1,
      }));
    } else {
      setUserInfo((prevState) => ({
        ...prevState,
        followersCount: prevState.followersCount - 1,
      }));
    }
  };

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <BackgroungImg src={qa} alt="qa" />
      <Ellipse>
        <AvatarBg />
        <Avatar src={require(`../../images/avatars/${avatar}`)} alt="avatar" />
      </Ellipse>
      <List>
        <Item>
          <Text>{tweets.toLocaleString()} TWEETS</Text>
        </Item>
        <Item>
          <Text>{userInfo.followersCount.toLocaleString()} FOLLOWERS</Text>
        </Item>
      </List>
      <Button
        type="button"
        isFollow={userInfo.isFollow}
        onClick={onFollowClick}
      >
        {userInfo.isFollow ? "FOLLOWING" : "FOLLOW"}
      </Button>
    </Container>
  );
};

Card.propTypes = {
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
