import React from 'react';

const Question_Item = ({question,answer}) => {
    const handleClick =(e)=>{
        const target= e.target.closest(".question").querySelector(".answer")
        console.log(target.getAttribute("choosed")||false)
        if(target.getAttribute("choosed")==="true"){
            target.style="display:none"
            target.setAttribute("choosed",false)
        }else{
            target.style="display:block"
            target.setAttribute("choosed",true)
        }
    }
  return <div className="question">
      <button  onClick ={handleClick} className="button_question">{question}</button>
      <div className="answer">
          {answer}
      </div>
  </div>;
};

export default Question_Item;
