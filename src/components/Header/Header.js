import  React, {Component} from 'react';
import HeaderListItem from './../HeaderListItem/HeaderListItem';
import HeaderMenu from './../HeaderMenu/HeaderMenu';
class Header extends Component{
    constructor(props) {
        super(props);
        this.state={
            nav:['home','news','live','about us'],
            active:'home',
            mobilenav:false,
        }
        this.onMenuClick=this.onMenuClick.bind(this);
    }
    //na resize da se forsira update
    resize = () => this.forceUpdate()
    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }
    onMenuClick=(event)=>{
        this.setState({mobilenav:!this.state.mobilenav});
    }
    render(){
        var nav=this.state.nav.map((link,index)=>{
            return <HeaderListItem key={index} navlink={link} active={this.state.active}/>
        });
        var stajl= {
            top:'4rem',
        }
        return(
            <HeaderMenu onMenuClick={this.onMenuClick} nav={nav} mobilenav={this.state.mobilenav}/>
        );

    }
}
export default Header;