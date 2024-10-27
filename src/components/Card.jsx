import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuDownload } from "react-icons/lu"

export function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} className="relative flex-shrink-0 w-52 h-64 rounded-[30px] bg-zinc-900/90 text-slate-50 px-7 py-10 overflow-hidden z-[5]">
        <FaRegFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">{data.description}</p>
        <div className="footer absolute bottom-0 left-0 w-full">
            <div className="flex justify-between items-center py-3 px-8">
                <h5>{data.fileSize}</h5>
                {!data.close ? <LuDownload /> : <IoIosCloseCircleOutline />}
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-2 bg-${data.tag.tagColor}-500 flex items-center justify-center`}>
                    <h3 className="text-sm font-semibold">{data.tag.tagLine}</h3>
                </div>
            )}
        </div>
    </motion.div>
  )
}
