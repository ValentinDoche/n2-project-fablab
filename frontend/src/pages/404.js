import React from 'react';
import './404.css'
import {Link} from "react-router-dom";

class NotFound extends React.Component{
    render() {
        return(
            <div className={'nofound'}>
                <p>404 - Not Found</p>
                <div className={"button"}>
                    <Link to={"/"}>Return to Home</Link>
                </div>
            </div>
        )
    }
}
export default NotFound
