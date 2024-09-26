// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

// import NxWelcome from './nx-welcome';
import { Button } from '../components/button';

import { RouterShared } from '@nx-react-workspace/router-shared';


export function App() {
  const routes = [
    {
      path: '/',
      element: <Button str='button parent' />
    },
    {
      path: '/btn1',
      element: <Button str='button 1' />
    },
    {
      path: '/btn2',
      element: <Button str='button 2' />
    },
    {
      path: '/btn3',
      element: <Button str='button 3' />
    },
  ];

  return (
    <RouterShared routes={routes} />
  );
}

export default App;
