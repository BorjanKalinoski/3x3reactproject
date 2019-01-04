import React,{Component} from 'react';
import EventListItem from "./EventListItem/EventListItem";
import EventGallery from "./EventGallery";

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likey:[['Location','Skopje'],['Date From','10.10.2010'],['Date to','10.12.2010']
                ,['Category','Kadeti'],[ 'Number of teams','12'],['Short description','aa']],
        };
    }

    render() {
        var li=this.state.likey.map(
            (li,index)=>{
                return <EventListItem key={index} listkey={li[0]} listvalue={li[1]}/>
            }
        )
        var containerClass;
        var style;
        var ulstyle;
        if(document.body.clientWidth>786){
            containerClass="w-60 mw-60 fl flex flex-row flex-wrap br2 justify-between pv1 ph4 shadow-2 bg-near-white mt3 ";
            style={marginLeft:'3.3333%'};
            ulstyle="list pl0";
        }else{
            containerClass="w-95 mw-95 fl flex flex-column flex-wrap br2 justify-center pv1 ph3 shadow-2 bg-near-white mt3 ";
            style={marginLeft:'3.3333%'};
            ulstyle="list pl0 m-auto";

        }
        return (
            //ml 3.3333%
            <div className={containerClass} style={style}>
                <h1 className={"f2-l f3-m f3 mv1 tc w-100"}>Event Title Here </h1>
                <hr className={"w-100 mw-100"}/>
                <ul className={ulstyle}>
                    {li}
                    {/*<span>* povekje info na kurac palac</span>*/}
                </ul>
                <img src={require('./../../images/logo.png')} className={"0 of-contain"} alt="elogo"/>
                <hr className={"w-100 mw-100"}/>
                <EventGallery/>
            </div>
        );
        {/*<div className={"w-95 mw-95 fl flex flex-column flex-wrap br2 justify-center pv1 ph3 shadow-2 bg-near-white mt3 ml3"}>*/}
            {/*<h1 className={"f3-m f3 mv1 tc w-100"}>Event Title Here </h1>*/}
            {/*<hr className={"w-100 mw-100"}/>*/}
            {/*<ul className={"list pl0 m-auto"}>*/}
                {/*{li}*/}
            {/*</ul>*/}

            {/*/!*<span>* povekje info na kurac palac</span>*!/*/}
            {/*<img src={require('./../../images/logo.png')} className={"of-contain"} alt="elogo"/>*/}
            {/*<hr className={"w-100 mw-100"}/>*/}

            {/*<EventGallery/>*/}
        {/*</div>*/}
        if(document.body.clientWidth>786) {
            return (
                //ml 3.3333%
                <div className={"w-60 mw-60 fl flex flex-row flex-wrap br2 justify-between pv1 ph4 shadow-2 bg-near-white mt3 ml5"}>
                    <h1 className={"f2-l f3-m f3 mv1 tc w-100"}>Event Title Here </h1>
                    <hr className={"w-100 mw-100"}/>
                    <ul className={"list pl0"}>
                        {li}
                        {/*<span>* povekje info na kurac palac</span>*/}
                    </ul>

                    <img src={require('./../../images/logo.png')} className={"0 of-contain"} alt="elogo"/>
                    {/*<EventGallery/>*/}
                </div>
            );
        }else{
            return (
                //ml 3.3333%
                <div className={"w-95 mw-95 fl flex flex-column flex-wrap br2 justify-center pv1 ph3 shadow-2 bg-near-white mt3 ml3"}>
                    <h1 className={"f3-m f3 mv1 tc w-100"}>Event Title Here </h1>
                    <hr className={"w-100 mw-100"}/>
                    <ul className={"list pl0 m-auto"}>
                        {li}
                    </ul>

                    {/*<span>* povekje info na kurac palac</span>*/}
                    <img src={require('./../../images/logo.png')} className={"of-contain"} alt="elogo"/>
                    <hr className={"w-100 mw-100"}/>

                    {/*<EventGallery images={['s']}/>*/}
                </div>
            );
        }
    }


}