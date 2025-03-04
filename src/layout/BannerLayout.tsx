import { Outlet } from "react-router-dom"
import Banner from "../components/Banner"

function BannerLayout() {
  return (
    <div className="md:p-2 bg-lighter-blue-custom md:bg-white md:grid md:grid-cols-[30%_auto] md:gap-x-3 h-screen relative">
      <Banner />
      <Outlet />
    </div>
  )
}
export default BannerLayout