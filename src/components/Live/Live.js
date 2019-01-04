import React, {Component} from 'react';
import SubmitLive from "./SubmtiLive/SubmitLive";

export default class Live extends Component{
    constructor(props){
        super(props);
    }
    render(){
        var style={
        }
        var h1Class;
        var containerClass;
        var iframeClass;
        if(document.body.clientWidth>786){
            containerClass="fl w-70 mw-70 vh-75 mt3 pa2 br2 bg-near-white shadow-2";
            h1Class="f2-l f3-m f3 mb2 mt0";
            iframeClass="w-100 h-90";
            style=          {  marginLeft:'3.33333%'}
        }
        else {
            containerClass = "fl w-95 mw-95 vh-50 ml3 mt3 pa1 br2 bg-near-white shadow-2";
            h1Class="f3-m f3 mv2 tc";
            iframeClass="w-100 h-85";

        }
        return(
            <div className={containerClass} style={style}>
                <h1 className={h1Class}>Watch LIVE</h1>
                {
                    this.props.isAdmin===true
                    ?
                        <SubmitLive/>
                        :null
                }
                <iframe title={"live"} className={iframeClass} src="https://www.youtube.com/embed/fwW-JPqBDrM" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
        );
    }
}