// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { UiShared } from '@nx-react-workspace/ui-shared';

export function App() {
  return (
    <div>
      <UiShared />
      <NxWelcome title="my-react-app" />
    </div>
  );
}

export default App;
