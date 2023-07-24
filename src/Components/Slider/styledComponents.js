import styled from "styled-components";


export const Slide = styled.div`
  /* Adjust the height according to your needs */
  background-size: cover;
  background-position: left;
  background-image: ${(props) => `url(${props.imageUrl})`};
`;


export const Container = styled.div`
  height: 300px;
  display: flex;

  flex-direction: column;

  width: 900px;

  justify-content: center;

  align-items: center;

`;




export const Heading = styled.h1`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: white;
`;




export const Para = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: white;
`;




export const Button = styled.button`

  height: 35px;

  width: 120px;

  background-color: #499bf2;

  border-width: 0px;

  color: #ffffff;

  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  font-weight: 300;

  font-size: 15px;

  border-radius: 5px;

`;