import React from 'react'
class Son extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.text
        }
    }
    componentDidMount() {
        //console.log(this.props.text)
    }
    componentWillUnmount() {

    }
    toParent = () => {
        this.props.click(this.state.text);
    }
    render() {
        return (
            <div style={{ fontSize: '20px', marginTop: '20px', fontWeight: 'bold', cursor: 'pointer' }} onClick={this.toParent}>{this.state.text}</div>
        )
    }
}
export default Son