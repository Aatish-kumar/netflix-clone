import styled from "styled-components"
import Background from "../components/Background"
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { firebaseAuth } from "../config/firebase-config"
import { useState } from "react"
const Login = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
            email: "",
            password: "",
        });

    const handleSignIn = async () => {
        
        try {
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth,email,password);
        } catch(err) {
            console.log(err);
        }
    }

    

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if(currentUser) navigate("/");
    });


  return (
    <Container>
        <Background />
        <div className="content">
            <div className="logo-section">
                <div className="logo">
                    <img src={logo} alt="netflix-logo" />
                </div>
            </div>
            <div className="login-wrapper flex j-center a-center">
                <div className="login-container">
                    <div className="login-form flex column">
                        <h1>Sign In</h1>
                        <form className="flex column">
                            <input type="email" name="email" placeholder="Email" value={formValues.email} onChange={(e) => setFormValues({...formValues,[e.target.name]: e.target.value,})} required/>
                            <input type="password" name="password" value={formValues.password} onChange={(e) => setFormValues({...formValues,[e.target.name]: e.target.value,})} placeholder="Password" required/>
                            <button onClick={handleSignIn}>Sign In</button>
                            <h5>Need help?</h5>
                        </form>
                            
                    </div>
                

                </div>
            </div>
            

        </div>
        
    </Container>
  )
}

const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100vw;
    
    .content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: rgba(0, 0, 0, 0.5);
        display: grid;
        grid-template-rows: 15vh 85vh;
        .logo-section {
            .logo {
                img {
                    height: 5.5rem;
                }
            }
        }
        .login-wrapper {
            .login-container {
                width: 30rem;
                height: 97%;
                background: rgba(0, 0, 0, 0.6);
                padding: 4.5rem;
                .login-form {
                    gap: 2rem;
                    h1 {
                        font-size: 2.5rem;
                        color: white;
                    }
                    input {
                        margin-bottom: 2rem;
                        font-size: 1.1rem;
                        padding: 1rem;
                    }
                    button {
                        margin-top: 2rem;
                        padding: 1rem;
                        font-size: 1.6rem;
                        color: white;
                        background: #e50914;
                        cursor: pointer;
                    }
                    h5{
                        color: white;
                        text-align: right;
                        margin-top: 0.7rem;
                        cursor: pointer;
                    }
                }
            }
        
        }
    }
`; 
export default Login