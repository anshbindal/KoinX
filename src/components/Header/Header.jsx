function Header() {
  return (
    <div className="flex justify-between items-center px-12 py-4">
      {/* Left div with logo */}
      <div className="flex items-center">
        <a href="#" className="mr-4">
          <img src="src/assets/logo.png" alt="Logo" className="h-12 w-28" />
        </a>
      </div>

      {/* Right div with navigation links */}
      <div className="flex items-center gap-6">
        <a href="#" className="mr-4 text-black">
          Crypto Taxes
        </a>
        <a href="#" className="mr-4 text-black">
          Free Tools
        </a>
        <a href="#" className="mr-4 text-black">
          Resource Center
        </a>
        <a href="#" className="text-white bg-blue-500 rounded-lg">
          <button className="px-6 py-2 ">Get Started</button>
        </a>
      </div>
    </div>
  )
}
export default Header
