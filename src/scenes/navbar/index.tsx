import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logoIcon from "@/assets/logo-icon.png"

type Props = {}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between"

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} m-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={logoIcon} alt="StyleSync Icon" className="h-[3rem]" />
            {/* RIGHT SIDE */}
            <div className={`$flexBetween`} w-full>
              <div className={`${flexBetween} gap-8 text-sm`}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
