import { useState } from "react";
import "./App.css";
import { Card } from "./components/card";

function App() {
  const [isGerman, setIsGerman] = useState(true);
  const [login, setLogin] = useState(true);

  const toggleLanguage = () => {
    setIsGerman(!isGerman);
  };

  const loginButton = () => {
    setLogin(!login);
  };

  return (
    <>
      <div className="Card--Style">
        <Card
          title="React state exercise"
          imageUrl={login ? "login.jpg" : "logout.jpg"}
          description2={
            isGerman
              ? "Willkommen auf deiner Profile-Seite Ralf"
              : "Welcome to your Page Ralf,have fun with your website"
          }
          description1={
            login
              ? "welcome to the React State website. log in to see state in action"
              : "willkommen zur React state website"
          }
        />
      </div>

      <div className="Button">
        <button
          onClick={() => {
            toggleLanguage();
          }}
          className="Button__logo"
        >
          {isGerman ? "Switch to English" : "Umschalten auf Deutsch"}
        </button>
        <button
          onClick={() => {
            loginButton();
          }}
          className="Button__logo"
        >
          {login ? "Login" : "Logout"}
        </button>
      </div>
    </>
  );
}

export default App;
