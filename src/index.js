import ReactDOM from "react-dom/client";
import Header from "./Header";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
     <Header/>
     <App/>
    </>
   
);