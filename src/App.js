import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import './App.css';
import Router from './Router';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false } }
}); // 옵션 나중에 수정

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
