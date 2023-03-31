import Header from "./components/Header/Header";
import Home from "./page/Home/Home";
import SideNav from "./components/SideNav/SideNav";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SideNav />
        <Home />
      </main>
    </div>
  );
}

export default App;
