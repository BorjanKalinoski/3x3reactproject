import React, { Component } from 'react';
import Header from './components/Header/Header';
import News from './components/News/News';
import SocialMedia from './components/SocialMedia/SocialMedia';
import './App.css';
import Ads from "./components/Ads/Ads";
import Footer from "./components/Footer/Footer";
import Live from "./components/Live/Live";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import AboutUs from "./components/AboutUs/AboutUs";
import Event from "./components/Event/Event";
import SignIn from "./components/SignIn/SignIn";
import SubmitPost from "./components/News/SubmitPost/SubmitPost";
import SubmitLive from "./components/Live/SubmtiLive/SubmitLive";
// const initState={
//     route:'home',
//     user:{
//         username:'',
//         password:'',
//     },
//     isAdmin:true,
// };
class App extends Component {
  constructor(props){
    super(props);
    this.state={
        route:'home',
        user:{
            username:'',
            password:'',
        },
        isAdmin:true,
    }
  }
    loadUser=(data)=>{
        this.setState({user:
                {
                    username:data.username,
                    password:data.password,
                }});
        if(this.state.user.username==='admin'){
            this.setState({isAdmin:true});
        }
    };
    onRouteChange=(route)=>{
      this.setState({route:route});
    };

    resize = () => this.forceUpdate();

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }
  render() {
      let filler = {
          height: '4rem',
          width: '100%'
      };
      if(this.state.route==='signin'){
         return(
          <div>
            <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          </div>
         );
      }
      if(document.body.clientWidth>786){
          return (
              <div>
                  <Header resize={this.resize}/>
                  <div style={filler} className={"bg-mid-gray"}></div>
                  <HomeBanner/>
                  {/*<News resize={this.resize}  isAdmin={this.state.isAdmin}/>*/}
                  <Ads resize={this.resize} isAdmin={this.state.isAdmin}/>
                  {/*<Live isAdmin={this.state.isAdmin}/>*/}
                  {/*<AboutUs isAdmin={this.state.isAdmin}/>*/}
                  {/*<Event isAdmin={this.state.isAdmin}/>*/}
                  <SocialMedia isAdmin={this.state.isAdmin}/>
                  <Footer isAdmin={this.state.isAdmin}/>
              </div>
          );
      }else{
          return (
              <div>
                  <Header isAdmin={this.state.isAdmin} resize={this.resize}/>
                  <div style={filler} className={"bg-mid-gray"}></div>
                  <HomeBanner/>
                  {/*<News isAdmin={this.state.isAdmin} resize={this.resize}/>*/}
                  {/*<Live isAdmin={this.state.isAdmin}/>*/}
                  {/*<AboutUs isAdmin={this.state.isAdmin}/>*/}
                  {/*<Event isAdmin={this.state.isAdmin}/>*/}
                  <Ads isAdmin={this.state.isAdmin} resize={this.resize}/>
                  <SocialMedia isAdmin={this.state.isAdmin} />
                  {/*<Footer isAdmin={this.state.isAdmin}/>*/}
              </div>
          );
      }
  }
}

export default App;
