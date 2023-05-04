import React, { useState } from "react";

/**
 * A component that displays a button for posting a comment/reply to a post in the GroupThreadView component. used in the GroupThreadView component.
 * @param {function} handleClick - A function that is called when the button is clicked.
 * @returns {JSX.Element} - A React component that displays a button for posting a comment/reply to a post.
 * @example
 * 
 *  <PostButton handleClick={handleClick} />
 * 
 */
const PostButton = ({ messageHeader,isDisabled,handleClick }) => {
  console.log("isDisabled",isDisabled);
  const [messageContent, setMessageContent] = useState("");
  return (
    <form className="mb-6" onSubmit={handleClick}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label htmlFor="comment" className="sr-only">
          {messageHeader}
        </label>
        <textarea
          id="comment"
          rows={6}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder={messageHeader}
          required
          defaultValue={""}
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={isDisabled || messageContent.length === 0}
        className={`inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ${(isDisabled || messageContent.length===0 )? "disabled:opacity-50 cursor-not-allowed" : ""}`}>
        Post comment
      </button>
    </form>
  );
};

export default PostButton;
