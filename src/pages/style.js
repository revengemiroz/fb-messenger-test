import styled from "styled-components";

export const MessengerContainer = styled.div`
  border: 2px solid #e9e9e9;
  width: 80vw;
  height: 80vh;
  display: flex;
  background-color: white;
  box-shadow: 10px 10px 40px 4px rgba(45, 78, 255, 0.15);
`;

export const SideBar = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderContent = styled.div`
  width: 100%;
  min-height: 50px;
  border-bottom: 2px solid #e9e9e9;
  border-right: 2px solid #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 22px;
`;
