import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./config/routers";
import { Auth } from "./templates/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          let Layout;
          const { auth } = route;
          if (!auth) {
            Layout = <>{route.component}</>;
          } else {
            Layout = <Auth>{route.component}</Auth>;
          }
          return <Route path={route.path} element={Layout} key={index} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
