import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import classes from "./App.module.css"


function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
