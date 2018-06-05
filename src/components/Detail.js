import React from 'react'
import '../css/detail.css'
class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'Detail'
        }
    }
    componentDidMount() {
        //console.log(this.props.match.params.id);
    }
    render() {
        const rawHTML = {
            __html: "<h2>非dom属性:dangerouslySetInnerHTML标签</h2>"
        };
        return (
            <div className='detail-container' dangerouslySetInnerHTML={rawHTML}></div >
        )
    }
}
export default Detail