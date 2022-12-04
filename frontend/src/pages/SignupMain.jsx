import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components"
import Header from "../components/Header"
import { firebaseAuth } from "../config/firebase-config"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
const SignupMain = () => {

  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = async () => {
      console.log(formValues);
      try {
        const { email, password } = formValues;
        await createUserWithEmailAndPassword(firebaseAuth,email,password);
      } catch(err) {
      console.log(err);
      }
  }

 

  onAuthStateChanged(firebaseAuth, (currentUser) => {
       if(currentUser) navigate("/");
  });

  const location = useLocation();
  return (
    <Container>
      <Header />
      <hr className=".line"/>
      <div className="signmain flex column j-start a-center">
        <div className="infoup flex column j-center a-center">
          <h2>Create a password to start your membership</h2>
          <h4>Just a few more steps and you're done!</h4>
          <h4>We hate paperwork, too.</h4>
        </div>
        <div className="form-up flex column">
          <input type="email" name="email" placeholder="Enter Your Email Address" value={formValues.email} onChange={(e) => setFormValues({...formValues,[e.target.name]: e.target.value,})} required/>      
          <input type="password" required name="password" value={formValues.password} onChange={(e) => setFormValues({...formValues,[e.target.name]: e.target.value,})} placeholder="Add a password"/>
          <button onClick={handleSignUp}>Next</button>
        </div>
      </div>
      
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    .line {
      height: 1px;
    }
    .signmain {
      width: 100%;
      height: 100%;
      padding: 4rem;
      text-align: center;
      .infoup {
        font-size: 1.5rem;
        gap: 1rem;
      }
      .form-up {
        padding: 1rem;
        gap: 0.5rem;
        font-size: 1.3rem;
        input {
          padding: 1.5rem;
          width: 60vh;
          border-radius: 0.2rem;
        }
        button {
          margin-top: 1rem;
          padding: 1.5rem;
          border: none;
          font-size: 1.5rem;
          background-color: #e50914;
          color: white;
          cursor: pointer;
          :hover {
            background-color: #f6121d;
          }
        }
      }
    }
    

`;
export default SignupMain