import { React, useState, useEffect } from "react";
import ThreadMessage from "./GroupView/ThreadMessage";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
export default function ApprovalRequest() {
  const [data, setData] = useState([
    {
      id: 1,
      author: "John Doe1",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageSubject:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc sapien aliquet urna, vitae aliqua",
      messageDate: "2021-08-01",
      messageTime: "12:00",
    },
    {
      id: 1,
      author: "John Doe1",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageSubject:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc sapien aliquet urna, vitae aliqua",
      messageDate: "2021-08-01",
      messageTime: "12:00",
    },
  ]);
  const displayRequests = data.map((item) => {
    return (
      <>
        <h1
          className="text-2xl font-bold text-gray-800 mt-2 bg-gray-100 p-2 rounded-t-lg
        ">
          Subject: {item.messageSubject}
        </h1>
        <ThreadMessage
          id={item.id}
          author={item.author}
          authorEmail={item.authorEmail}
          authorProfile={item.authorProfile}
          messageSubject={item.messageSubject}
          messageContent={item.messageContent}
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
  }, []);
  console.log(displayRequests);

  return <>{displayRequests}</>;
}
