import { Action, createBrowserHistory } from 'history';
// Create your own history instance.
class history {
  constructor(PUSH: string) {
    let history = createBrowserHistory();
    history.replace(PUSH);
  }
}
export default history
    