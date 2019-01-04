import React, {Component} from 'react';

export default class SocialMediaItem extends Component {
    constructor(props){
        super(props);
        this.state={
            hover:false,
        }
    }
    toggleHover =()=>{
        this.setState({hover:!this.state.hover});
    }
    render() {
        let widths={
            width:'22.5%',
        }
        let linkColor;
        if(this.state.hover){
            linkColor={
                color:'white',
                backgroundColor: this.props.colors,
                borderColor:this.props.colors,

            }
        }else{
            linkColor={
                backgroundColor: 'white',
                color:this.props.colors,
                borderColor:this.props.colors,
            }
        }
        let bgColor={
           backgroundColor: this.props.colors,
        }
        let link='http://www.'+this.props.media+'.com';

        let classes;
        if(this.props.media==='Facebook'){
            classes='fab f1 fa-facebook-square';
        }else{
            classes='fab f1 fa-'+this.props.media.toLowerCase();
        }
        let msg;
        if(this.props.media==='Facebook'){
            msg='Like us';
        }else if(this.props.media==='Youtube')
        { msg='Subscribe';
        }else if(this.props.media==='Twitter' || this.props.media==='Instagram'){
            msg='Follow us';
        }

        return (
            <li className={"w-22-l w-45-m w-90-min shadow-5 relative white f4 b mv3 pv4 ph2 flex flex-row items-center align-center justify-center"} style={bgColor}>
                <i className={classes}/>
                <p className={"f4-l f4-m f4 ml3"}>
                    {this.props.media}
                </p>
                <a href={link} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} className={"bg-white link absolute bottom--1 right-2 ph3 f5 b pv2 ba bw1 shadow-3"} style={linkColor}>
                    {msg}
                </a>
            </li>
        );

    }

}