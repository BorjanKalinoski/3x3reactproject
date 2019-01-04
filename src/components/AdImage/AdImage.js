import React, {Component} from 'react';
class AdImage extends Component {
    constructor(props) {
        super(props);
        this.state={
            src:'',
            url:'',
        };
        // console.log('EEEEEEEEEEEEEEEE',this.props);
        fetch('http://localhost:3001/ad/'+this.props.id,{
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
        // fetch('http://localhost:3001/ad/')
    }
    onImageClikc=()=> {
        if (this.props.url !== null) {
            window.location.href = this.props.url;
        }
    }
    render() {
        var src = window.location.origin + '/images/reklami/'+this.props.imgname;
        return (
            <li className={"list pl0"}>
                <img src={src} onClick={this.onImageClick} alt={"a"} className={"mw-100 w-100 pointer"}/>
            </li>
        );
    }

}
export default AdImage;