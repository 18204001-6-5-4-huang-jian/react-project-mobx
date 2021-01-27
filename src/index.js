import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'antd'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
ReactDOM.render(
  <BrowserRouter basename="/">
    <LocaleProvider locale={zh_CN}>
    <App />
    </LocaleProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker();
