import React from 'react';
import { message } from 'antd'
import md5 from 'md5'
// import  '../less/login.less'
import '../css/login.css'
import { userLogin } from '../request/api.js'
import { observer, inject } from 'mobx-react'
import classNames from 'classnames'
@inject('listStore')
@observer
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Welcome'
        }
    }
    componentDidMount() {
        window.addEventListener('keyup', this.enterKey)
        const { listStore } = this.props;
        // console.log(listStore.lang);
        listStore.changeLang('en');
        console.log(listStore.lang);
    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.enterKey)
    }
    enterKey = (e) => {
        if (e.keyCode === 13) {
            this.candleLogin();
        }
    }
    candleLogin = async () => {
        const res = await userLogin({
            email: 'jhuang@abcft.com',
            password: md5(123456)
        })
        if (!res) {
            message.info('请求失败')
        } else if (res.data.success) {
            this.props.history.push({
                pathname: '/home'
                // search:'?name=jhuang&age=18'
            });
        } else if (!res.data.success) {
            message.info(`对不起,${res.data.message}`);
        }

    }
    candleClick = () => {
        console.log('登陆');
    }
    render() {
        const { name } = this.state;
        const { listStore } = this.props;
        return (
            <div className="login-background" >
                <div className="login-container" >
                    <div className={classNames({
                        'class-one': true,
                        'class-two': true,
                        'login-title': true
                    })} > {name} </div>
                    <div className="login-title" onClick={this.candleClick}>{listStore.lang === 'zh_CN' ? '登录' : 'Login'}</div>
                </div>
            </div>
        )
    }
}