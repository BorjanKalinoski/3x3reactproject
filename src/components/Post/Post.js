import React, { Component } from 'react';

class Post extends Component {
    constructor(props){
        super(props);
        this.state={
            isSelected:false,
        }
    }
    render() {
        // console.log(this.props.data);
        // const {id, title, descr, sdesc, mainimg, post_date} = this.props.data[0];
        var style={
            height:'16vw'
        };
        var pstyle={
            fontSize:'calc(12px + (14 - 12) * (100vw - 350px) / (1200 - 350))',
        };
        var tstyle={
            fontSize:'calc(16px + (18 - 16) * (100vw - 350px) / (1200 - 350))',
        };
        var dstyle={
            fontSize:'calc(10px + (12 - 10) * (100vw - 350px) / (1200 - 350))',
        };
        var imgstyle={
            objectFit:'cover'
        };
        // return(
        //     <div className={"flex flex-nowrap w-100 mw-100 br2 h5 bg-white shadow-1 mv3"}>
        //         <img className={"mw-20 w-20 ma2 br2 ba"} style={imgstyle} src={require("./../../images/logo.png")}
        //              alt="slika"/>
        //         <div className={"mw-80 w-80 ml1 ph1 h-100"}>
        //             <p className={"word-nowrap mw-100 fw5 pa0 ma0 mv1"} style={tstyle}>{title}</p>
        //             <p className={" mw-100 fw5 ma0 pa0 mb1"} style={dstyle}>{post_date}</p>
        //             <p className={"word-nowrap mw-100 ma0 pa0 "} style={pstyle}>{sdesc}</p>
        //         </div>
        //     </div>
        // );

        //Sledno treba ads, pa vo sporedba so toa
        if(document.body.clientWidth>786) {
            return (
                <div className={"flex flex-nowrap w-100 mw-100 br2 h5 bg-white shadow-1 mv3"} style={style}>
                    <img className={"mw-20 w-20 ma2 br2 ba"} style={imgstyle} src={require("./../../images/logo.png")}
                         alt="slika"/>
                    <div className={"mw-80 w-80 ml1 ph1 h-100"}>
                        <p className={"word-nowrap mw-100 fw5 pa0 ma0 mv1"} style={tstyle}>Се врати еден од нашите најголеми таленти, чија што кариера ја насочија повредите</p>
                        <p className={" mw-100 fw5 ma0 pa0 mb1"} style={dstyle}>2018-10-24 13:53</p>
                        <p className={"word-nowrap mw-100 ma0 pa0 "} style={pstyle}>Задоволство gsagasasggasни е да Ви ја
                            претставиме првата 3х3 страница во Република Македонија!Задоволство ни е да Ви ја
                            претставиме првата 3х3 страница во Република Македонија!Задоволство ни е да Ви ја
                            претставиме првата 3х3 страница во Република Македонија!</p>
                    </div>
                </div>
                //    f5-l f6-m f6f5-l f6-m f6
            );
        }else{
            var style={
                // height:'11vw',
                textAlign: 'left',
            };
            return (
                <div className={"flex flex-nowrap flex-column w-100 mw-100 br2 bg-white shadow-1 mv3"} style={style}>
                    <img className={"w-100 mw-100 center vh-50 br2 ba mb1"} style={imgstyle} src={require("./../../images/logo.png")}
                         alt="slika"/>
                    <div className={"mw-100 w-100 ph1 h-100 ws-normal"}>
                        <p className={"word-nowrap mw-100 fw5 pa0 ma0 mv1"} style={tstyle}>DobredojdovЗадоволство ни е да Ви
                            ја претставиме првата 3х3 страница во Република Македонија!te</p>
                        <p className={" mw-100 fw5 ma0 pa0 mb1"} style={dstyle}>2018-10-24 13:53</p>
                        <p className={"word-nowrap mw-100 ma0 pa0 f5-l f6-m f6"} style={pstyle}>Задоволство gsagasasggasни е да Ви ја
                            претставиме првата 3х3 страница во Република Македонија!Задоволство ни е да Ви ја
                            претставиме првата 3х3 страница во Република Македонија!Задоволство ни е да Ви ја
                            претставиме првата 3х3 страница во Република Македонија!</p>
                    </div>
                </div>
            );
       }
    }
}
export default Post;