import Card from "../Card/Card";
import users from "../../bd/users.json";

import { Wrapper } from "./App.styled";

function App() {
  return (
    <Wrapper>
      {users.map((user) => (
        <Card
          key={user.id}
          id={user.id}
          tweets={user.tweets}
          avatar={user.avatar}
          followers={user.followers}
        />
      ))}
    </Wrapper>
  );
}

export default App;
