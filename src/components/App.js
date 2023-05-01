import { useState, useEffect } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case 'good':
        console.log("тицьнули на кнопку good");
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        console.log("тицьнули на кнопку neutral");
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        console.log("тицьнули на кнопку bad");
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    setTotal(total => good + bad + neutral)
  }, [good, neutral, bad]);


  // const positivePercentage = () => {

  //   const positivePercentage = Number(((good / totalFeedback()) * 100).toFixed());
  //   return positivePercentage;
  // }
  

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]} onClick={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        </Section>
        {/* <Section title="Statistics">
          {totalFeedback() !== 0
            ? <Statistics good={good} neutral={neutral} bad={bad}  />
            : <Notification message="There is no feedback" />
          }
        </Section> */}
        <GlobalStyle />
      </Layout>
  );
};
