import PostButton from "./PostButton";

export default function CommentSection({ numComments}) {
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
