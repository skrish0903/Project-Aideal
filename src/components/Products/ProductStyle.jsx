import styled from "styled-components";
import { motion } from "framer-motion";
import { renderGradient } from "./Products";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c0c1d;
  margin-top: 50px;
`;

export const Cointainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  cursor: pointer:
  prespective: 2000;
`;

export const CardWrapper = styled(motion.div)`
width: 100rem;
height: 25rem;
displey:grid;
place-items:center:
overflow:hidden;
`;

export const Card = styled.div`
  width: 20rem;
  height: 25rem;
  background: #eee;
  border-radius: 2.5rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.7);
  position: relative;
`;

export const CTop = styled.div`
  width: 100%;
  height: 50%;
  padding: 3rem;
  border-radius: 2.5rem 2.5rem 0 0;
  transition: background 0.5s;
  background-image: linear-gradient(
    ${({ currentColor }) => renderGradient(currentColor)}
  );
`;

export const Logo = styled.img`
  width: 8rem;
  margin-bottom: 2rem;
`;

export const CTopText = styled.div`
  color: #fff;
`;

export const CTopTitle = styled.h1`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-weight: 400;
  letter-spacing: 0.1rem;
  color: #333;
  width: 50%;
`;

export const Shoes = styled(motion.div)`
  height: 10%;
  user-select: none;
  img {
    user-select: none;
  }
`;

export const ShoeOne = styled(motion.img)`
  width: 11rem;
  position: absolute;
  top: -16.5rem;
  right: -6.5rem;
  transition: transform 1s;
`;

// export const ShoeTwo = styled(motion.img)`
//   width: 33rem;
//   position: absolute;
//   top: -22rem;
//   right: -55rem;
//   transition: transform 1s;
// `;

export const CBottom = styled.div`
  width: 100%;
  height: 50%;
  padding: 2rem 3rem;
`;

export const CBottomTitle = styled.h1`
font-weight: 500;
text-transform: uppercase:
letter-spacing: .1rem;
color: #333;
margin-bottom: 0.6rem;
`;

export const Badge = styled.div`
  position: absolute;
  top: 14.8rem;
  right: 1rem;
  width: 6.5rem;
  height: 1.6rem;
  background: #25d390;
  color: #fff;
  display: grid;
  place-items: center;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
`;

export const Pricing = styled.div`
  width: 14rem;
  height: 3rem;
  background: ${({ currentColor }) =>
    currentColor === 1 ? "#1c477a" : "#a8e063"};
  color: #fff;
  border-radius: 0.5rem;
  position: absolute;
  right: -1rem;
  bottom: 2rem;
  box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.5s;
  span {
    font-size: 2rem;
  }
  span:first-child {
    font-weight: 300;
    text-transform: uppercase;
    margin-right: 1rem;
  }

  span:last-child {
    font-weight: bold;
  }
`;

// export const Stars = styled.div`
//   margin-bottom: 3rem;

//   i:last-child {
//     opacity: 0.4;
//   }
// `;
