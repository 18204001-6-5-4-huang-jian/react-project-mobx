import React from 'react'
class Children extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'children'
        }
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className='children-container'>{this.state.text}</div>
        )
    }
}
export default Children