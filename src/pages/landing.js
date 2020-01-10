import React from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Cards from '../components/cards'

firebase.initializeApp({
    apiKey: "AIzaSyB6-9oh1k17H_bB3r1JuCcdqKFM2_BFekI",
    authDomain:'social-app-903b8.firebaseapp.com'
})

class Landing extends React.Component{
    
    state={isSignedIn:false}
    uiConfig = {
        signInFlow: "popup",
        signInOptions:[
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }
    componentDidMount = () => {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user})
            console.log("user", user)
        })
    }
    render(){
        return(
             <div id='landing'>
                 {this.state.isSignedIn}
 
{this.state.isSignedIn ? (
<div> Signed In!</div> ) : (<StyledFirebaseAuth 
uiConfig={this.uiConfig}
firebaseAuth={firebase.auth()} />
)}
<div>
    <Cards/>
</div>
        </div>
        )
    }
}

export default Landing;