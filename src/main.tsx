import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.ts";
import Loading from "./components/Loading/Loading.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IKContext } from "imagekitio-react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <IKContext
            publicKey="public_POLuSf/Qrn79R+Goy2t0JxWA6XM="
            urlEndpoint="https://ik.imagekit.io/yidiElectro"
            transformationPosition="path"
          >
            <App />
          </IKContext>
        </QueryClientProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
