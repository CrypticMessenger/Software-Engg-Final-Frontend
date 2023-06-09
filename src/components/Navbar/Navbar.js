import React, { useContext, useState } from "react";
import { HiUserGroup } from "react-icons/hi";
import {  FaSearchPlus, FaStar } from "react-icons/fa";
import { VscListSelection } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/userProvider";
import ButtonSecondary from "../common/ButtonSecondary";
import { MdAdd } from "react-icons/md";
import ModalCreateGroup from "../modals/ModalCreateGroup";
/**
 * A component that displays a navbar.
 * @param {Object} children The children of the component.
 * @returns {JSX.Element} A React component that displays a navbar.
 * @example
 * <Navbar />
 */
export default function Navbar({ children }) {
  const groupsData = [
    {
      name: "Neil Sims",
      email: "neil.sims@SubPubNet.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: true,
    },
    {
      name: "blast you",
      email: "neil.sim2s@SubPubNet.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: false,
    },
    {
      name: "Neil Sims",
      email: "neil.sim5s@SubPubNet.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: true,
    },
    {
      name: "Neil Si",
      email: "neil.si3ms@SubPubNet.com",
      imagePath: "https://cdn.tuk.dev/assets/templates/olympus/projects.png",
      joinDate: "Nov 10, 2024",
      isCreated: false,
    },
  ];
  const [groups, setGroups] = useState(groupsData);
  const newFilteredGroup = groupsData.filter(
    (group) => group.isCreated === true
  );

  const [isVisible, setShowSidebar] = useState(false);
  const [isProfileVisible, setProfileVisible] = useState(false);
  const { handleLogout } = useContext(UserContext);
  const toggleSidebar = () => {
    setShowSidebar(!isVisible);
  };
  const toggleProfile = () => {
    setProfileVisible(!isProfileVisible);
  };
  const signOut = () => {
    handleLogout();
    toggleProfile();
  };
  const [toggleCreateGroup, setToggleCreateGroup] = useState(false);
  const toggleCreateGroupModal = () => {
    setToggleCreateGroup(!toggleCreateGroup);
  };
    
  const { user } = useContext(UserContext);
  return (
    <>
      <div data-testid="Navbar">
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                {/* 
            Button for toggling sidebar
        */}
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  onClick={toggleSidebar}>
                  <VscListSelection />
                </button>

                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                </button>
                <Link to="/dashboard" className="flex ml-2 md:mr-24">
                  <img
                    src="/logo512.png"
                    className="h-8 mr-3"
                    alt=""
                  />
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  SubPubNet
                  </span>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ml-3">
                  <div>
                    <div
                      className="relative"
                      data-te-dropdown-position="dropstart">
                      <button
                        className="flex items-center whitespace-nowrap rounded bg-primary pb-2 pl-4 pr-6 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        type="button"
                        id="dropdownMenuButton1s"
                        data-te-dropdown-toggle-ref
                        aria-expanded="false"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        onClick={toggleProfile}>
                        <img
                          className="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="user photo"
                        />
                      </button>
                      <ul
                        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                        aria-labelledby="dropdownMenuButton1s"
                        data-te-dropdown-menu-ref>
                        <li>
                          <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref>
                            Action
                          </a>
                        </li>
                        <li>
                          <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref>
                            Another action
                          </a>
                        </li>
                        <li>
                          <a
                            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                            href="#"
                            data-te-dropdown-item-ref>
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`z-50  ${
                      isProfileVisible ? "absolute top-full right-0" : "hidden"
                    } my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                    id="dropdown-user">
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none">
                        {user?.name ?? "User"}
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none">
                        {user?.email ?? "h@gmail.com"}
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                          onClick={toggleProfile}>
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                          onClick={toggleProfile}>
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                          onClick={toggleProfile}>
                          Settings
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          role="menuitem"
                          onClick={signOut}>
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <aside
          id="logo-sidebar"
          className={`${
            isVisible ? "absolute" : "hidden"
          } fixed  z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
          aria-label="Sidebar">
          <div className="h-full  px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              {/* Add new groupt button */}
              <li>
                <ButtonSecondary onClick={toggleCreateGroupModal}>
                  <MdAdd className="w-5 h-5 mr-2" />
                  Add New Group
                </ButtonSecondary>
              </li>
              <hr className="my-2" />
              {/* My Groups */}

              <li>
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <HiUserGroup />
                  <span className="ml-3">My Groups</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/favourites"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FaStar />
                  <span className="ml-3">Favourite Groups</span>
                </Link>
              </li> */}
              <li>
                <Link
                  to="/searchGroups"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FaSearchPlus />
                  <span className="ml-3">Search Groups</span>
                </Link>
              </li>
              <hr className="my-2" />
              {/* {createdGroupList} */}
            </ul>
          </div>
        </aside>
        <div className={`p-4 ${isVisible ? "sm:ml-64" : "sm:ml-2"}`}>
          <div className="p-4 mt-14">{children}</div>
        </div>
      </div>
      {toggleCreateGroup && <ModalCreateGroup isVisible={toggleCreateGroup} setIsVisible={setToggleCreateGroup} />}
    </>
  );
}
