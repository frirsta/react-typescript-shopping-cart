import ReactDOM from 'react-dom/client';
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<QueryClientProvider client={client}>
<App />
</QueryClientProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
