import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
        <div className="wrapper">
            {
            options.map((option,i) => {
                   return (
                        <Button key={i} onClick={() => onLeaveFeedback(option)}>
                            {option[0].toUpperCase() + option.substring(1)}
                        </Button>
                   )
                })
            }
            
        </div>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
}
