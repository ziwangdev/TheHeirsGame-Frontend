import React, { Component } from "react";
import firebase from 'firebase/app'
import 'firebase/database'
import { FirebaseDatabaseProvider, FirebaseDatabaseNode} from "@react-firebase/database";
import { config } from '../../config'





class Players extends Component {



    render() {
        return (
            <div>
                <h2>This page is for firebase testing</h2>
                <p>{this.state}</p>

            </div>
        );
    }
}

export default Players;