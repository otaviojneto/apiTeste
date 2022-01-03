import "./styles.css";
import { useQuery } from "react-query";
import api from "./Helpers/helpers";

export default function App() {
  const { data: user } = useQuery("user", async () => {
    return api.get("/users/pedronauck");
  });
  return (
    <div className="App">
      <h1>usuario: {user?.data?.login}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
