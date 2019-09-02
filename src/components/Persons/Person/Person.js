import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../hoc/Auxiliary';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering');
        return (
            <React.Fragment>
                    <p onClick={this.props.clicked}>
                        I'm {this.props.name} and I am {this.props.age} years old!
                    </p>
                    <p>{this.props.children}</p>
                    <input
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name}/>

            </React.Fragment>

        );
    }
}

export default Person;