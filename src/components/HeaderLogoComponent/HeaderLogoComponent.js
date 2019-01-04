import  React, {Component} from 'react';

class HeaderLogoComponent extends Component {
    constructor(props){
        super(props);

    }
    render() {
        var lineheight={
            lineHeight:'0.65',
        };
        return(
            <div className={"gold b pv1 items-center h-100 flex flex-wrap"}>
                <img className={"h-100 mr2"} src={require('../../images/logo.png')} alt={"logo"}/>
                <span className={"f3-l f4-m f4"} style={lineheight}>
                        3x3 Macedonia <br/>
                        <span className={"f7"} >
                            *official FIBA 3x3 organiser
                        </span>
                    </span>
            </div>
        );
    }

}
export default HeaderLogoComponent;