import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'
import authContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = authContext;

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log('Authenticated: ' + this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering');
        return (
            <Aux>
                    {this.context.authenticated ? <p>Authenticated</p> : <p> Please Log in</p>}
                <p onClick={this.props.clicked}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    ref={this.inputElementRef}
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    onChange={this.props.changed}
                    value={this.props.name}/>

            </Aux>

        );
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default withClass(Person, classes.Person);