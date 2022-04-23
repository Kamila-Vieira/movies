import Movies from "../Movies";
import Header from "../../components/styles/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <h1 className="title">Movies</h1>
        </Link>
      </Header>
      <Movies />
    </>
  );
};

export default Home;
