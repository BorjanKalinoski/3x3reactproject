import React, {Component} from 'react';

function getFileExtension(filename) {
    let ext= filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
    return !(ext !== 'png' && ext !== 'jpeg' && ext !== 'jpg' && ext !== 'jpeg' && ext !== 'tif' && ext !== 'gif');
}
export default class SubmitPost extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            sdesc:'',
            descr:'',
            mainimg:{},
            images:[]
        }
    }

    render() {
        return (
            <div className={"bw1 ba br2 pa1 w-50 center"}>
                <form className={"measure center w-100 mw-100"} action="">
                    <fieldset className="ba b--transparent ph0 mh0">
                        <legend className={"f4 fw6 ph0 mh0 tc"}>Submit a post</legend>
                        <div className={"mt2"}>
                            <label htmlFor="title" className="db fw6 lh-copy f6"> Title</label>
                            <input
                                required={true}
                                onChange={this.onInputChange}
                                name="title"
                                className={"pa1 input-reset ba bg-transparent hover-bg-black hover-white mw-100 w-100"}
                                type="text"/>
                        </div>
                        <div className={"mv1"}>
                            <label htmlFor="shortdesc" className="db fw6 lh-copy f6">Short Description</label>
                            <textarea
                                required={true}
                                onChange={this.onInputChange}
                                name={"sdesc"}
                                className={"pa1 input-reset ba bg-transparent hover-bg-black hover-white mw-100 w-100"}
                                type="text"/>
                        </div>
                        <div className={"mv1"}>
                            <label htmlFor="descr" className="db fw6 lh-copy f6">Description</label>
                            <textarea
                                required={true}
                                onChange={this.onInputChange}
                                name={"descr"}
                                className={"pa1 input-reset ba bg-transparent hover-bg-black hover-white mw-100 w-100"}
                            />
                        </div>
                        <div className={"mv1"}>
                            <label htmlFor="mainimg" className="db fw6 lh-copy f6">Main Image</label>
                            <input
                                required={true}
                                onChange={this.onMainimgChange}
                                className={"pa1 ba bg-transparent hover-bg-black hover-white mw-100 w-100"}
                                type="file"
                                name={"mainimg"}
                            />
                        </div>
                        <div className={"mv3"}>
                            <label htmlFor="images" className="db fw6 lh-copy f6">Images</label>
                            <input
                                required={true}
                                onChange={this.onImagesChange}
                                className={"pa1 ba bg-transparent hover-bg-black hover-white mw-100 w-100"}
                                type="file"
                                name="images"
                                multiple={true}
                            />
                        </div>
                        <div className={"mv3"}>
                            <input
                                type="submit"
                                onClick={this.onPostSubmit}
                                className={"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"}
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
        );

    }
    onMainimgChange=(event)=>{
        this.setState({mainimg:event.target.files[0]});
    };
    onInputChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    };
    onPostSubmit=(event)=>{
        event.preventDefault();
        var {title, sdesc, descr, mainimg, images}=this.state;
        let adjimages=[];
        if(!title || !sdesc || !descr || !mainimg.name || images.length===0) {
            return false;
        }
        if(mainimg.type.substr(0,5) !== 'image'){
            return false;
        }
        let ext=getFileExtension(mainimg.name);
        if(ext===false){
            return false;
        }

        mainimg={
            type:mainimg.type,
            name:mainimg.name
        };
        let allow=1;
        for (let i of Object.keys(images)) {
            if(images[i].type.substring(0,5)!=='image'){
                allow=0;
                return false;
            }
            ext=getFileExtension(images[i].name);
            if(ext===false){
                return false;
            }
            adjimages.push({
                type: images[i].type,
                name:images[i].name,
            });
        }

        if(!allow){
            return false;
        }

        fetch('http://localhost:3001/post',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body:JSON.stringify({
                title:title,
                sdesc:sdesc,
                descr:descr,
                mainimg:mainimg,
                images:adjimages,
                post_date:new Date()
            })
        }).then(response=>response.json())
            .then(data=>console.log(data))
            .catch(err=>console.log(err));
    };
    onImagesChange=(event)=>{
        this.setState({images:event.target.files});
    };
};
