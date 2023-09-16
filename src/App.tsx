import React from 'react';
import './App.css';
import {QueryClientProvider} from "react-query";
import MainPage from "./pages/MainPage";
import {queryClient} from "./store/queryClient";

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>
  );
}

export default App;
