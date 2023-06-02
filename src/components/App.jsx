import React, { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
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
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={["good", "neutral", "bad"]} 
          onLeaveFeedback={this.onButtonFeedback}
          />
      </Section>
      { total ? <Section title="Statistics">
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={total} 
          positivePercentage={percentage}
        /> 
      </Section> : <Notification message="There is no feedback"/>
      }
    </>
    )
  }
};
