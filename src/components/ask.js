import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const GlowingText = styled.h2`
font-family: "Helvetica";
  color: white;
  text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
  animation: glowing 2s infinite;
  
  @keyframes glowing {
    0% {
      text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
    }
    50% {
      text-shadow: none;
    }
    100% {
      text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
    }
  }
`;
const GlowingInput = styled.input`
  background-color: transparent;
  border: 2px solid transparent;
  color: white;
  outline: none;
  padding: 2% 3%;
  border-radius: 5px;
  box-shadow: 0 0 10px white;
  transition: border 0.3s ease-in-out;
  font-family: "Helvetica";

  &::placeholder {
    /* Set the placeholder text color to white */
    color: white;
  }

  &:focus {
    border: 2px solid white;
  }
`;
const GlowingButton = styled.button`
  background-color: #3e363f;
  color: #fff;
  border: none;
  padding: 1% 2%;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  animation: glowing 2s infinite;
  transition: background-color 0.3s ease-in-out;
  font-family: "Helvetica";
  &:hover {
    background-color: #8b0000;
  }

  @keyframes glowing {
    0% {
      text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
    }
    50% {
      text-shadow: none;
    }
    100% {
      text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
    }
  }
`;
const TextareaWithLineHeight = styled.textarea`
  height: 200px;
  width: 1000px;
  line-height: 1.5;
  font-family: Arial, sans-serif;
  color:white;
  background-color: transparent; /* Make the textarea transparent */
  border: 2px solid transparent; /* Set an initial transparent border */
  outline: none; /* Remove the default focus outline */
  padding: 10px; /* Add padding to the textarea */
  border-radius: 5px; /* Add border-radius for rounded corners */
  box-shadow: 0 0 10px white; /* Add a black glow when focused */
  transition: border 0.3s ease-in-out; /* Add a smooth transition for the border */
  font-family: "Helvetica";
  &:focus {
    border: 2px solid white; /* Change the border color when focused */
  }
  &::placeholder {
    /* Set the placeholder text color to white */
    color: white;
  }
`;
const AskAnythingText = styled.h2`
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center items horizontally */
  text-align: center; /* Center text */
  color: white;
  animation: glowing 2s infinite;
  
  @keyframes glowing {
    0% {
      text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
    }
    50% {
      text-shadow: none;
    }
    100% {
      text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
    }
  }

  
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #650000; 

`;
const InnerContainer = styled.div`
  background-color: #171717; /* Set the background color for the inner container */
  padding: 20px; /* Add some padding to the inner container */
  border-radius: 10px; /* Add border-radius for rounded corners */
  border-radius: 5px; /* Add border-radius for rounded corners */
  box-shadow: 0 0 10px white; /* Add a black glow when focused */
  transition: border 0.3s ease-in-out; /* Add a smooth transition for the border */

  &:focus {
    border: 2px solid white; /* Change the border color when focused */
  }

`;



function QuestionForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comment, setComment] = useState('');
  const [submitButtonPressed, setSubmitButtonPressed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    // Create an object with the form data
    const formData = {
      full_name: fullName,
      email: email,
      phone_number: phoneNumber,
      comment: comment,
    };

    // Send a POST request to the Laravel API endpoint
    axios
      .post('http://localhost:8000/api/questions', formData)
      .then((response) => {
        // Handle the success response (e.g., show a success message)
        console.log('Success:', response.data);

        // Optionally, you can reset the form fields
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        
      })
      .catch((error) => {
        // Handle errors (e.g., display validation errors)
        if (error.response) {
          // Server returned an error response (4xx or 5xx)
          console.error('Error:', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something else went wrong
          console.error('Error:', error.message);
        }
      });

    
  };

  return (
    <section id="ask-me">
    <FormContainer>
    <AskAnythingText>Ask me anything</AskAnythingText>
    <InnerContainer>
      <div className="question-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName"><GlowingText>Full Name:</GlowingText></label>
            <GlowingInput
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required={submitButtonPressed}
              placeholder="Enter Full Name" // Add a placeholder
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"><GlowingText>Email:</GlowingText></label>
            <GlowingInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={submitButtonPressed}
              placeholder="Enter Email" // Add a placeholder
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber"><GlowingText>Phone Number:</GlowingText></label>
            <GlowingInput
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required={submitButtonPressed}
              placeholder="Enter Phone Number" // Add a placeholder
            />
          </div>
          <label htmlFor="comment"><GlowingText>Comment or Question</GlowingText></label>
          <div className="form-group">
            <TextareaWithLineHeight
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required={submitButtonPressed}
              placeholder="Enter your comment or question here" // Add a placeholder
            ></TextareaWithLineHeight>
          </div>
          <GlowingButton type="submit" onClick={() => setSubmitButtonPressed(true)}>
            Submit
          </GlowingButton>
        </form>
      </div>
    </InnerContainer>
  </FormContainer>
  </section>
);
}

export default QuestionForm;