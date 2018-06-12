import React from 'react'
import { Popover, message, Row, Col } from 'antd'
import '../css/home.css'
import Child from '../container/Child'
class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: 'Eversight'
		}
	}
	componentDidMount() {
		message.info('登录成功');
	}
	componentWillUnmount() {

	}
	clickFromson = (receiveParams) => {
		console.log(receiveParams);
	}
	render() {
		const content = (
			<div>
				<p>jhuang@abcft.com</p>
				<p>jhuang@abcft.com</p>
			</div>
		)
		return (
			<div className='home-container'>
				<div className='home-header'>
					<div className='home-header-popver'>
						<Popover content={content} title="用户详情信息如下 :" trigger='click'>
							<div className='home-header-popver-headimg'></div>
							<div className='home-header-popver-email'>jhuang@abcft.com</div>
						</Popover>
					</div>
				</div>
				<Row gutter={20} align="middle" type="flex" justify="center">
					<Col span={8} xs={12} md={12} lg={8} xl={8} className='home-container-list'>
						<div className='home-container-list-div' onClick={() => { this.props.history.push('hierarchy') }}>Left</div>
					</Col>
					<Col span={8} xs={12} md={12} lg={8} xl={8} className='home-container-list'>
						<div className='home-container-list-div' onClick={() => { this.props.history.push('hierarchy') }}>Center</div>
					</Col>
					<Col span={8} xs={12} md={12} lg={8} xl={8} className='home-container-list'>
						<div className='home-container-list-div' onClick={() => { this.props.history.push(`/detail/${555}`) }}>Right</div>
					</Col>
				</Row>
				<Child text={this.state.text} sendParent={(params) => { this.clickFromson(params) }} />
			</div>
		)
	}

}
export default Home