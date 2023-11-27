import { useState } from "react";
import Main from "./Layouts/Main";
import SuccessScreen from "./Layouts/SuccessScreen";
import "./App.css";

const App = () => {
  const [userMail, setUserMail] = useState("");
  const [isMailSubmitted, setIsMailSubmitted] = useState(false);

  console.log("userMail", userMail);
  return (
    <div className="app-wrapper">
      {isMailSubmitted ? (
        <SuccessScreen userMail={userMail} />
      ) : (
        <Main
          setUserMail={setUserMail}
          setIsMailSubmitted={setIsMailSubmitted}
        />
      )}
    </div>
  );
};

export default App;
