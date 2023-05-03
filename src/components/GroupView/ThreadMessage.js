import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { useState } from "react";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
  BsFillReplyAllFill,
} from "react-icons/bs";

export default function ThreadMessage({
  author,
  authorEmail,
  authorProfile,
  messageSubject,
  messageContent,
  messageDate,
  messageTime,
  isHead,
  isExpanded,
  parentId,
  toggleExpand,
  parentContent,
  key,
  id,
  isFocusedRef,
  toggleFocus,
  haveReply,
  option1,
  option2,
  icon1,
  icon2,
}) {
  const pubdate = new Date(messageDate);
  const options = { year: "numeric", month: "short", day: "numeric" };

  const toggle = () => {
    toggleExpand(isExpanded ? parentId : id);
    toggleFocus(isExpanded, parentId);
  };

  const formattedDate = pubdate.toLocaleDateString("en-US", options); // "Feb 8, 2022"c
  console.log(isExpanded);
  return (
    <>
      {isHead ? (
        <h1
          key={key}
          className="p-6 mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl dark:text-white focus:bg-black">
          Subject:{" "}
          <span className="text-blue-600 dark:text-blue-500">
            {messageSubject}
          </span>{" "}
        </h1>
      ) : null}
      <div
        className="text-gray-900 dark:bg-gray-900"
        // ref={isFocusedRef}
        key={key}
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400">
        <article className="p-6 mb-6 text-base rounded-lg dark:bg-gray-900 bg-gray-100">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="flex items-center mr-3 text-base text-gray-900 dark:text-white">
                <img
                  className="mr-2 w-9 h-9 rounded-full"
                  src={
                    authorProfile ??
                    "https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  }
                  alt={author}
                />
                <span className="flex flex-col">
                  <span>{author}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {authorEmail}
                  </span>
                </span>
              </p>
            </div>
            <p className="text-sm text-gray-600 justify-items-end dark:text-gray-400">
              <time
                dateTime="2022-02-08"
                title="February 8th, 2022"
                className="font-bold">
                {formattedDate}
              </time>
              <time
                dateTime="2022-02-08T18:00:00.000Z"
                title="6:00 PM"
                className="ml-2">
                {messageTime}
              </time>
            </p>
          </footer>
          {haveReply ? (
            <>
              <h2 id="accordion-flush-heading-1">
                <button
                  type="button"
                  ref={isFocusedRef}
                  className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 focus:outline-none focus:bg-blue-100 dark:focus:bg-gray-900 focus:text-blue-600 dark:focus:text-blue-500 p-6 rounded-lg"
                  data-accordion-target="#accordion-flush-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-flush-body-1">
                  {/* <span 
            >{parentContent.substring(0, 50)}...</span> */}
                  {/* Reply to */}
                  <span
                    onClick={toggle}
                    className="bg-gray-300
  dark:bg-blue-900 w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 focus:outline-none focus:bg-blue-100 dark:focus:bg-gray-900 focus:text-blue-600 dark:focus:text-blue-500 p-6 rounded-lg">
                    {<BsFillReplyAllFill />} Reply to:{" "}
                    {parentContent.substring(0, 50)}...
                  </span>
                  {/* Use react icons here */}
                  <span onClick={() => toggleExpand(id)}>
                    {isExpanded ? (
                      <BsFillArrowUpCircleFill />
                    ) : (
                      <BsFillArrowDownCircleFill />
                    )}
                  </span>
                </button>
              </h2>
            </>
          ) : null}

          <div
            id="accordion-flush-body-1"
            className={isExpanded ? "visible" : "hidden"}
            aria-labelledby="accordion-flush-heading-1">
            {/* Content */}
            <p className="text-gray-500 dark:text-gray-400">{messageContent}</p>
            <div className="flex items-center mt-4 space-x-4">
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                <div className="mr-1">{icon1}</div>
                {/* <icon1 className="mr-1" /> */}
                {option1}
              </button>
              <button
                type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                <div className="mr-1">{icon2}</div>
                {/* <icon2 className="mr-1" /> */}
                {option2}
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
