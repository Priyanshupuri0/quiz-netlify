import React, { useState } from 'react';
import './App.css';
import './design.css';
import Navbar from './Navbar';
import LeftPanel from './LeftPanel';
import QuizPanel from './QuizPanel';
import Check from './Check';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  const quest = [
    {
    question: "What is the capital of India?",
    option1: "Mumbai",
    option2: "Kolkata",
    option3: "New Delhi",
    option4: "Lucknow",
    answer: "New Delhi"
  },
  {
    question: "What are you doing?",
    option1: 1,
    option2: 2,
    option3: 3,
    option4: 4,
    answer: 2
  },
  {
    question: "Are you there?",
    option1: 5,
    option2: 6,
    option3: 7,
    option4: 8,
    answer: 7
  }
  ]
const incrementQuest = () => {
  if (count < quest.length - 1) {
    setCount(count + 1);
    for (let i = 0; i < 4; i++) {
      document.getElementById(`opt${i}`).style.border = "";
      document.getElementById(`opt${i}`).disabled = false;
    }
    document.getElementById('quiz-box1').style.animation = "";
		document.getElementById('quiz-box2').style.animation = "";
  }
}
const decrementQuest = () => {
  if (count <= quest.length && count > 0)
    setCount(count - 1);
    for (let i = 0; i < 4; i++) {
      document.getElementById(`opt${i}`).style.border = "";
      document.getElementById(`opt${i}`).disabled = false;
    }
    document.getElementById('quiz-box1').style.animation = "";
    document.getElementById('quiz-box2').style.animation = "";
}
const [score, setScore] = useState(0);
let count_length = [count + 1, quest.length];
const updateScore = (correct, wrong) => {
  if (correct)
    setScore(score + 1);
  else
    setScore(score - 1);
}
const checkScore = () => {
  return (<h1>Your Total Score is: {score}</h1>);
}
return (
  // <Router>
    <>
    {/* // <Router> */}
    <Navbar /><div className='main_box container-fluid'>
      <LeftPanel />
      <QuizPanel count={count} fetchQuestion={quest} count_length={count_length} score={updateScore} inc={incrementQuest} dec={decrementQuest} />
      <Check checkScore={checkScore} />
      {/* <Routes>
      <Route path='/' element={<QuizPanel count = {count} fetchQuestion = {quest} count_length={count_length} score={updateScore} inc={incrementQuest} dec={decrementQuest} />} />
      <Route path="Check" element={<Check checkScore={checkScore} />} />
    </Routes> */}
    </div></>
  // </Router>
);
}

export default App;
