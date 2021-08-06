import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessagesAsync } from "../features/messagesSlice";

import Chat from "../components/Chat";

import {
  MessengerContainer,
  SideBar,
  MainContent,
  HeaderContent,
} from "./style";

function Index(props) {
  const page = useRef(1);
  const dispatch = useDispatch();
  const { messagesArray, status, loading } = useSelector(
    (state) => state.messages
  );

  useEffect(() => {
    dispatch(fetchMessagesAsync(page.current));
  }, []);

  return (
    <MessengerContainer>
      <SideBar>
        <HeaderContent>Chat</HeaderContent>
      </SideBar>
      <MainContent>
        <HeaderContent>Testing the API</HeaderContent>
        <Chat
          messages={messagesArray}
          onFetchMore={(page) => {
            dispatch(fetchMessagesAsync(page));
          }}
          loading={loading}
          page={page}
        />
      </MainContent>
    </MessengerContainer>
  );
}

export default Index;
