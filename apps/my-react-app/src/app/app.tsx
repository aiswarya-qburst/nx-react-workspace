import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

// eslint-disable-next-line @nx/enforce-module-boundaries
import SharedApp from '@nx-react-workspace/shared-app';

export function App() { 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={'root path'} />
          <Route path="/usr1" element={'usr1'} />  
          <Route path="/usr2" element={'usr2'} />
          <Route path="/usr3" element={'usr3'} />
          <Route path="/share/*" element={<SharedApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
