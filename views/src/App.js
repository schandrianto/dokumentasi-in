import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ViewProfile from './components/ViewProfile';
import EditProfile from './components/EditProfile';
import Bookmark from './components/Bookmarks';
import { STATE_LOGIN } from './components/Login';
import { STATE_SIGNUP } from './components/Register';
import GAListener from './components/GAListener';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import MainLayout from './components/Layout/MainLayout';
//import AuthPage from './pages/AuthPage';
import EmptyLayout from './components/Layout/EmptyLayout';
import LayoutRoute from './components/Layout/LayoutRoute';
import PageSpinner from './components/PageSpinner';
import Setting from './components/Settings';

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component{
  render(){
    return(
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
                exact
                path="/"
                layout={EmptyLayout}
                component={props => (
                  <Login {...props} authState={STATE_LOGIN} />
                )}
             />
             <LayoutRoute
                exact
                path="/register"
                layout={EmptyLayout}
                component={props => (
                  <Register {...props} authState={STATE_SIGNUP} />
                )}
             />
             <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner/>}>
                <Route exact path="/home" component={Home} />
                <Route exact path="/bookmark" component={Bookmark} />
                <Route exact path="/viewprofile" component={ViewProfile} />
                <Route exact path="/editprofile" component={EditProfile} />
                <Route exact path="/setting" component={Setting} />
                {/* <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="/buttons" component={ButtonPage} />
                <Route exact path="/cards" component={CardPage} />
                <Route exact path="/widgets" component={WidgetPage} />
                <Route exact path="/typography" component={TypographyPage} />
                <Route exact path="/alerts" component={AlertPage} />
                <Route exact path="/tables" component={TablePage} />
                <Route exact path="/badges" component={BadgePage} />
                <Route
                  exact
                  path="/button-groups"
                  component={ButtonGroupPage}
                />
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/forms" component={FormPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/charts" component={ChartPage} /> */}
              </React.Suspense>
            </MainLayout>
             <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    )
  }
}

export default App;
