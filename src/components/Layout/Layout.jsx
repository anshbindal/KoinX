import Header from "../Header/Header"
import BreadCrumb from "../BreadCrumb/BreadCrumb"

function Layout() {
  return (
    <div>
      <Header />
      <BreadCrumb />

      <main className="container mx-auto p-4 h-[100%]">
        <div className="flex flex-wrap">
          <div className="w-[70%]"> Seventy</div>
          <div className="w-[30%]">Thirty</div>
        </div>
      </main>
    </div>
  )
}

export default Layout
