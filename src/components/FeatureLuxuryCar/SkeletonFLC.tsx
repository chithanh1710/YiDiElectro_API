export function SkeletonFLC() {
  return (
    <div
      className={`ItemFeatureLuxuryCar cursor-wait flex flex-col relative p-3 rounded-2xl w-full h-[320px] border-4 border-gray-100`}
    >
      <h2 className="font-medium text-2xl w-24 h-9 bg-gray-100"></h2>
      <p className="text-sm text-gray-300 w-20 h-8 bg-gray-100 mt-2"></p>
      <div className="w-[80%] mx-auto my-6 h-48 bg-gray-200"></div>
      <p className=" mt-auto font-bold text-2xl w-24 h-9 bg-gray-100"></p>
      <div className="absolute right-0 bottom-0 p-3 bg-gray-200 rounded-tl-2xl rounded-br-2xl">
        <div className="h-6 w-6"></div>
      </div>
    </div>
  );
}
