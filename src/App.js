import "./App.css";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Video />
      </div>
    </div>
  );
}

export default App;
