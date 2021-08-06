import React from "react";
import { Waypoint } from "react-waypoint";

import OutgoingBubble from "../OutgoingBuble";
import IncomingBubble from "../IncomingBubble";

import Spinner from "../Spinner";

import { ChatContainer } from "./style";

function Index({ messages, onFetchMore, page, loading }) {
  function renderBubble(data, index) {
    if (index % 2 == 0) {
      //even
      return <IncomingBubble key={data?.id} id={index} text={data?.name} />;
    } else {
      // odd
      return <OutgoingBubble key={data?.id} id={index} text={data?.name} />;
    }
  }

  if (!messages) {
    return <Spinner type="black" padding={30} />;
  }

  return (
    <ChatContainer>
      {messages?.map((data, idx) => renderBubble(data, idx))}
      <Waypoint
        bottomOffset="20px"
        onEnter={() => {
          onFetchMore((page.current += 1));
        }}
      />
      {loading && <Spinner type="black" padding={30} />}
    </ChatContainer>
  );
}

export default Index;
