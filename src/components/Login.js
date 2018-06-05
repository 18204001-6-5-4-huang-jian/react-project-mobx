import React from 'react';
import { Button, message } from 'antd'
import md5 from 'md5'
// import  '../less/login.less'
import '../css/login.css'
import { userLogin } from '../request/api.js'
import { observer, inject } from 'mobx-react'
@inject('listStore')
@observer
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Welcome'
        }
    }
    componentDidMount() {
        const { listStore } = this.props;
        console.log(listStore.lang);
        // listStore.changeLang('en');
        // console.log(listStore.lang);
    }
    componentWillUnmount() {

    }
    candleClick = async () => {
        const res = await userLogin({
            email: 'jhuang@abcft.com',
            password: md5(123456)
        })
        console.log(res);
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
    render() {
        const { name } = this.state;
        return (
            <div className="login-background" >
                <div className="login-container" >
                    <div className="login-title" > {name} </div>
                    <div className="login-title" onClick={this.candleClick}>Login</div>
                    <a href='../images/bg.ipg' download='demo.jpg' >
                        <Button type="primary" icon="download" > Download </Button>
                    </a>
                </div>
            </div>
        )
    }
}
export default Login