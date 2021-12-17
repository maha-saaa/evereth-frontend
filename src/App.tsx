import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// import { createUseStyles } from "react-jss";
import Landing from "./containers/landing";

// const useStyles = createUseStyles({});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Landing />
    </QueryClientProvider>
  );
}

export default App;
