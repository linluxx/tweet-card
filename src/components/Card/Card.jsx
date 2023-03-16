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
import logo from "../../images/Logo.png";
import qa from "../../images/question.png";
import Hansel from "../../images/Hansel.png";

const Card = () => {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <BackgroungImg src={qa} alt="qa" />
      {/* <Line /> */}
      <Ellipse>
        <AvatarBg></AvatarBg>
        <Avatar src={Hansel} alt="avatar" />
      </Ellipse>
      <List>
        <Item>
          <Text>777 TWEETS</Text>
        </Item>
        <Item>
          <Text>100,500 FOLLOWERS</Text>
        </Item>
      </List>
      <Button type="button">FOLLOW</Button>
    </Container>
  );
};

export default Card;
