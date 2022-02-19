import { useCallback, useEffect, useState } from "react";
import apiUsers from "../../services/api";
import { Container } from "./styles";

const Pages: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>();

  const getUser = useCallback(async () => {
    const value = window.location.pathname.substring(1);

    try {
      // const { data } = await apiUsers.get(value === "" ? "otaviojneto" : value);
      const { data } = await apiUsers.get("otavio");

      setUser(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  console.log("user", user);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Container>
      <div>

        <h1>user: {user?.login}</h1>

        <img src={user?.avatar_url} alt={user.login} width={200} />
      </div>

      <a href="/tempo">Link Tempo</a>
    </Container>
  );
};

export default Pages;
