// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

// import NxWelcome from './nx-welcome';

import { UiShared } from '@nx-react-workspace/ui-shared';
import { add } from '@nx-react-workspace/utils';
import { useEffect, useState } from 'react';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { Button, Header } from '@nx-react-workspace/shared-components';

export function App() {
  const [greeting, setGreeting] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/second')
      .then((res) => res.text())
      .then((text) => JSON.parse(text).message)
      .then(setGreeting)
      .catch((err) => console.error(err));

    fetch('/second-api')
    .then((res) => res.text())
    .then((text) => JSON.parse(text).message)
    .then(setMessage)
    .catch((err) => console.error(err))
  }, []);

  return (
    <div>
      <div>{greeting}</div>
      <div>{message}</div>
      <UiShared parent={add('second-react-app')} />
      <Button str='second react app btn' />
      <Header />
    </div>
  );
}

export default App;
