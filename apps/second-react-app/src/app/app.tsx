// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

// import NxWelcome from './nx-welcome';

import { UiShared } from '@nx-react-workspace/ui-shared';

export function App() {
  return (
    <div>
      <UiShared parent='second-react-app' />
      {/* <NxWelcome title="second-react-app" /> */}
    </div>
  );
}

export default App;
