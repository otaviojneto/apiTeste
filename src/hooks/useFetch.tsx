import React from "react";

// import { Container } from './styles';

const hooks: React.FC = () => {
  return <><h1>oi</h1></>;
};

export default hooks;
// import { useEffect, useState } from "react";

// function useFetch(url: string, options?: any) {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const loading = !response && !error;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(url, options);
//         const json = await res.json();

//         setResponse(json);
//       } catch (error: any) {
//         setError(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return { response, error, loading };
// }

// export default useFetch;
