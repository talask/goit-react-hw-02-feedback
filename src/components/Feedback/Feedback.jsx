import React, { Component } from "react";

export class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        percentage: 0,
      };


      onButtonFeedback = (val) => { 

          this.setState(prevState => { return { [val]: prevState[val] + 1}});   
          this.countTotalFeedback();

      };
  
    countTotalFeedback = () => {
        
        this.setState(prevState => { return { total: prevState.total + 1 }});
        this.countPositiveFeedbackPercentage();

    };

    countPositiveFeedbackPercentage =  () => {
        
        this.setState(state => { return { percentage: Math.round((state.good *100)/state.total)}});

    };

    
    render() {
        const good = this.state.good;
        const neutral = this.state.neutral;
        const bad = this.state.bad;
        const total = this.state.total;
        const percentage = this.state.percentage;

        return (
            <>
        <section>
            <div className="container">
                <p>Please leave feedback</p>
                <div className="wrapper">
                    <button onClick={(e) => this.onButtonFeedback("good")}>Good</button>
                    <button onClick={() => this.onButtonFeedback("neutral")}>Neutral</button>
                    <button onClick={() => this.onButtonFeedback("bad")}>Bad</button>
                </div>
                
            </div>
        </section>
        <section>
        <div className="container">
                <p>Statistics</p>
                    <ul>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                        <li>Total: {total}</li>
                        <li>Positive feedback: {percentage}%</li>
                    </ul>
                
            </div>
        </section>
        </>
        )
    }
}