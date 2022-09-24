import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';

import './styles/reset.css';
import Router from './Router';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnMount: false, refetchOnWindowFocus: false } },
}); // 옵션 나중에 수정

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
