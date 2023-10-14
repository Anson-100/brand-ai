import React, { useState, useRef, useEffect } from "react"
import logo from "@/assets/logo-main.png"
import {
  ArrowSmallUpIcon,
  ArrowUpTrayIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid"

type Props = {}

const Landing = (props: Props) => {
  const [text, setText] = useState<string>("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "inherit"
      const scrollHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = `${scrollHeight}px`
    }
  }, [text])
  return (
    <section className="h-full">
      <div className="h-full">
        <div className="m-auto w-5/6 py-5">
          <img
            src={logo}
            alt="StyleSync logo"
            className="m-auto max-h-[140px]"
          />
        </div>
        <div className="h-[65%] md:h-[55%] w-[80%] md:w-[25%] bg-desert-brown m-auto rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-logo-khaki">
          <p className="font-playfair text-[2.5rem] text-white text-center ">
            Upload your image to get started!
          </p>
          <ArrowSmallUpIcon className="text-white w-[4rem]" />
        </div>

        <div
          id="text-input"
          className="flex items-center justify-center w-[80%] md:w-[25%] m-auto my-5 bg-white border-2 border-khaki rounded-lg"
        >
          <textarea
            id="text-area"
            ref={textareaRef}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="What do you want to know about your look?"
            className="resize-y h-12 max-h-44 rounded-l-lg mr-auto w-[85%] focus:outline-none focus:bg-gray-100"
          />
          <button>
            <PaperAirplaneIcon className="h-8 pr-2 text-logo-purple" />
          </button>
        </div>

        <div className="flex items-center justify-center">
          {/* <ArrowUpTrayIcon
            id="submit"
            className="text-logo-purple w-[3rem] border-2 border-logo-purple rounded-lg"
          /> */}
        </div>
      </div>
    </section>
  )
}

export default Landing
