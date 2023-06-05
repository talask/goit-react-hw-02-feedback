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
  };

  onButtonFeedback = (val) => { 

    this.setState(prevState => { return { [val]: prevState[val] + 1}});   
    this.countTotalFeedback();

  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;  
    const total = good + neutral + bad; 
    return total;
  };

  countPositiveFeedbackPercentage =  (total) => {
    const {good} = this.state;
    const percentage = Math.round((good *100)/total);
    return percentage;
  };

  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;

    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={["good", "neutral", "bad"]} 
          onLeaveFeedback={this.onButtonFeedback}
          />
      </Section>
      { this.countTotalFeedback() ? <Section title="Statistics">
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={this.countTotalFeedback()} 
          positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}
        /> 
      </Section> : <Notification message="There is no feedback"/>
      }
    </>
    )
  }
};
