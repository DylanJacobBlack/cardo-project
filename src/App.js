import NavBar from "./components/NavBar/NavBar";
import SloganBox from "./components/SloganBox/SloganBox"
import classes from "./App.module.css"


function App() {
  return (
    <div className={classes.container}>
      <NavBar />
      <SloganBox />
    </div>
  );
}

export default App;
