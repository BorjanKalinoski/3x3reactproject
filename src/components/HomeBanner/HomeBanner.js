import React, {Component} from 'react';

export default class HomeBanner extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var signupposition={
            top:'35%',
            left:'7%',

        };
        return (
            <div className={"mw-100 w-100 relative"}>
                <img className={"h-100 w-100 of-cover"} src={require('./../../images/slika.jpg')} alt="banner"/>
                <a href="£" className={"absolute f2 br2 link ttu b dim ba shadow-1 ph3 pv2 dib dark-blu bg-gold bg-light-yellw black"} style={signupposition}>Sign up</a>
            </div>
        );
    }


};