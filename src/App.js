import Navigation from "./routing/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouting from "./routing/AppRouting/AppRouting";
import MemesContextProvider from "./context/MemesProvider";
import "./App.css";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop.component";

function App() {
  return (
    <div className="App">
      <MemesContextProvider>
        <Router>
          <ScrollToTop />
          <Navigation />
          <AppRouting />
        </Router>
      </MemesContextProvider>
    </div>
  );
}

export default App;
