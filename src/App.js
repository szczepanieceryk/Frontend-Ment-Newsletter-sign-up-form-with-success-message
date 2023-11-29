import { useState } from "react";
import MainPage from "./Pages/MainPage";
import SuccessScreen from "./Layouts/SuccessScreen";
import "./styles/styles.css";

const App = () => {
  const [userMail, setUserMail] = useState("");
  const [isMailSubmitted, setIsMailSubmitted] = useState(false);

  console.log("userMail", userMail);
  return (
    <div className="app-wrapper">
      {isMailSubmitted ? (
        <SuccessScreen userMail={userMail} />
      ) : (
        <MainPage
          setUserMail={setUserMail}
          setIsMailSubmitted={setIsMailSubmitted}
        />
      )}
    </div>
  );
};

export default App;
