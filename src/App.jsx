import "./App.css";
import Nav from "./Nav";
import SecMain from "./SecMain";
import SecAbout from "./SecAbout";
import SecOffer from "./SecOffer";
import Footer from "./Footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav></Nav>
      <SecMain></SecMain>
      <SecAbout></SecAbout>
      <SecOffer></SecOffer>
      <Footer></Footer>
    </div>
  );
}

export default App;
