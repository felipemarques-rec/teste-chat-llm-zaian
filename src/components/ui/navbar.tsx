export default function Navbar() {
  return (
      <div className="mx-auto h-16 items-center justify-between px-4 flex">
<div>
  <img src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
      className="block invert h-8 w-auto"/>
</div>
<div className="ml-40 mr-auto lg:block relative hidden max-w-xs">
  <p className="items-center pl-3 pointer-events-none absolute inset-y-0 left-0 flex">
    <span className="items-center justify-center flex">
      <span className="items-center justify-center flex">
        <span className="h-5 w-5 items-center justify-center text-gray-400 flex">
          <span className="items-center justify-center h-full w-full flex">
            <svg className="w-full h-full" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2"><path
                strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </span>
        </span>
      </span>
    </span>
  </p>
  <input type="search" placeholder="Type to search" className="border border border-gray-700 focus:border-indigo-600
      focus:ring-indigo-600 w-full rounded-lg bg-gray-800 px-3 py-2 pb-2 pl-10 pt-2 text-gray-300 sm:text-sm"/>
</div>
<div className="ml-auto items-center justify-end md:space-x-6 flex space-x-3">
  <div className="relative">
    <p className="rounded-full bg-gray-800 pb-1 pl-1 pr-1 pt-1 text-gray-300 transition-all duration-200 hover:bg-gray-700
        hover:text-gray-900 focus:outline-none">
      <span className="items-center justify-center flex">
        <span className="items-center justify-center flex">
          <span className="items-center justify-center text-gray-300 flex">
            <span className="items-center justify-center h-full w-full flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewbox="0 0 456.147 456.147"
                  style={{enableBackground: 'new 0 0 456.147 456.147'}} fill="currentColor" className="w-full
                  h-full"><g><path
                  d="M445.666,4.445c-4.504-4.858-11.756-5.954-17.211-2.19L12.694,290.14c-3.769,2.609-5.878,7.012-5.555,11.586 c0.323,4.574,3.041,8.635,7.139,10.686l95.208,47.607l37.042,86.43c1.78,4.156,5.593,7.082,10.064,7.727 c0.621,0.091,1.242,0.136,1.856,0.136c3.833,0,7.506-1.697,9.989-4.701l38.91-46.994l107.587,52.227 c1.786,0.867,3.725,1.306,5.663,1.306c1.836,0,3.674-0.393,5.384-1.171c3.521-1.604,6.138-4.694,7.146-8.432L448.37,18.128 C449.314,14.629,449.878,8.988,445.666,4.445z M343.154,92.883L116.681,334.604l-71.208-35.603L343.154,92.883z M162.003,416.703 l-27.206-63.48L359.23,113.665L197.278,374.771c-0.836,0.612-1.634,1.305-2.331,2.146L162.003,416.703z M312.148,424.651 l-88.604-43.014L400.427,96.462L312.148,424.651z"/></g></svg>
            </span>
          </span>
        </span>
      </span>
    </p>
  </div>
  <div className="relative">
    <p className="rounded-full bg-gray-800 pb-1 pl-1 pr-1 pt-1 text-gray-300 transition-all duration-200 hover:bg-gray-700
        hover:text-gray-300 focus:outline-none">
      <span className="items-center justify-center flex">
        <span className="items-center justify-center flex">
          <span className="h-6 w-6 items-center justify-center flex">
            <span className="items-center justify-center h-full w-full flex">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15
                  17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67
                  6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
            </span>
          </span>
        </span>
      </span>
    </p>
    <p className="items-center rounded-full bg-indigo-600 px-1.5 py-0.5 text-xs font-semibold text-white absolute -right-1
        -top-px inline-flex">2</p>
  </div>
  <div className="items-center justify-center relative flex">
    <img src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg" className="object-cover
        btn- mr-2 h-9 w-9 rounded-full bg-gray-300"/>
    <p className="text-sm font-semibold">Marrie Currie</p>
  </div>
</div>
</div>
  );
};