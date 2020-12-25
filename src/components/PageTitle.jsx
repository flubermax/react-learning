import styled from "styled-components";

const PageTitleStyle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  position: relative;
  margin-bottom: 50px;

  ::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    border-radius: 5px;
    background-color: #ff8000;
    color: #ff8000;
    height: 10px;
    width: 120px;
  }

  @media(max-width: 767px) {
    font-size: 35px;
    ::before{
      width: 100px;
      height: 8px;
    }
  }
  @media(max-width: 767px) {
    font-size: 28px;
  }
`;

const PageTitle = ({ text }) => {
  return <PageTitleStyle>{text}</PageTitleStyle>
}

export default PageTitle;