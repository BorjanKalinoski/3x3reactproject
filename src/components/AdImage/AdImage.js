import React, {Component} from 'react';
class AdImage extends Component {
    constructor(props) {
        super(props);
        this.state={
            src:'',
            url:'',
        };
        fetch('https://evening-temple-81474.herokuapp.com/ad/'+this.props.id,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response=>{
                response.json().then(img => {
                }).catch(err=>console.log(err));
            }).catch(err=>console.log(err));
    }
    componentDidMount() {
    }
    omImageClick=()=> {
        if (this.props.url !== null) {
            window.location.href = this.props.url;
        }
    };
    render() {
        var src = window.location.origin + '/images/reklami/'+this.props.imgname;
        return (
            <li className={"list pl0"}>
                <img src={src} onClick={this.omImageClick} alt={"a"} className={"mw-100 w-100 pointer"}/>
            </li>
        );
    }

}
export default AdImage;