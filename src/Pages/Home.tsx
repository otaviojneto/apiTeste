import { useQuery } from "react-query";
import api from "../Helpers/helpers";
import { Container } from "./styles";

// import { Container } from './styles';

const Pages: React.FC = () => {
  const { data: user } = useQuery("user", async () => {
    return api.get("/users/pedronauck");
  });

  console.log("api", api);
  return (
    <Container>
      <h1>usuario: {user?.data?.login}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </Container>
  );
};

export default Pages;
