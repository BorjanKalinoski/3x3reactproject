import React, {Component} from 'react';
class AdImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: true
        };
    }

    onDeleteImage = () => {
        fetch(`https://api3x3macedonia.herokuapp.com/ad/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        }).then(response => response.json())
            .then(data => {
                this.setState({load: false});
            }).catch(err => console.log('err is', err));
    };
    render() {
        if (this.state.load === false) {
            return null;
        }
        return (
            <li className={"list pl0 relative"}>
                {this.props.isAdmin===true
                    ?<i onClick={this.onDeleteImage} className="fas fa-trash-alt pointer f4 absolute top-0 right-0 dark-red mt2 mr2 grow-large"/>
                    :null
                }
                    <a href={this.props.url}>
                    <img
                        className={"pointer of-contain"}
                        src={"https://api3x3macedonia.herokuapp.com/ad/" + this.props.id}
                        alt={this.props.id}
                        onClick={this.onImageClick}
                        onError={(e) => {
                            this.setState({load: false});
                        }}
                    />
                </a>
            </li>
        );
    }
}
export default AdImage;