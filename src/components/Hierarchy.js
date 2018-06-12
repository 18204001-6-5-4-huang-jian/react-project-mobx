import React from 'react'
// import { Route } from 'react-router-dom'
// import HierarchyChild from '../container/Children'
class Hierachy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Hierachy'
        }
    }
    componentDidMount() {
        //   console.log(this.props.match.url);
    }
    render() {
        // const Users = ({match}) => (
        // <div>
        //     <h2>Title</h2>
        //     <Route path={`${match.url}/child`} component={HierarchyChild}/>
        // </div>
        // ) 
        return (
            <div className='hierachy-container'>
                <div style={{ fontSize: '22px' }}>{this.state.text}</div>
                {/* {this.props.children} */}
            </div >
        )
    }
}
export default Hierachy