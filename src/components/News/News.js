import React, { Component } from 'react';
import Post from './../Post/Post';
import SubmitPost from "./SubmitPost/SubmitPost";

class News extends Component {
    constructor(props){
        super(props);
        this.state={
            postdata:[]
        };
        fetch('https://evening-temple-81474.herokuapp.com/getposts',{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        })
            .then(response=>{
            return response.json();
        })
            .then(posts=>{
            this.setState({postdata:posts});
        })
            .catch(err=>console.log(err));
    }

    resize = () => this.props.resize;
    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }
    render() {
        const posts = this.state.postdata.map(
            post => {
                //post[0] e od posts, post[1] se slikite
                return <Post data={post}/>
            }
        );
        // return(<div className={"w-70 mw-70 fl ml5"}>{posts}</div>);
        var stajl={
            marginLeft:'3.3333%',
        };
        var containerClass;
        var h1Class;
        if(document.body.clientWidth>786) {
            containerClass="fl mw-70 w-70 mt3 pa2 br2 bg-near-white shadow-2";
            h1Class="f2-m f2 mv1";
        }else{
            containerClass="fl ml3 mt3 mw-95 w-95 pv1 ph2 br2 bg-near-white shadow-2";
            h1Class="f2-m f2 mv1 tc";
        }
        return (
            <div className={containerClass} style={stajl}>
                <h1 className={h1Class}>News</h1>
                {
                    this.props.isAdmin===true
                        ?
                        <SubmitPost/>
                        :null
                        }
                <Post/>
                <Post/>
                <button className={"tc"}>More</button>
            </div>
        );
    }
}
export default News;