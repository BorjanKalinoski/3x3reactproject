import React, {Component} from 'react';
import FooterItem from "./FooterItem/FooterItem";
import SubmitImagesAboutUs from "../AboutUs/SubmitImagesAboutUs/SubmitImagesAboutUs";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state={
            sponsors:[]
            // img:[require('../../../public/images/sponsors/sponsor61.png'),require('../../../public/images/sponsors/sponsor73.png'),require('../../../public/images/sponsors/sponsor75.png'),require('../../../public/images/sponsors/sponsor76.png')]
        };
        fetch('http://localhost:3001/sponsors', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => response.json())
            .then(data => {
                let sponsors=[];
                data.map(sponsor=>{
                    return sponsors.push(sponsor.image);
                });
                this.setState({sponsors:sponsors});
            }).catch(err => console.log(err));
    }

    render() {
        let sponsors=this.state.sponsors.map((path,index)=>{
                return <FooterItem key={index} path={path}/>
            }
        );
        return (
            <div className={"w-100 fl"}>
                {this.props.isAdmin===true?<SubmitImagesAboutUs/>:null}
                <ul className={"list ma0 fl w-100 mw-100 bg-black-80 flex flex-wrap flex-row justify-around items-center pa2 pv3 mt3"}>
                    {sponsors}
                </ul>
            </div>
        );
    }

};