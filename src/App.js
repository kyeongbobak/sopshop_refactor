import GlobalStyle from "../src/style/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RecoilRoot } from "recoil"; // RecoilRoot 추가

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
