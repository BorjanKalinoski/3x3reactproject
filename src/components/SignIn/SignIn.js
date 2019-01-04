import React,{Component} from 'react';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }

    onUsernameChange=(event)=>{
        this.setState({username:event.target.value});
    };

    onPasswordChange=(event)=>{
        this.setState({password:event.target.value});
    };
    onSubmit=(event)=> {
        event.preventDefault();

        fetch('http://localhost:3001/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state),
        })
            .then(response => response.json())
            .then(user => {
                if(user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            }).catch(err=>console.log(err));
    };
    render() {
        return (
            <div>
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                                <input
                                    onChange={this.onUsernameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="text" name="username" id="username"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                       type="password" name="password" id="password"/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmit}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="Sign in"/>
                        </div>
                    </form>
                </main>
            </div>
        );
    }


};