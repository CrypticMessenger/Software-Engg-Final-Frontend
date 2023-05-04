import PostButton from "./PostButton";

/**
 * Discussion component - for the thread view page, in which user can reply to already existing posts or create a new post.
 * @param {number} numComments - The number of comments in the thread.
 * @returns {JSX.Element} - A React component that displays the Discussion component.
 * @example
 * <Discussion numComments={5} />
 */
export default function Discussion({ numComments }) {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion ({numComments})
            </h2>
          </div>
          <PostButton />
        </div>
      </section>
    </>
  );
}
