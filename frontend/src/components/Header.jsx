import styled from "styled-components"
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom"
const Header = (props) => {
    const navigate = useNavigate();

  return (
    <Container className="flex j-between a-center">
        <div className="logo">
            <img src={logo} alt="netflix-logo" />
        </div>
        <button onClick={() => navigate(props.login ? "/signupmain" : "/login")}>
            {props.login ? "Log In" : "Sign In"}
        </button>
    </Container>
  )
}
const Container = styled.div`
    padding: 0.2rem 3rem;
    
    .logo {
        img {
            height: 5.5rem;
        }
    }
    button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bold;
        font-size: 1.05rem;
    }
`;

export default Header