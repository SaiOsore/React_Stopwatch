import React from "react";
import { useRoutes } from "hookrouter";
import Routes from "./router/router";
import { GlobalStyle } from "./theme/global";

import Container from "./components/layouts/Container";

const App = () => {
  const routeResult = useRoutes(Routes)
  return (
    <div className="App">
      <Container>
        <GlobalStyle />
        { routeResult }
      </Container>
    </div>
  );
}

export default App;