import React, { useState } from "react";

/**
 * A component that displays a modal for adding a post.
 * @param {bool} isVisible - Whether the modal is visible.
 * @param {function} setIsVisible - A function that toggles the visibility of the modal.
 * @returns {JSX.Element} A React component that displays a modal for adding a post.
 * @example
 * <ModalAddPost />
 */
export default function ModalCreateGroup({ isVisible, setIsVisible }) {
  const [subjectCharCount, setSubjectCharCount] = useState(0);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [anyoneCanJoin, setAnyoneCanJoin] = useState("");
  const [db, setDb] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsVisible(false);
  };

  return (
    <div>
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-50 ${
          isVisible ? "absolute" : "hidden"
        } w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative w-full max-w-md max-h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={() => setIsVisible(false)}>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Create a Group
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="group-name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Group name
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    maxLength={50}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Add group name... 👋🏻"
                    onChange={(e) => {
                      setName(e.target.value);
                      setSubjectCharCount(e.target.value.length);
                    }}
                    required
                  />
                  <p className="text-right text-xs text-gray-500 dark:text-gray-400">
                    {subjectCharCount}/{50}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="group-email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Group email
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    maxLength={50}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Add group email... 👋🏻"
                    onChange={(e) => {
                      setEmail(e.target.value);

                    }}
                    required
                  />   
                </div>
                <div>
                  <label
                    htmlFor="group-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Group Password
                  </label>
                  <input
                    type="password"
                    name="subject"
                    id="subject"
                    maxLength={50}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Add group email... 👋🏻"
                    onChange={(e) => {
                      setPassword(e.target.value);

                    }}
                    required
                  />   
                </div>
                
                <div className="flex flex-col">
  <label htmlFor="group-visibility" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Public or private visibility:
  </label>

  <label htmlFor="public">
    <input
      className="mr-2"
      type="radio"
      id="public"
      name="visibility"
      value="public"
      onChange={(e) => {
        setVisibility(e.target.value);
      }}
      required
    />
    Public
  </label>

  <label htmlFor="private">
    <input
      className="mr-2"
      type="radio"
      id="private"
      name="visibility"
      value="private"
      onChange={(e) => {
        setVisibility(e.target.value);
      }}
      required
    />
    Private
  </label>
</div>
                

<div className="flex flex-col">
  <label htmlFor="group-join" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Anyone can join:
  </label>

  <label htmlFor="yes">
    <input
    className="mr-2"
      type="radio"
      id="yes"
      name="join"
      value="yes"
      onChange={(e) => {
        setAnyoneCanJoin(e.target.value);
      }}
      required
    />
    Yes
  </label>

  <label htmlFor="no">
    <input
      type="radio"
      className="mr-2"
      id="no"
      name="join"
      value="no"
      onChange={(e) => {
        setAnyoneCanJoin(e.target.value);
      }}
      required
    />
    No
  </label>
</div>
<div className="flex flex-wrap">
<label htmlFor="group-visibility" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Database region:
  </label>
  <br/>
  <label htmlFor="south" className="flex items-center mr-8 mb-2">
    <input
      className="mr-2"
      type="radio"
      id="south"
      name="db"
      value="south"
      onChange={(e) => {
        setDb(e.target.value);
      }}
      required
    />
    <span>South</span>
  </label>

  <label htmlFor="north" className="flex items-center mr-8 mb-2">
    <input
      className="mr-2"
      type="radio"
      id="north"
      name="db"
      value="north"
      onChange={(e) => {
        setDb(e.target.value);
      }}
      required
    />
    <span>North</span>
  </label>

  <label htmlFor="east" className="flex items-center mr-8 mb-2">
    <input
      className="mr-2"
      type="radio"
      id="east"
      name="db"
      value="east"
      onChange={(e) => {
        setDb(e.target.value);
      }}
      required
    />
    <span>East</span>
  </label>

  <label htmlFor="west" className="flex items-center mr-8 mb-2">
    <input
      className="mr-2"
      type="radio"
      id="west"
      name="db"
      value="west"
      onChange={(e) => {
        setDb(e.target.value);
      }}
      required
    />
    <span>West</span>
  </label>
</div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Create Group
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
