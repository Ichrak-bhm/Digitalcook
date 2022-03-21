import * as React from "react";
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Digitalcook, Outsourcing, SolutionIt } from "./pages";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Digitalcook} />
        <Route path="/solution-it" component={SolutionIt} />
        <Route path="/outsourcing" component={Outsourcing} />
      </Switch>
    </Router>
  </ChakraProvider>
);
