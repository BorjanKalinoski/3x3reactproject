import React, {Component} from 'react';
import GalleryImage from "../GalleryImage/GalleryImage";

export default class EventGallery extends Component {
    constructor(props) {
        super(props);
        this.state={
            images:[]
        };
        if(this.props.whatfor==='aboutus'){
            fetch('http://localhost:3001/aboutus',{
                method:'GET',
                headers:{
                    'Content-type':'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(response=>response.json())
                .then(data=>{
                    let images=[];
                    data.map(img=>{
                      return  images.push(img.image);
                    });
                    this.setState({images:images});
                }).catch(err=>console.log(err));
        }
    }

    render() {
        if(this.props.whatfor==='aboutus') {
            let images = this.state.images.map(img => {
                return <GalleryImage src={img} whatfor={this.props.whatfor}/>
            });
            return (
                <div className={"mw-100 w-100 flex flex-wrap justify-evenly"}>
                    {images}
                </div>
            );
        }
        return null;
    }


};