import { React, useState, useEffect } from "react";
import ThreadMessage from "../GroupView/ThreadMessage";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

/**
 * A component that displays a message for a specific group for a specific user to join the group
 * @returns {JSX.Element} A React component that displays a message for a specific group for a specific user to join the group
 * @example
 * <JoiningRequest />
 */
export default function JoiningRequest() {
  const [data, setData] = useState([
    {
      id: 1,
      author: "John Doe1",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageDate: "2021-08-01",
      messageTime: "12:00",
    },
    {
      id: 2,
      author: "John Doel1",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageDate: "2021-08-01",
      messageTime: "12:00",
    },
    {
      id: 3,
      author: "John",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageDate: "2021-08-01",
      messageTime: "12:00",
    },
  ]);
  const displayRequests = data.map((item) => {
    return (
      <>
        <ThreadMessage
          id={item.id}
          author={item.author + " has requested to join the group!"}
          authorEmail={item.authorEmail}
          authorProfile={item.authorProfile}
          messageSubject={null}
          messageContent={null}
          messageDate={item.messageDate}
          messageTime={item.messageTime}
          isHead={false}
          isExpanded={true}
          haveReply={false}
          toggleExpand={null}
          parentId={null}
          key={item.id}
          parentContent={null}
          isFocusedRef={null}
          toggleFocus={null}
          option1={"Accept"}
          option2={"Reject"}
          icon1={<AiOutlineCheck color="green" />}
          icon2={<FaTimes color="red" />}
        />
      </>
    );
  });
  useEffect(() => {
    // get data from api
    document.title = "Joining requests";
  }, []);
  console.log(displayRequests);

  return <div data-testid="JoiningRequestTest">{displayRequests}</div>;
}
