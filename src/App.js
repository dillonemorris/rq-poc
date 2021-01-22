import React from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { RootStoreContext } from "./hooks/useRootStore";
import { Store } from "./Store";
import { Dashboard } from "./components/Dashboard";

const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RootStoreContext.Provider value={Store}>
        <Dashboard />
      </RootStoreContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
