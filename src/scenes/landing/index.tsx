import { useState, useRef, useEffect } from "react"
import logoDark from "@/assets/logo-main.png"
import logoLight from "@/assets/logo-light.png"
import { ArrowSmallUpIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid"

type Props = {
  isDark: boolean
}

const Landing = ({ isDark }: Props) => {
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
    <section>
      <div className="h-full pb-[60px]">
        <div className="m-auto py-3 flex">
          {" "}
          <img
            src={isDark ? logoDark : logoLight}
            alt="StyleSync logo"
            className="m-auto w-4/6 md:w-2/6 align-middle"
          />
        </div>
        <div className="w-[80%] pb-[37%] pt-[37%] md:w-[23%] md:pb-[8%] md:pt-[8%] bg-khaki dark:bg-desert-brown m-auto rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-200">
          <p className="font-playfair text-[2.5rem] text-white text-center ">
            Upload your image to get started!
          </p>
          <ArrowSmallUpIcon className="text-white w-[4rem]" />
        </div>

        <div
          id="text-input"
          className="flex items-center justify-center w-[80%] md:w-[23%] m-auto my-5 bg-white border-2 border-gray-300 rounded-lg"
        >
          <textarea
            id="text-area"
            ref={textareaRef}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="What do you want to know about your look?"
            className="text-[20px] resize-y h-12 max-h-44 rounded-l-lg mr-auto w-[85%] focus:outline-none focus:bg-gray-100"
          />
          <button className="w-[12%]">
            <PaperAirplaneIcon className="h-8 text-logo-purple hover:text-neon-purple transition duration-300" />
          </button>
        </div>

        <div className="flex items-center justify-center"></div>
      </div>
    </section>
  )
}

export default Landing
