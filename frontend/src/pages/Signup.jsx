import { useState } from 'react';
import styled from 'styled-components';
import Background from '../components/Background';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
const Signup = () => {
    
    const navigate = useNavigate();
    const[ email, setEmail] = useState("");
    const toSignmainPage = (email) => {
        navigate("/signupmain", {state:{email: email}})
    }
    const handleGetStarted = async () => {
        
        // try {
        //     const { email, password } = formValues;
        //     await createUserWithEmailAndPassword(firebaseAuth);
        // } catch(err) {
        //     console.log(err);
        // }
    }

    // const [formValues, setFormValues] = useState({
    //     email: '',
    //     password: ""
    // });

    // onAuthStateChanged(fireaseAuth, (currentUser) => {
    //     if(currentUser) Navigate("/")
    // });

  return (
    <Container>
        <Background />
        <div className="content">
            <Header login/>
            <div className="body flex column a-center j-center">
                <div className="text flex column">
                    <h1>Unlimited movies, TV shows and more</h1>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <h6>Ready to watch? Enter your email to create or restart your membership</h6>
                </div>
                <div className="form">
                    <input type="email" placeholder="Email address" name="email" required
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    <button onClick={() => {
                        toSignmainPage(email);
                    }}>Get Started <IoIosArrowForward className="arrow-forward"/></button>
                </div>
            </div>
        </div>
    </Container>
  )
}

const Container = styled.div`
    position: relative;
    background-color: black;
    color: white;
    .content {
        position: absolute;
                top: 0;
                left: 0;
                height: 100vh;
                background: rgba(0, 0, 0, 0.5);
                width: 100vw;
                height: 100vh;
                display: grid;
                grid-template-rows: 15vh 85vh;
                .body {
                    gap: 1rem;
                    .text {
                        gap: 1rem;
                        text-align: center;
                        font-size: 1.8rem;
                        h1 {
                            padding: 0 25rem; 
                            font-weight: 700;
                        }
                        h4 {
                            font-weight: 500;
                            padding-bottom: 1.5rem;
                        }
                        h6 {
                            font-weight: 500;
                            padding-bottom: .7rem;
                        }
                    }
                    .form {
                        text-align: center;
                        input {
                            color: black;
                            border: none;
                            padding: 1.5rem;
                            font-size: 1.3rem;
                            width: 40vw;
                        }
                        button {
                            border: none;
                            cursor: pointer;
                            padding: 1.5rem;
                            font-size: 1.3rem;
                            color: white;
                            
                            background-color: #e50914;
                            .arrow-forward {
                                
                            }
                        }
                    }
                }
    }
`;

export default Signup


// value={formValues.email} onChange={(e) => setFormValues({[e.target.name]:e.target.value})}