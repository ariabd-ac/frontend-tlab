import AdminLayout from 'layouts/Admin.js';
import AuthLayout from 'layouts/Auth.js';
import Books from 'layouts/Books';
import CreateBook from 'views/CreateBook';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import DetailBooks from 'views/DetailBooks';
import DeleteBooks from 'views/DeleteBooks';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/admin' render={(props) => <AdminLayout {...props} />} />
          <Route path='/auth' render={(props) => <AuthLayout {...props} />} />
          <Route path='/list-books' render={(props) => <Books {...props} />} />
          <Route
            path='/tambah/:id?'
            render={(props) => <CreateBook {...props} />}
          />
          <Route
            path='/hapus/:id?'
            render={(props) => <DeleteBooks {...props} />}
          />
          <Route
            path='/detail-books/:id'
            render={(props) => <DetailBooks {...props} />}
          />
          <Redirect from='/' to='/list-books' />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
