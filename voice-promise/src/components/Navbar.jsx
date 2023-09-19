const Navbar = () => {
  return (
    <div className="w-full h-[50px] flex justify-between items-center nav bg-white/70 fixed left-0 top-0 z-30 centered drop">
      <div className="w-[1280px] centered flex justify-between">
        <div className="w-[200px] pl-5 flex items-center">Logo</div>
        <div className="w-[300px] pr-5 flex justify-around items-center">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
          <h1>Map</h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar