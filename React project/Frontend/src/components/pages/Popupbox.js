import  React , {useState , useEffect}from 'react';
import "./Popupbox.css";
import { useNavigate } from 'react-router-dom';


const Popupbox = () => {

    const navi = useNavigate();

    const questions = [
		{
			questionText: 'What is the value 2+2+2+2+2',
			answerOptions: [
				{ answerText: '9', isCorrect: false },
				{ answerText: '101', isCorrect: false },
				{ answerText: '10', isCorrect: true },
				{ answerText: '11', isCorrect: false },
			],
		},
		{
			questionText: 'What is the value 2+2+2+2+2',
			answerOptions: [
				{ answerText: '9', isCorrect: false },
				{ answerText: '101', isCorrect: false },
				{ answerText: '10', isCorrect: true },
				{ answerText: '11', isCorrect: false },
			],
		},
		{
			questionText: 'What is the value 2+2+2+2+2',
			answerOptions: [
				{ answerText: '9', isCorrect: false },
				{ answerText: '101', isCorrect: false },
				{ answerText: '10', isCorrect: true },
				{ answerText: '11', isCorrect: false },
			],
		},
		{
			questionText: 'What is the value 2+2+2+2+2',
			answerOptions: [
				{ answerText: '9', isCorrect: false },
				{ answerText: '101', isCorrect: false },
				{ answerText: '10', isCorrect: true },
				{ answerText: '11', isCorrect: false },
			],
		},
		{
			questionText: 'What is the value 2+2+2+2+2',
			answerOptions: [
				{ answerText: '9', isCorrect: false },
				{ answerText: '101', isCorrect: false },
				{ answerText: '10', isCorrect: true },
				{ answerText: '11', isCorrect: false },
			],
		},
		{
			questionText: 'what is your nationality ?',
			answerOptions: [
				{ answerText: 'India', isCorrect: true },
				{ answerText: 'Pakisthan', isCorrect: true },
				{ answerText: 'Russia', isCorrect: true },
				{ answerText: 'China', isCorrect: true },
			],
		},
		{
			questionText: 'What is the value 2+2+2+2+2',
			answerOptions: [
				{ answerText: '9', isCorrect: false },
				{ answerText: '101', isCorrect: false },
				{ answerText: '10', isCorrect: true },
				{ answerText: '11', isCorrect: false },
			],
		},
		{
			questionText: 'What is the value 2+2+2+2+2',
			answerOptions: [
				{ answerText: '9', isCorrect: false },
				{ answerText: '101', isCorrect: false },
				{ answerText: '10', isCorrect: true },
				{ answerText: '11', isCorrect: false },
			],
		},
        {
			questionText: 'What is the value 2+2+2+2+2',
			answerOptions: [
				{ answerText: '9', isCorrect: false },
				{ answerText: '101', isCorrect: false },
				{ answerText: '10', isCorrect: true },
				{ answerText: '11', isCorrect: false },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    const usernames = ["achuth","vera","venkata","naga","durga"];
    var randval = usernames[Math.floor(Math.random() * usernames.length)];
    const getuserdetails = (event) => {
        if(score === 5){
            event.preventDefault();
        alert("your user name is : " + randval);
        navi('/login');
        } else{
            alert("you answered wrongly");
        }
        
    }


  return (
    <div className="appie">
        {showScore ? (
				<div className='score-section'>
					Submit the Answers
                    <button onClick={getuserdetails}>
                        submit
                    </button>
				</div>
			) : (
				<>
					<div className='question-section'>
                    <div className='question-count'>
							<span>Answer the Following Questions</span>
						</div>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
	</div>

  )
}

export default Popupbox