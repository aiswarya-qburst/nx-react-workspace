// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.css';

// import NxWelcome from './nx-welcome';

import { UiShared } from '@nx-react-workspace/ui-shared';

export function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api/first')
      .then((res) => res.text())
      .then((text) => JSON.parse(text).message)
      .then(setGreeting)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div>{greeting}</div>
      <UiShared parent='my-react-app' />
      
      {/* <NxWelcome title="my-react-app" /> */}
    </div>
  );
}

export default App;
