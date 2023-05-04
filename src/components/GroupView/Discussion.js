import PostButton from "./PostButton";

/**
 * Discussion component - for the thread view page, in which user can reply to already existing posts or create a new post.
 * @param {number} numComments - The number of comments in the thread.
 * @returns {JSX.Element} - A React component that displays the Discussion component.
 * @example
 * <Discussion numComments={5} />
 */
export default function Discussion({ numComments , messageHeader,isReplyAll , parentID,url}) {

  const handlePostClick = async(e) => {
    e.preventDefault();
    const message = e.target.comment.value;
    console.log("Post button clicked", message);
    const replyUrl= `http://${url}/message/${parentID}/`;

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

    const response = await fetch(replyUrl, {
      method: isReplyAll ? "POST" : "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({message }),
    });
    const data = await response.json();
    console.log(data);

    window.location.reload();
    

        
  };


  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion ({numComments})
            </h2>
          </div>
          <PostButton messageHeader={messageHeader} isDisabled={parentID===null} handleClick={handlePostClick} />
        </div>
      </section>
    </>
  );
}
