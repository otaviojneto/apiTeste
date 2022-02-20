import React, { useCallback, useEffect, useState } from "react";
import Country from "../../services/apiCountry";
import * as S from "./styles";

const Pais: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [dataCountry, setDataCountry] = useState<any>();
  const [value, setValue] =useState('')

  const getClimate = useCallback(async () => {
    try {
      const { data } = await Country.get("Albania");

      setDataCountry(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getClimate();
  }, []);

  if (loading) {
    return <h2>Aguarde ...</h2>;
  }

  const country = dataCountry[0];

  return (
    <S.Container>
      <form>
        <label>Digite um pais em inglês:</label>
        <input type="text" value={value}/>
      </form>

      <h1>Pais</h1>
      <S.Content>
        <div>
          <h2>{country?.translations.por.common}</h2>
          <img src={country?.flags.svg} alt="" />
        </div>

        <p>capital: {country?.capital}</p>

        <p>população: {country?.population}</p>

        <p>Continente: {country?.continents[0]}</p>
      </S.Content>

      <a href="/">Voltar</a>
    </S.Container>
  );
};

export default Pais;
