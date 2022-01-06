import { useCallback, useEffect, useState } from "react";
import apiUsers from "../services/api";
import { Container } from "./styles";

// import { Container } from './styles';

const Pages: React.FC = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>();

  const getUser = useCallback(async (value: string) => {
    setLoading(true);

    try {
      const { data } = await apiUsers.get(value);

      setUser(data);
    } catch (error) {
      console.log("error", error);
      setUser(null);
    } finally {
      setLoading(false);
      setValue("");
    }
  }, []);

  // useEffect(() => {
  //   getUser("victormarques92");
  // }, []);

  return (
    <>
      <label>
        Username:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>

      <button type="button" onClick={() => getUser(value)}>
        BUSCAR
      </button>

      {loading && <h1>Carregando...</h1>}

      {user && !loading && (
        <>
          <h1>usuario: {user?.login}</h1>

          <img src={user.avatar_url} alt={user.login} width={200} />
        </>
      )}
    </>
  );
};

export default Pages;
