import React, {Component} from 'react';
import FooterItem from "./FooterItem/FooterItem";
import SubmitImagesAboutUs from "../AboutUs/SubmitImagesAboutUs/SubmitImagesAboutUs";

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state={
            sponsors:[],
            sponsorimage:'',
            sponsorurl:'',

            // img:[require('../../../public/images/sponsors/sponsor61.png'),require('../../../public/images/sponsors/sponsor73.png'),require('../../../public/images/sponsors/sponsor75.png'),require('../../../public/images/sponsors/sponsor76.png')]
        };
        fetch('https://api3x3macedonia.herokuapp.com/sponsors', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => response.json())
            .then(sponsors => {
                let localsponsors=[];
                sponsors.map(sponsor=>{
                    localsponsors.push({
                        sponsor:sponsor.image,
                        url:sponsor.url,
                        id:sponsor.id
                    });
                });
                this.setState({sponsors:localsponsors});
            }).catch(err => console.log(err));
    }



    onSponsorImageChange = (event) => {
        this.setState({sponsorimage: event.target.files[0]});
    };

    onSponsorURLChange = (event) => {
        this.setState({sponsorurl:event.target.value});
    };
    onSponsorSubmit = (event) => {
        event.preventDefault();
        const {sponsorimage, sponsorurl} = this.state;

        if (!sponsorimage.name) {
            return false;
        }
        if (sponsorimage.type.substr(0, 5).toLowerCase() !== 'image') {
            console.log('You can only upload images');
            return false;
        }
        let ext = getFileExtension(sponsorimage.name);
        if (ext === false) {
            console.log('You can only upload images');
            return false;
        }
        const data = new FormData();
        data.append('sponsorimage', sponsorimage);
        data.append('sponsorurl', sponsorurl);
        console.log('click');
        fetch('https://api3x3macedonia.herokuapp.com/uploadsponsor', {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then(sponsor => {
                console.log(sponsor);
                let sponsors = this.state.sponsors;
                sponsors = [...sponsors, {
                    sponsor:sponsor.image,
                    url:sponsor.url,
                    id:sponsor.id
                }];
                console.log(sponsors);
                this.setState({sponsors: sponsors});
            })
                .catch(err => console.log('failed to upload image', err));
        }).catch(err => {
            console.log('error uploading image', err);
        });
    };

    render() {
        let sponsors=this.state.sponsors.map((path,index)=>{
                return <FooterItem key={index} src={path.url} id={path.id}/>
            }
        );

        return (
            <div className={"fl w-100"}>
                {this.props.isAdmin === true ?
                    <div className={"bw1 ba br2 pa1 w-100 center mv2"}>
                        <form className={"measure center w-100 mw-100"} action="">
                            <fieldset className="ba b--transparent ph0 mh0">
                                <legend className={"f4 fw6 ph0 mh0 tc"}>Submit Sponsor</legend>
                                <div className={"mt2"}>
                                    <label htmlFor="sponsorimage" className="db fw6 lh-copy f6">Sponsor Image</label>
                                    <input
                                        name={"sponsorimage"}
                                        onChange={this.onSponsorImageChange}
                                        className={"pv1 ba bg-transparent hover-bg-black hover-white mw-100 w-100"}
                                        type="file"
                                    />
                                </div>
                                <div className={"mt2"}>
                                    <label htmlFor="sponsorurl" className="db fw6 lh-copy f6">Sponsor URL</label>
                                    <input
                                        name={"sponsorurl"}
                                        onChange={this.onSponsorURLChange}
                                        className={"pv1 ba bg-transparent hover-bg-black hover-white mw-100 w-100"}
                                        type="text"
                                    />
                                </div>
                                <div className={"mt2"}>
                                    <input
                                        onClick={this.onSponsorSubmit}
                                        className={"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"}
                                        type="submit"
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    : null}
                <ul className={"list ma0 fl w-100 mw-100 bg-black-80 flex flex-wrap flex-row justify-around items-center pa2 pv3 mt3"}>
                    {sponsors}
                </ul>
            </div>
        );
    }


};
function getFileExtension(filename) {
    let ext = filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
    return !(ext !== 'png' && ext !== 'jpeg' && ext !== 'jpg' && ext !== 'jpeg' && ext !== 'gif' && ext !== 'webp');
}