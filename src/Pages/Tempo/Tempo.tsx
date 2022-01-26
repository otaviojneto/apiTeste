import React from "react";
import { useFetch } from "../../hooks";

// import { Container } from './styles';

const Pages: React.FC = () => {
  const { error, loading, response } = useFetch(
    "https://api.github.com/users/otaviojneto"
  );

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <>
      <h1>@{response?.login}</h1>

      <img src={response?.avatar_url} alt={response?.login} />
    </>
  );
};

export default Pages;
