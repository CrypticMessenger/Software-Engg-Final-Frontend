import React, { useState, useEffect, useRef, createRef } from "react";
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
  const [data, setData] = useState({messages: []});
  const [dataHead, setDataHead] = useState([]);
  const [messageHeader, setMessageHeader] = useState("");
  const [isReplyAll, setIsReplyAll] = useState(false);
  const [parentID, setParentID] = useState(null);
  // const data = [
  //   {
  //     id: 1,
  //     author: "John Doe1",
  //     authorEmail: "johnDoe@gmail.com",
  //     authorProfile:
  //       "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
  //     messageSubject:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //     messageContent:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc sapien aliquet urna, vitae aliqua",
  //     messageDate: "2021-08-01",
  //     messageTime: "12:00",
  //     isHead: true,
  //     parentId: null,
  //   },
  //   {
  //     id: 2,
  //     author: "John Dose2",
  //     authorEmail: "johnDoe@gmail.com",
  //     authorProfile:
  //       "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
  //     messageContent:
  //       "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it.",
  //     messageDate: "2021-08-01",
  //     messageTime: "12:02",
  //     isHead: false,
  //     parentId: 1,
  //   },
  //   {
  //     id: 36,
  //     author: "John Dose3",
  //     authorEmail: "johnDoe@gmail.com",
  //     authorProfile:
  //       "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
  //     messageContent:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil reiciendis sapiente, veritatis nesciunt praesentium earum at incidunt cumque id, accusantium placeat voluptas natus quasi consequuntur commodi sint illum quae! Minus, nihil reprehenderit? Eos ad numquam corporis qui repellendus dolor dicta accusantium. Nulla quae laboriosam vero nostrum inventore, autem ullam a, est iure debitis placeat cupiditate et saepe unde eaque quisquam eligendi nesciunt animi repellendus ipsam! Consequatur, officia! Totam corporis eos rem maiores et aspernatur quaerat consequatur perferendis perspiciatis.",
  //     messageDate: "2021-08-01",
  //     messageTime: "12:02",
  //     isHead: false,
  //     parentId: 2,
  //   },
  //   {
  //     id: 4,
  //     author: "John Dose4",
  //     authorEmail: "johnDoe@gmail.com",
  //     authorProfile:
  //       "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg",
  //     messageContent:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil reiciendis sapiente, veritatis nesciunt praesentium earum at incidunt cumque id, accusantium placeat voluptas natus quasi consequuntur commodi sint illum quae! Minus, nihil reprehenderit? Eos ad numquam corporis qui repellendus dolor dicta accusantium. Nulla quae laboriosam vero nostrum inventore, autem ullam a, est iure debitis placeat cupiditate et saepe unde eaque quisquam eligendi nesciunt animi repellendus ipsam! Consequatur, officia! Totam corporis eos rem maiores et aspernatur quaerat consequatur perferendis perspiciatis.",
  //     messageDate: "2021-08-01",
  //     messageTime: "12:02",
  //     isHead: false,
  //     parentId: 2,
  //   },
  // ];
  const [isExpanded, setIsExpanded] = useState(
    data.messages.map((item, index) => {
      return index === data.length - 1;
    })
  );
  let isFocusedRef = useRef(
    data.messages.map((item, index) => {
      return React.createRef();
    })
  );
  const toggleFocus = (toFocus, idEncoded) => {
    // get the index of the message which has the id from data
    const id = data.messages.findIndex((item) => {
      return item.id === idEncoded;
    });
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
    const newExpanded = data.messages.map((item, index) => {
      if (item.id === parentId) {
        return !isExpanded[index];
      }
      return isExpanded[index];
    });
    setIsExpanded(newExpanded);
  };


  const handleReply = (parentId,email) => {
    setMessageHeader("Replying to " + email);
    setIsReplyAll(false);
    setParentID(parentId);
  };

  const handleReplyAll = (parentId) => {
    setMessageHeader("Replying all ");
    setIsReplyAll(true);
    setParentID(parentId);
  };


  console.log(data);
  const thread = data.messages.map((item, index) => {
    // print filter item2
    // console.log("ankit",data.messages.filter((item2) => {
    //   return item.parent && item2.id === item.parent;
    // }));

    console.log(item.parent);
    return (
      <ThreadMessage
        id={item.id}
        author={item.author}
        authorEmail={item.email}  
        authorProfile={item.profile_picture ?? "https://www.gkseries.com/blog/wp-content/uploads/2020/11/IIT-Ropar-2048x1534.jpg"}
        messageSubject={dataHead.subject}
        messageContent={item.message}
        messageDate={item.sent_at}
        messageTime={item.sent_at}
        isHead={item.isHead} // ? to check if the message is the first message in the thread
        isExpanded={isExpanded[index]}
        haveReply={true}
        toggleExpand={toggleExpand}
        parentId={item.parent}
        key={item.id}
        parentContent={
          data.messages.filter((item2) => {
            return item.parent && item2.id === item.parent;
          })[0]?.message ?? "null"
        }
        isFocusedRef={isFocusedRef.current[index]}
        toggleFocus={toggleFocus}
        option1={"Reply"}
        option2={"Reply all"}
        icon1={<AiOutlineComment />}
        icon2={<AiOutlineComment />}
        handleOption1={handleReply}
        handleOption2={handleReplyAll}
      />
    );
  });
  useEffect(() => {
    // fetch data from server
    const fetchData = async () => {
      // thread/threadId
      const groupLink = state.groupLink;
      const threadId = state.id;
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.token;
      const response = await fetch(`http://${groupLink}/thread/${threadId}/` , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify({}),
      });

      const data1 = await response.json();
      console.log(data1.data);
      setData(data1.data);
      setDataHead(data1);

      setIsExpanded(
        data1.data.messages.map((item, index) => {
          return index === data1.data.messages.length - 1;
        })
      );
      console.log(data1.data.messages.length);
      // ! important code
      // store ref using map using  id as id is not integer
      isFocusedRef.current = data1.data.messages.map((item, index) => {
        return React.createRef();
      });
    };
    fetchData();
  }, []);
  useEffect(() => {
  }
  , [data]);
  return (
    <div data-testid="GroupThreadTest">
      {thread}
      <Discussion numComments={thread.length} messageHeader={messageHeader}  isReplyAll={isReplyAll} parentID={parentID} url={state.groupLink}  />
    </div>
  );
}
