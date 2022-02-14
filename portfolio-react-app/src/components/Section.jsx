import React from 'react';
import classNames from 'classnames';

function Section(props) {
    // var sectionClasses = classNames("Section", {props.align}); //  HELP!!!
    return (
        <div className="Section">
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    )
}

export default Section;
