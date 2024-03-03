export default function ErrorVideoNotFound() {
  return (
    <div className="max-w-[100%] lg:max-w-[70%] lg:min-w-[50%] md:mx-5 md:mr-8 md:mb-4 mb-3 ">
      <div className="flex bg-cover text-black capitalize w-[100%] dark:text-white text-xl text-center justify-center items-center bg-gray-400/80 dark:bg-gray-700" style={{ aspectRatio: 8.7 / 4.9 }}>
        video tidak ada
      </div>
      <div className="md:pb-5 md:pt-2 px-4 pt-2 pb-4 md:px-0">
        <div className="h-5 bg-gray-400/80 rounded-sm dark:bg-gray-700 max-w-[86%] mb-2.5"></div>
        <div className="h-4 bg-gray-400/80 rounded-sm dark:bg-gray-700 max-w-[15%] mb-2.5"></div>
        <hr className="border-gray-400/90 dark:border-gray-600 my-2" />
        <div className="font-roboto whitespace-pre-line dark:text-gray-300">
          <div className="h-3 bg-gray-400/80 rounded-sm dark:bg-gray-700 max-w-[20%] mb-[0.4rem]"></div>
          <div className="h-3 bg-gray-400/80 rounded-sm dark:bg-gray-700 max-w-[24%] mb-[0.4rem]"></div>
          <div className="h-3 bg-gray-400/80 rounded-sm dark:bg-gray-700 max-w-[23%] mb-[0.4rem]"></div>
          <div className="h-3 bg-gray-400/80 rounded-sm dark:bg-gray-700 max-w-[23%] mb-[0.4rem]"></div>
        </div>
      </div>
      <div className="w-[100%] lg:hidden h-1 bg-gray-200 dark:bg-gray-500 opacity-75"></div>
    </div>
  );
}
