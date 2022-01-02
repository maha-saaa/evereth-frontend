import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./containers/landing";
import WhitePaper from "./containers/whitePaper";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/whitepaper" element={<WhitePaper />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
