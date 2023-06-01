import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
        <div className="wrapper">
            <Button onClick={() => onLeaveFeedback("good")}>Good</Button>
            <Button onClick={() => onLeaveFeedback("neutral")}>Neutral</Button>
            <Button onClick={() => onLeaveFeedback("bad")}>Bad</Button>
        </div>
    )
};