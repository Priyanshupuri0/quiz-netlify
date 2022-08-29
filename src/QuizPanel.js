import React from 'react'

export default function QuizPanel(props) {
    
	const checkAnswer= (val) =>{
		if(props.fetchQuestion[props.count][`option${val+1}`]=== props.fetchQuestion[props.count].answer)
		{
			document.getElementById(`opt${val}`).style.border = '2px solid green';
			document.getElementById('quiz-box1').style.animation = "success 1s 3";
			for(let i=0; i<4; i++)
			{
				if(i !== val)
				document.getElementById(`opt${i}`).style.border = "2px solid red";
				document.getElementById(`opt${i}`).disabled = true;
			}
			props.score(true);
		}
		else {
			document.getElementById(`opt${val}`).style.border = "2px solid red";
			document.getElementById('quiz-box2').style.animation = "failure 1s 3";
			for(let i=0; i<4; i++)
			document.getElementById(`opt${i}`).disabled = true;
			props.score(false);
		}
	}
	
    return (
        <>
            <div className="Quiz_panel bg-image">
				<h1 className="mt-1">Quiz Game</h1>
				<div className="quiz-box mask">
					<h2 className="question">{props.fetchQuestion[`${props.count}`].question}</h2>
					<div className="option-box">
					<button className="btn btn-light rounded-pill" id="opt0" onClick={() => checkAnswer(0)}>{props.fetchQuestion[`${props.count}`].option1}</button>
					<button className="btn btn-light rounded-pill" id="opt1" onClick={() => checkAnswer(1)}>{props.fetchQuestion[`${props.count}`].option2}</button>
					<button className="btn btn-light rounded-pill" id="opt2" onClick={() => checkAnswer(2)}>{props.fetchQuestion[`${props.count}`].option3}</button>
					<button className="btn btn-light rounded-pill" id="opt3" onClick={() => checkAnswer(3)}>{props.fetchQuestion[`${props.count}`].option4}</button>
					</div>
					<div className="question-number" style={{fontSize: "40px", position: "relative", top: "30%"}}>
						<i className="fa-solid fa-angle-left" style={{cursor: "pointer"}} onClick={props.dec}></i> {props.count_length[0]} / {props.count_length[1]} <i className="fa-solid fa-angle-right" style={{cursor: "pointer"}} onClick={props.inc}></i>
					</div>
				</div>
				<div className="quiz-box-copy1" id='quiz-box1'>
				</div>
				<div className="quiz-box-copy2" id='quiz-box2'>
				</div>
			</div>
        </>
    )
}
