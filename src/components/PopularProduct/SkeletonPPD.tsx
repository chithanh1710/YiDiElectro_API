export function SkeletonPPD() {
  return (
    <>
      <div className="image md:h-[max(12vw)] h-[30vw] w-auto transition-all duration-700 opacity-50 scale-75 mx-auto bg-gray-200"></div>
      <div className="content pt-[1rem] opacity-0 scale-[0.25] transition-all duration-700">
        <h3 className="text-lg font-medium bg-gray-100"></h3>
        <div className="text-3xl py-[1rem] px-0 font-bold text-yellow-400 ">
          <span className="font-medium text-black text-[1.7rem] bg-gray-100 w-24 h-10 mx-4 inline-block"></span>
          <span className="font-medium text-black text-[1.7rem] bg-gray-100 w-36 h-10 inline-block"></span>
        </div>
        <div className="text-lg p-4 pt-6 border-t-2 flex items-center justify-center gap-5 flex-wrap ">
          <p className=" flex gap-2 items-center bg-gray-100 h-10 w-24"></p>
          <p className=" flex gap-2 items-center bg-gray-100 h-10 w-24"></p>
          <p className=" flex gap-2 items-center bg-gray-100 h-10 w-24"></p>
          <p className=" flex gap-2 items-center bg-gray-100 h-10 w-24"></p>
        </div>
        <button className="py-2 px-4 rounded-lg w-32 h-12 bg-gray-100"></button>
      </div>
    </>
  );
}
