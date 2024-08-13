// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.css';

// import NxWelcome from './nx-welcome';

import { UiShared } from '@nx-react-workspace/ui-shared';
import { uppercase } from '@nx-react-workspace/utils';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { Button, Header } from '@nx-react-workspace/shared-app';

export function App() {
  const [greeting, setGreeting] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/first')
      .then((res) => res.text())
      .then((text) => JSON.parse(text).message)
      .then(setGreeting)
      .catch((err) => console.error(err));
    fetch('/express-api')
      .then((res) => res.text())
      .then((text) => JSON.parse(text).message)
      .then(setMessage)
      .catch((err) => console.error(err))
  }, []);

  return (
    <div>
      <Header />
      <div>{greeting}</div>
      <div>{message}</div>
      <Button />
      <UiShared parent={uppercase('my-react-app')} />
      
      {/* <NxWelcome title="my-react-app" /> */}
    </div>
  );
}

export default App;
