import  React, {Component} from 'react';
import HeaderLogoComponent from "../HeaderLogoComponent/HeaderLogoComponent";
class HeaderMenu extends Component {
    constructor(props){
        super(props);
        this.onMenuClick=this.onMenuClick.bind(this);
    }
    onMenuClick=(event)=>{
        console.log('aa');
        this.props.onMenuClick(event);
    }
    render() {
        var nav=this.props.nav;
        var stajl= {
            top:'4rem',
        }
        var zindex={
            zIndex:'999',
        }
        if(document.body.clientWidth>786) {
            return (
                <div className={"flex w-100 mw-100 ph4 bg-black-80 items-center justify-between h3 fl fixed t-0"} style={zindex}>
                    <HeaderLogoComponent/>
                    <ul className={"list flex flex-wrap flex-row pl0 ttu "}>
                        {nav}
                    </ul>
                </div>
            );
        }else{
            if(this.props.mobilenav===false){
                return (
                    <div className={"flex w-100 mw-100 ph4 bg-black-80 items-center justify-between h3 fl fixed t-0"} style={zindex}>
                        <HeaderLogoComponent/>
                        <i className="fas fa-bars gold f2" onClick={this.onMenuClick}/>
                    </div>
                );
            }else{
                return (
                    <div className={"flex w-100 mw-100 ph4 bg-black-80 items-center justify-between h3 fl fixed t-0"} style={zindex}>
                        <HeaderLogoComponent/>
                        <i className="fas fa-bars gold f2" onClick={this.onMenuClick}/>
                        <ul className={"list flex flex-wrap bg-black-80 ma0 flex-column pa0 pb1 ttu tc absolute right-0 w-100"} style={stajl}>
                            {nav}
                        </ul>
                    </div>
                );
            }
        }
    }
}

export default HeaderMenu;