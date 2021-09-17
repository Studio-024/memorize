import { Redirect, Route, RouteProps } from 'react-router';
import { isAuthenticated } from '../service/auth';

export type ProtectedRouteProps = {
  isAuthenticated?: boolean;
  authenticationPath: string;
} & RouteProps;

export default function ProtectedRoute({ authenticationPath, ...routeProps}: ProtectedRouteProps) {
  if(isAuthenticated()) {
    return <Route path={routeProps.path} component={routeProps.component} />;
  } else {
    return <Redirect to={{ pathname: authenticationPath }} />;
  }
};