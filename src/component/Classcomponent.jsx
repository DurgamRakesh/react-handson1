import { Component } from "react";
import './Styles.css'
class Classcomponent extends Component {
    render() {
        return (
            <div className='fun2'>
                <h3>This is created using class component</h3>
                <h4>This is done using external CSS</h4>
                <h5 style={{color:'purple'}}>This is done using inline CSS</h5>
            </div>
        )
    }
}
export default Classcomponent;