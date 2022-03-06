import { Provider, defaultChains } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import AppRouter from "./router";

function App() {
  const connectors = () => {
    return [
      new InjectedConnector({ defaultChains,options: { shimDisconnect: true } }),
    ]
  }
  return (
    <Provider autoConnect connectors={connectors}>
  <AppRouter/> 
    </Provider>
  );
}

export default App;
