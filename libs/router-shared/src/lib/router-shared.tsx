import {
  Routes,
  Route,
} from "react-router-dom";

interface Props {
  routes: {
    path: string;
    element: any;
  }[]
}

export function RouterShared(props: Props) {
  return (
      <Routes>
        {props.routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
      </Routes>
  );
}

export default RouterShared;
