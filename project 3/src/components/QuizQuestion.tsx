import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  onAnswer: (isCorrect: boolean) => void;
  showResults: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  questionNumber, 
  onAnswer,
  showResults
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  
  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
  };
  
  const handleSubmit = () => {
    if (!selectedOption || isAnswered) return;
    
    const isCorrect = selectedOption === question.correctAnswer;
    setIsAnswered(true);
    onAnswer(isCorrect);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-start mb-4">
        <span className="bg-blue-100 text-blue-800 font-semibold rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          {questionNumber}
        </span>
        <h3 className="text-lg font-medium">{question.text}</h3>
      </div>
      
      <div className="space-y-3 mb-6 pl-11">
        {question.options.map((option) => (
          <div 
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={`p-3 border rounded-md cursor-pointer flex items-center ${
              selectedOption === option 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300 hover:border-gray-400'
            } ${
              showResults && option === question.correctAnswer
                ? 'border-green-500 bg-green-50'
                : showResults && selectedOption === option && option !== question.correctAnswer
                ? 'border-red-500 bg-red-50'
                : ''
            }`}
          >
            <div className={`w-5 h-5 rounded-full border mr-3 flex-shrink-0 ${
              selectedOption === option 
                ? 'border-blue-500 bg-blue-500' 
                : 'border-gray-400'
            } ${
              showResults && option === question.correctAnswer
                ? 'border-green-500 bg-green-500'
                : showResults && selectedOption === option && option !== question.correctAnswer
                ? 'border-red-500 bg-red-500'
                : ''
            }`}>
              {selectedOption === option && !showResults && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
              {showResults && option === question.correctAnswer && (
                <CheckCircle size={20} className="text-white" />
              )}
              {showResults && selectedOption === option && option !== question.correctAnswer && (
                <XCircle size={20} className="text-white" />
              )}
            </div>
            <span>{option}</span>
          </div>
        ))}
      </div>
      
      {showResults && (
        <div className={`mt-4 p-4 rounded-md ${
          selectedOption === question.correctAnswer 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          <div className="font-medium mb-1">
            {selectedOption === question.correctAnswer 
              ? 'Correct!' 
              : 'Incorrect!'}
          </div>
          <p>{question.explanation}</p>
        </div>
      )}
      
      {!isAnswered && (
        <div className="flex justify-end">
          <button 
            onClick={handleSubmit}
            disabled={!selectedOption}
            className={`btn ${
              selectedOption 
                ? 'btn-primary' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;