/* eslint-disable react/jsx-no-undef */
import "./styles/main.scss";
import Header from './components/header/Header.jsx'
import MainContent from "./components/main/MainContent";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
