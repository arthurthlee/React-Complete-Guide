import React, { PureComponent } from 'react';
import Person from './Person/Person'


// PureComponent = Component with a complete props check for shouldComponentUpdate
class Persons extends PureComponent {
    //static getDerivedStateFromProps(props, state) {
    //    console.log('[Persons.js] getDerivedStateFromProps');
    //    return state;
    //}
    //componentWillReceiveProps(props) {
    //    console.log('[Persons.js] componentWillReceiveProps');
    //}

    // Using this makes React efficient because then the virtual DOM knows that it doesn't need to
    // rerender the Persons if Persons didn't change
    //shouldComponentUpdate(nextProps, nextState) {
    //    console.log('[Persons.js] shouldComponentUpdate');
    //    if (
    //        nextProps.persons !== this.props.persons ||
    //        nextProps.changed !== this.props.changed ||
    //        nextProps.clicked !== this.props.clicked
    //        ) {
    //        return true;
    //    }
    //    else {
    //        return false;
    //    }
    //}

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (<Person
            key={person.id}
            clicked={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            changed={(event) => this.props.changed(event, person.id)}/>)
        });
    };
}

export default Persons;