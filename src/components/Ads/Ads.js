import React,{Component} from 'react';
import AdImage from './../AdImage/AdImage';
class Ads extends Component {
    constructor(props){
        super(props);
        this.state={
            ads:[],
        };

        fetch('https://api3x3macedonia.herokuapp.com/ads',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response=> response.json())
            .then(data=>{
                    let ads=[];
                    console.log(data);
                    data.map(ad=>{
                       return ads.push(ad);
                    });
                    this.setState({ads:ads});
                }
            )
            .catch(err=>console.log(err));
    }
    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    resize = () => this.props.resize;

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    render() {
        console.log(this.state.ads);
        let ads = this.state.ads.map((ad,index) => {
                return <AdImage key={index} id={ad.id} imgname={ad.file} url={ad.url} isAdmin={this.props.isAdmin}/>;
            }
        );
        var stajl={};
        var containerClass;
        if(document.body.clientWidth>786){
            stajl={marginRight:'3.33333%'};
            containerClass="fr w-20 mw-20 bg-near-white shadow-2 mt3 pa1 br2";
        }
        else{
            containerClass="fl w-95 mw-95 ml3 bg-near-white shadow-2 mt3 pa1 br2";
        }
            return (
                <div className={containerClass} style={stajl} >
                    {this.props.isAdmin===true?
                     <div className={"bw1 ba br2 pa1 w-100 center mv2"}>
                      <form className={"measure center w-100 mw-100"} action="">
                         <fieldset className="ba b--transparent ph0 mh0">
                             <legend className={"f4 fw6 ph0 mh0 tc"}>Submit Ad</legend>
                             <div className={"mt2"}>
                                 <label htmlFor="adimage" className="db fw6 lh-copy f6">Ad Image</label>
                                 <input
                                     name={"adimage"}
                                     onChange={this.onAdImageChange}
                                     className={"pv1 ba bg-transparent hover-bg-black hover-white mw-100 w-100"}
                                     type="file"
                                 />
                             </div>
                             <div className={"mt2"}>
                                 <label htmlFor="adurl" className="db fw6 lh-copy f6">Ad URL</label>
                                 <input
                                     name={"adurl"}
                                     onChange={this.onAdurlChange}
                                     className={"pv1 ba bg-transparent hover-bg-black hover-white mw-100 w-100"}
                                     type="text"
                                 />
                             </div>
                             <div className={"mt2"}>
                                 <input
                                     onClick={this.onAdFormDataSubmit}
                                     className={"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"}
                                     type="submit"
                                 />
                             </div>
                         </fieldset>
                      </form>
                     </div>:null}
                     <ul className={"pa0 ma0"}>
                        {ads}
                     </ul>
                </div>);
    }

    onAdImageChange=(event)=>{
        this.setState({adimage:event.target.files[0]});
    };

    onAdurlChange=(event)=>{
        this.setState({adurl:event.target.value});
    };
    onAdFormDataSubmit = (event) => {
        event.preventDefault();
        const {adimage, adurl} = this.state;

        if(!adimage.name) {
            return false;
        }
        if(adimage.type.substr(0,5).toLowerCase() !== 'image'){
            console.log('You can only upload images');
            return false;
        }
        let ext=getFileExtension(adimage.name);
        if(ext===false){
            console.log('You can only upload images');
            return false;
        }
        const data=new FormData();
        data.append('adimage',adimage);
        data.append('adurl',adurl);

        fetch('https://api3x3macedonia.herokuapp.com/uploadad',{
            method:'POST',
            body:data,
        }).then((response)=>{
            response.json().then(ad=>{
                let ads=this.state.ads;
                ads=[...ads,{
                    image:ad.image,
                    url:ad.url,
                    id:ad.id
                }];
                this.setState({ads:ads});
            })
                .catch(err=>console.log('failed to upload image',err));
        }).catch(err=>{
            console.log('error uploading image',err);
        });
    };
}
function getFileExtension(filename) {
    let ext= filename.slice((filename.lastIndexOf('.') - 1 >>> 0) + 2).toLowerCase();
    return !(ext !== 'png' && ext !== 'jpeg' && ext !== 'jpg' && ext !== 'jpeg' && ext !== 'gif' && ext!=='webp');
}
export default Ads;