import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

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
const TextareaWithLineHeight = styled.textarea`
font-family: "Helvetica";
  color:white;
  background-color: transparent; /* Make the textarea transparent */
  border: 2px solid transparent; /* Set an initial transparent border */
  outline: none; /* Remove the default focus outline */
  padding: 10px; /* Add padding to the textarea */
  border-radius: 5px; /* Add border-radius for rounded corners */
  box-shadow: 0 0 10px black; /* Add a black glow when focused */
  transition: border 0.3s ease-in-out; /* Add a smooth transition for the border */

  &:focus {
    border: 2px solid black; /* Change the border color when focused */
  }
`;
const GlowingButton = styled.button`
  background-color: #3e363f;
  color: #fff;
  border: none;
  padding: 5px 10px;
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
const ShowCommentsButton = styled.button`
background-color: #3e363f;
color: #fff;
border: none;
padding: 5px 10px;
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

const CommentContainer = styled.div`
position: relative;
cursor: pointer;

`;

const VerticalDots = styled.span`
  font-size: 24px;
  line-height: 1;
  visibility: ${(props) => (props.showDots ? 'visible' : 'hidden')};
  cursor: pointer;
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
  text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
  color:white;
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
const ReplyButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s; /* Add a smooth transition */
  font-family: "Helvetica";
  animation: glowing 2s infinite;
  transition: background-color 0.3s ease-in-out;

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

const TransparentButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: "Helvetica";
  animation: glowing 2s infinite;
  transition: background-color 0.3s ease-in-out;

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

const ReplyTextArea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 2px solid #000;
  background-color: transparent;
  padding: 5px;
  transition: border-color 0.2s; /* Add a smooth transition */
  font-family: "Helvetica";
  color:white;
  &:hover {
    border-color: #f0f0f0; /* Highlight border color on hover */
  }
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 50%; /* Position below the button */
  right:10%;
  background-color: #8B0000;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Helvetica";
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.button`
  display: block;
  width: 100%;
  padding: 8px 16px;
  text-align: left;
  border: none;
  background-color: transparent;
  cursor: pointer;
 color:White;
 font-family: "Helvetica";
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

const LikeDislikeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  
`;

const LikeButton = styled.button`
  margin-right: 10px;
  background-color: transparent; /* Set background color to transparent */
  color: #4caf50; /* Set the text color */
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  font-family: "Helvetica";
  align-items: center; /* Center the icon and text vertically */
  &:hover {
    background-color: #f0f0f0; /* Highlight color on hover */
  }
`;

const DislikeButton = styled.button`
  background-color: transparent; /* Set background color to transparent */
  color: #f44336; /* Set the text color */
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-family: "Helvetica";
  cursor: pointer;
  display: flex;
  align-items: center; /* Center the icon and text vertically */
  &:hover {
    background-color: #f0f0f0; /* Highlight color on hover */
  }
`;
const PageContainer = styled.div`
  height: ${(props) => (props.showComments ? '100vh' : '15vh')}; /* Toggle height based on showComments state */
  padding: 10px;
  Margin-top:100px;
`;
const CommentSectionContainer = styled.div`
  background-color: #171717;
  padding: 20px;
  border-radius: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px white;
  transition: border 0.3s ease-in-out;
  width: 80%;
  margin-left: 120px;
  font-family: "Helvetica";
  max-height: 70vh; /* Set a maximum height for the container */
  overflow-y: auto; /* Enable vertical scrolling when content overflows */
  /* Add other styles as needed */
`;
const GlowingInput = styled.input`
  background-color: transparent; /* Make the input transparent */
  border: 2px solid transparent; /* Set an initial transparent border */
  color:white;
  outline: none; /* Remove the default focus outline */
  padding: 10px; /* Add padding to the input */
  border-radius: 5px; /* Add border-radius for rounded corners */
  box-shadow: 0 0 10px black; /* Add a black glow when focused */
  transition: border 0.3s ease-in-out; /* Add a smooth transition for the border */
  font-family: "Helvetica";
  &:focus {
    border: 2px solid white; /* Change the border color when focused */
  }
`;

function QuestionList() {
    const [questions, setQuestions] = useState([]);
    const [editQuestionId, setEditQuestionId] = useState(null); // New state variable
    const [editedData, setEditedData] = useState({
        full_name: '',
        email: '',
        phone_number: '',
        comment: '',
    });
    const [hoveredCommentId, setHoveredCommentId] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [replyingToCommentId, setReplyingToCommentId] = useState(null);
  const [replyText, setReplyText] = useState('');

  const [sortDescending, setSortDescending] = useState(true); // New state variable for sorting order
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  // Function to toggle sorting order
  const toggleSortOrder = () => {
    setSortDescending(!sortDescending);
  };

  // Sort the comments based on the selected order (ascending or descending)
  const sortedQuestions = questions.slice().sort((a, b) => {
    if (sortDescending) {
      return new Date(b.created_at) - new Date(a.created_at);
    } else {
      return new Date(a.created_at) - new Date(b.created_at);
    }
  });
  // Function to handle opening the reply form
  const handleReplyClick = (commentId) => {
    setReplyingToCommentId(commentId);
    setReplyText(''); // Clear any previous reply text
  };
  const handleCancelReply = () => {
    setReplyingToCommentId(null);
    setReplyText(''); // Clear the reply text
  };
  // Function to handle submitting a reply
  const handleReplySubmit = () => {
    // You can send the replyText and replyingToCommentId to your backend to save the reply.
    // After successfully saving the reply, you can update the UI and close the reply form.
    // Here, we'll just clear the reply data and close the reply form.
    setReplyText('');
    setReplyingToCommentId(null);
  };
  useEffect(() => {
    // Initialize the openDropdowns array with the same length as questions and set all values to false
    setOpenDropdowns(new Array(questions.length).fill(false));
  }, [questions]);

  const handleCommentMouseEnter = (index) => {
    setHoveredCommentId(index);
  };

  const handleCommentMouseLeave = () => {
    setHoveredCommentId(null);
  };

  const toggleDropdown = (index) => {
    const updatedDropdowns = [...openDropdowns];
    updatedDropdowns[index] = !updatedDropdowns[index];
    setOpenDropdowns(updatedDropdowns);
  };
    // Function to set the hovered comment ID when hovering over a comment
 

    const [isEditing, setIsEditing] = useState(false); // State to control editing
    const listContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
    };
    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
      };
    
    const editFormStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column', // Column layout
        alignItems: 'center', // Center content horizontally
        backgroundColor: '#650000',
    };
    const labelStyle = {
        marginBottom: '5px',
        fontWeight: 'bold',
    };
    const inputStyle = {
        marginBottom: '10px',
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const disableInputStyle = {
        ...inputStyle,
        backgroundColor: '#f0f0f0',
        cursor: 'not-allowed',
    };

    
    useEffect(() => {
        // Make a GET request to fetch the data
        axios.get('http://localhost:8000/api/questions')
            .then((response) => {
                // Update the state with the fetched data
                setQuestions(response.data.questions);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // ... Other functions

    const handleEditClick = (questionId) => {
        // Set the question ID to open the overlay for editing
        setEditQuestionId(questionId);

        // Find the selected question from the state
        const selectedQuestion = questions.find((question) => question.id === questionId);

        // Set the edited data with the selected question's data
        setEditedData({
            full_name: selectedQuestion.full_name,
            email: selectedQuestion.email,
            phone_number: selectedQuestion.phone_number,
            comment: selectedQuestion.comment,
        });

        // Allow editing
        setIsEditing(true);
    };

    const handleDeleteClick = (questionId) => {
        // Send a DELETE request to delete the question with the specified ID
        axios.delete(`http://localhost:8000/api/questions/${questionId}`)
            .then((response) => {
                // If the deletion is successful, remove the question from the state
                setQuestions((prevQuestions) => prevQuestions.filter((question) => question.id !== questionId));
                console.log(`Question with ID ${questionId} deleted successfully.`);
            })
            .catch((error) => {
                console.error(`Error deleting question with ID ${questionId}:`, error);
            });
    };

    const handleCancelClick = () => {
        // Close the overlay when the "Cancel" button is clicked
        setEditQuestionId(null);
        setIsEditing(false); // Disable editing
    };

    const handleSaveClick = () => {
        // Send a PUT request to update the edited question data
        axios.put(`http://localhost:8000/api/questions/${editQuestionId}`, editedData)
            .then((response) => {
                // Handle the success response (e.g., show a success message)
                console.log(`Question with ID ${editQuestionId} updated successfully:`, response.data);

                // Update the questions in the state with the edited data
                setQuestions((prevQuestions) =>
                    prevQuestions.map((question) =>
                        question.id === editQuestionId ? { ...question, ...editedData } : question
                    )
                );

                // Close the overlay
                setEditQuestionId(null);
                setIsEditing(false); // Disable editing
            })
            .catch((error) => {
                // Handle errors (e.g., display validation errors)
                console.error(`Error updating question with ID ${editQuestionId}:`, error);
            });
    };

    return (
      
      <PageContainer showComments={showComments}>
        
        
          
        <div style={{ display: 'flex', alignItems: 'baseline', margin:'1px',flexDirection:'row',gap:'20px'}}>
        <section id="comments">
        <GlowingText>Questions/Comments </GlowingText>
        </section>
        </div>
        <ShowCommentsButton onClick={toggleComments}>
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </ShowCommentsButton>
        {showComments ? (
          
            <CommentSectionContainer style={listContainerStyle}>
            <GlowingButton
            onClick={toggleSortOrder}
            style={{
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Sort <span style={{ fontSize: '16px', verticalAlign: 'middle' }}>{sortDescending ? '▼' : '▲'}</span>
          </GlowingButton>
        {sortedQuestions.map((question, index) => (
          <CommentContainer
            key={question.id}
            onMouseEnter={() => handleCommentMouseEnter(index)}
            onMouseLeave={handleCommentMouseLeave}
          >
           <GlowingText>
              {question.full_name.toString()}
            </GlowingText>
            <VerticalDots
  showDots={hoveredCommentId === index}
  onClick={() => toggleDropdown(index)}
  
>
              ⋮
            </VerticalDots>
            <DropdownMenu onMouseLeave={() => setOpenDropdowns((prevOpenDropdowns) => {
    const updatedDropdowns = [...prevOpenDropdowns];
    updatedDropdowns[index] = false;
    return updatedDropdowns;
  })}isOpen={openDropdowns[index]}>
              <DropdownItem onClick={() => handleEditClick(question.id)}>
                Edit
              </DropdownItem>
              <DropdownItem onClick={() => handleDeleteClick(question.id)}>
                Delete
              </DropdownItem>
            </DropdownMenu>

            <p style={{ fontFamily: 'Arial, sans-serif',color:'whitesmoke' }}>
              {question.comment.toString()}
            </p>

            <LikeDislikeContainer>
              <LikeButton>
              <FontAwesomeIcon icon={faThumbsUp} /> Like
              </LikeButton>
              <DislikeButton>
              <FontAwesomeIcon icon={faThumbsDown} /> Dislike
              </DislikeButton>
              <ReplyButton onClick={() => handleReplyClick(question.id)}>
          Reply
        </ReplyButton>
            </LikeDislikeContainer>
            

            {replyingToCommentId === question.id && (
        <div>
          <ReplyTextArea
            placeholder="Your reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></ReplyTextArea>
          <TransparentButton onClick={handleReplySubmit}>
            Submit Reply
          </TransparentButton>
          <TransparentButton onClick={handleCancelReply}>Cancel</TransparentButton>
        </div>
            )}
          </CommentContainer>
          
        ))}
       </CommentSectionContainer>
          
        ) : null}
       
      {editQuestionId !== null && (
        <div style={overlayStyle}>
          <div style={editFormStyle}>
            <label
              style={{ ...labelStyle, fontFamily: 'Arial, sans-serif' }}
              htmlFor="full_name"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="full_name"
              placeholder="Full Name"
              value={editedData.full_name}
              style={
                isEditing
                  ? { ...inputStyle, fontFamily: 'Arial, sans-serif' }
                  : { ...disableInputStyle, fontFamily: 'Arial, sans-serif' }
              }
              onChange={(e) =>
                setEditedData({ ...editedData, full_name: e.target.value })
              }
            />
            {/* ... (rest of your edit form) */}
          </div>
          {editQuestionId !== null && (
          <div style={overlayStyle}>
            <div style={editFormStyle}>
              <label style={{ ...labelStyle, fontFamily: 'Arial, sans-serif' }} htmlFor="full_name">Full Name:</label>
              <GlowingInput
                type="text"
                id="full_name"
                placeholder="Full Name"
                value={editedData.full_name}
                style={isEditing ? { ...inputStyle, fontFamily: 'Arial, sans-serif' } : { ...disableInputStyle, fontFamily: 'Arial, sans-serif' }}
                onChange={(e) =>
                  setEditedData({ ...editedData, full_name: e.target.value })
                }
              />
              <label style={{ ...labelStyle, fontFamily: 'Arial, sans-serif' }} htmlFor="email">Email:</label>
              <GlowingInput
                type="email"
                id="email"
                placeholder="Email"
                value={editedData.email}
                style={isEditing ? { ...inputStyle, fontFamily: 'Arial, sans-serif' } : { ...disableInputStyle, fontFamily: 'Arial, sans-serif' }}
                onChange={(e) =>
                  setEditedData({ ...editedData, email: e.target.value })
                }
              />
              <label style={{ ...labelStyle, fontFamily: 'Arial, sans-serif' }} htmlFor="phone_number">Phone Number:</label>
              <GlowingInput
                type="tel"
                id="phone_number"
                placeholder="Phone Number"
                value={editedData.phone_number}
                style={isEditing ? { ...inputStyle, fontFamily: 'Arial, sans-serif' } : { ...disableInputStyle, fontFamily: 'Arial, sans-serif' }}
                onChange={(e) =>
                  setEditedData({ ...editedData, phone_number: e.target.value })
                }
              />
  
              <label style={{ ...labelStyle, fontFamily: 'Arial, sans-serif' }} htmlFor="comment">Comment:</label>
              <TextareaWithLineHeight
                id="comment"
                placeholder="Comment"
                value={editedData.comment}
                onChange={(e) =>
                  setEditedData({ ...editedData, comment: e.target.value })
                }
                style={{ ...inputStyle, height: '120px', fontFamily: 'Arial, sans-serif' }}
                disabled={!isEditing}
              ></TextareaWithLineHeight>
  
              {isEditing && (
                <GlowingButton onClick={handleSaveClick}>Save</GlowingButton>
              )}
              <GlowingButton onClick={handleCancelClick}>Cancel</GlowingButton>
            </div>
        </div>
        
      )}
    
    </div>

)
           
}


</PageContainer>
    );
}

export default QuestionList;
