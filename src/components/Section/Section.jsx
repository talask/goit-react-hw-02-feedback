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