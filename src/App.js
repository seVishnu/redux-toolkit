import Header from "./Header";
import Sidebar from "./Sidebar";
import Template from "./Template";

function App() {
  return (
    <div>
      <Header />
      <div style={{display:'flex'}}>
        <Sidebar />
        <Template />
      </div>
    </div>
  );
}

export default App;
