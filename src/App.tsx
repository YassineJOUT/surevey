import React from 'react';
import Login from './Pages/LoginPage';
import Student from './Pages/StudentInfoPage';
import Survey from './Pages/Survey';
import AdminPage from './Pages/Admin';

import { Provider } from 'react-redux';
import { Store } from 'redux';
import { Router,Route } from 'react-router-dom';
import { history } from './utilities/history';
import { ApplicationState } from './store';
import { configureStore } from './configureStore';

const App: React.FC = () => {
  
  const store: Store<ApplicationState> = configureStore(history);
  return (
    <Provider store={store}>

        <div className="App">
          <Router history={history}>

            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/survey" exact component={Survey} />
            <Route path="/student" exact component={Student} />
            <Route path="/admin" exact component={AdminPage} />

        </Router>
            
        </div>
    </Provider>
  );
}

export default App;
