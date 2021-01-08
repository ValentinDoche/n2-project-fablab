import React from 'react';
import Sidebar from "../components/sidebar";
import './index.css'
import {Route} from "react-router-dom";
import Dashboard from "../components/dashboard";
import Profile from "./profile";
import Devices from "../components/devices";
import Functionality from "../components/functionality";
function Index(){
        return(
            <div>

                    <Sidebar />
                    <main>
                        <Route exact path={"/"} component={Dashboard} />
                        <Route exact path={"/profile"} component={Profile} />
                        <Route exact path={"/devices"} component={Devices} />
                        <Route exact path={"/functionality"} component={Functionality} />
                    </main>
            </div>
        )
}
export default Index;
