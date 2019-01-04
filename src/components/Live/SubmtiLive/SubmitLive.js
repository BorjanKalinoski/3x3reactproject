import React,{Component} from 'react';

export default class SubmitLive extends Component {
    constructor(props) {
        super(props);
        this.state={
            url:'',
        }
    }

    render() {
        return (
            <div className={"mv2"}>
                <form className={"ba bw1 br2 measure center pa2"}>
                    <fieldset className={"ba b--transparent ph0 mh0"}>
                    <legend className={"f4 fw6 ph0 mh0 tc"}>Submit a URL</legend>
                        <div>
                            <input
                                className={"pa2 mv1 input-reset ba bg-transparent hover-bg-black hover-white w-100"}
                                type="text" name={"url"}
                            />
                        </div>
                        <input
                            type="submit"
                        />
                    </fieldset>
                </form>
            </div>
        );
    }


};