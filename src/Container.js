import React from 'react';

const Container = ({ children }) => {
    return (
        <div style={{ border: '1px solid black', padding: '16px', margin: '16px' }}>
            {children}
        </div>
    );
};
export default Container;
