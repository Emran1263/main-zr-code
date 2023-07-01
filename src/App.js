import "./App.css";
import MainApp from "./MainApp";
import Footer from "./components/componentsByHammad/Footer";
import Navbar from "./components/componentsByHammad/Navbar/NavbarOther";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainApp />
      <Footer/>
    </div>
  );
}

export default App;
