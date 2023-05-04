import React, { useState, useEffect, useRef } from "react";
import ThreadMessage from "./ThreadMessage";
import { AiOutlineComment } from "react-icons/ai";

import Discussion from "./Discussion";
import { useLocation } from "react-router-dom";

/**
 * GroupThreadView component - for the thread view page, in which user can reply to already existing posts or create a new post.
 * @returns {JSX.Element} - A React component that displays the GroupThreadView component.
 * @example
 * <GroupThreadView />
 */
export default function GroupThreadView() {
  const { state } = useLocation();
  const data = [
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
      isHead: true,
      parentId: null,
    },
    {
      id: 2,
      author: "John Dose2",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageContent:
        "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.",
      messageDate: "2021-08-01",
      messageTime: "12:02",
      isHead: false,
      parentId: 1,
    },
    {
      id: 36,
      author: "John Dose3",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil reiciendis sapiente, veritatis nesciunt praesentium earum at incidunt cumque id, accusantium placeat voluptas natus quasi consequuntur commodi sint illum quae! Minus, nihil reprehenderit? Eos ad numquam corporis qui repellendus dolor dicta accusantium. Nulla quae laboriosam vero nostrum inventore, autem ullam a, est iure debitis placeat cupiditate et saepe unde eaque quisquam eligendi nesciunt animi repellendus ipsam! Consequatur, officia! Totam corporis eos rem maiores et aspernatur quaerat consequatur perferendis perspiciatis.",
      messageDate: "2021-08-01",
      messageTime: "12:02",
      isHead: false,
      parentId: 2,
    },
    {
      id: 4,
      author: "John Dose4",
      authorEmail: "johnDoe@gmail.com",
      authorProfile:
        "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
      messageContent:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil reiciendis sapiente, veritatis nesciunt praesentium earum at incidunt cumque id, accusantium placeat voluptas natus quasi consequuntur commodi sint illum quae! Minus, nihil reprehenderit? Eos ad numquam corporis qui repellendus dolor dicta accusantium. Nulla quae laboriosam vero nostrum inventore, autem ullam a, est iure debitis placeat cupiditate et saepe unde eaque quisquam eligendi nesciunt animi repellendus ipsam! Consequatur, officia! Totam corporis eos rem maiores et aspernatur quaerat consequatur perferendis perspiciatis.",
      messageDate: "2021-08-01",
      messageTime: "12:02",
      isHead: false,
      parentId: 2,
    },
  ];
  const [isExpanded, setIsExpanded] = useState(
    data.map((item, index) => {
      return index === data.length - 1;
    })
  );
  const isFocusedRef = useRef(
    data.map((item, index) => {
      return React.createRef();
    })
  );
  const toggleFocus = (toFocus, id) => {
    console.log(isFocusedRef);
    // focus on the message usign ref
    if (!toFocus || id <= 0) {
      return;
    }
    isFocusedRef.current[id - 1].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    isFocusedRef.current[id - 1].current.focus();
  };

  const toggleExpand = (parentId) => {
    const newExpanded = data.map((item, index) => {
      if (item.id === parentId) {
        return !isExpanded[index];
      }
      return isExpanded[index];
    });
    setIsExpanded(newExpanded);
  };

  const thread = data.map((item, index) => {
    return (
      <ThreadMessage
        id={item.id}
        author={item.author}
        authorEmail={item.authorEmail}
        authorProfile={item.authorProfile}
        messageSubject={item.messageSubject + state.id}
        messageContent={item.messageContent}
        messageDate={item.messageDate}
        messageTime={item.messageTime}
        isHead={item.isHead}
        isExpanded={isExpanded[index]}
        haveReply={true}
        toggleExpand={toggleExpand}
        parentId={item.parentId}
        key={item.id}
        parentContent={
          data.filter((item2) => {
            return item.parentId && item2.id === item.parentId;
          })[0]?.messageContent ?? "null"
        }
        isFocusedRef={isFocusedRef.current[index]}
        toggleFocus={toggleFocus}
        option1={"Reply"}
        option2={"Reply all"}
        icon1={<AiOutlineComment />}
        icon2={<AiOutlineComment />}
      />
    );
  });
  useEffect(() => {
    // fetch data from server
  }, []);
  return (
    <>
      {thread}
      <Discussion numComments={thread.length} />
    </>
  );
}
