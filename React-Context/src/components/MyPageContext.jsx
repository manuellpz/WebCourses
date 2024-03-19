import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import FooterContext from "./FooterContext";
import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";

const initialAuth = false;

const MyPageContext = () => {
  
  const [auth, setAuth] = useState(initialAuth);

  const handleAuth = () => {
    setAuth(auth ? false : true);
  };

  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <HeaderContext
            handleAuth={handleAuth}
            auth={auth}
          />
          <MainContext auth={auth} />
          <FooterContext />
        </LanguageProvider>
        
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
