const Layout = () => {
  return (
    <div className="h-screen bg-white">
      <div className="grid grid-rows-3 grid-flow-col gap-4 h-screen">
        <div className="row-span-3 bg-black rounded-lg mt-20 ml-10 mr-20 mb-20 ">
          SideBar
          <div className="flex justify-center my-8 ">
            <img
              src="https://placeimg.com/300/100/people"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
          <ul className=" mt-1/3 text-xl opacity-50 ">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="pt-5 ">
              <a href="#">Search</a>
            </li>
            <li className="pt-5">
              <a href="#">Posts</a>
            </li>
            <li className="pt-5">
              <a href="#">Friends</a>
            </li>
            <li className="pt-5">
              <a href="#">Albums</a>
            </li>
          </ul>
        </div>
        <div className="row-span-3 col-span-12 bg-black rounded-lg mt-20 ml-10 mr-20 mb-20">
          MainPage
          {/**/}
          <div class="grid grid-flow-col gap-2 grid-cols-3 h-full ml-2 mr-2 mb-1">
            <div class="row-span-12 col-span-12 bg-blue-900 rounded-lg">Search Bar</div>
            <div class="row-span-4 col-span-12 bg-blue-500 rounded-lg">Main content</div>
            <div class="row-span-5 bg-blue-900 rounded-lg">List of friends/avticity</div>
          </div> 
        </div>
        {/*<div class="row-span-2 col-span-3 bg-black">03</div> */}
      </div>
    </div>
  );
};

export default Layout;
