import React from 'react'
// 路由依赖
import { Switch, Route } from 'react-router-dom'
import './App.css'
// 异步组件
import AsyncComponent from './components/asyncComponent.jsx';
import { Provider } from 'mobx-react'
//从stores中引入   
import Store from './stores'
// 初始化store实例
const stores = new Store()
// 按需引入组件
const Login = AsyncComponent(() => import('./components/Login.jsx'));
const Home = AsyncComponent(() => import('./components/Home.jsx'));
const Detail = AsyncComponent(() => import('./components/Detail.jsx'));
const Hierarchy = AsyncComponent(() => import('./components/Hierarchy.jsx'));
const Dashboard = AsyncComponent(() => import('./components/Dashboard.jsx'));
const Errorpage = AsyncComponent(() => import('./components/Errorpage.jsx'));
class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Provider {...stores}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/hierarchy" component={Hierarchy} />
            <Route path="/dashboard" component={Dashboard} />
            <Route  component={Errorpage} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
