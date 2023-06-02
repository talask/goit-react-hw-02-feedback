import PropTypes from 'prop-types';
import { CommonSection } from './Section.styled';

export const Section = ({title, children}) => {
    return (
        <CommonSection>
            <div className="container">
                <p>{title}</p> 
                {children}
            </div>
        </CommonSection>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object,
}
