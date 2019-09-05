import React from 'react';

const withClass = (WrappedComponent, className) => {
    // Use spread operator (...) to pass all props to the WrappedComponent
    return props => (
        <div className={className}>
            <WrappedComponent {...props}>

            </WrappedComponent>
        </div>
    );
};

export default withClass;