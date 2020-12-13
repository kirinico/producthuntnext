
import "../styles/globals.css";
import firebase, { FirebaseContext } from "../firebase/index";
import useAutenticacion from "../hooks/useAutenticacion";
const MyApp = (props) => {

  const usuario = useAutenticacion()
  const { Component, pageProps } = props;
  return (
    
      <FirebaseContext.Provider
        value={{
          firebase,
          usuario
        }}
      >
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    
  );
};

export default MyApp;