import { useRef } from "react";
import { Card } from "./Card";

export default function Foreground() {
    const constraintsRef = useRef(null);

    const data = [{
        description: "This is the card, ipsum dolor sit amet consectetur adipisicing.",
        fileSize: "0.8mb",
        close: true,
        tag: {isOpen: true, tagLine: "Download Now", tagColor: "green"}
    }, {
        description: "This is the card, ipsum dolor sit amet consectetur adipisicing.",
        fileSize: "3.9mb",
        close: false,
        tag: {isOpen: true, tagLine: "Download Now", tagColor: "green"}
    }, {
        description: "This is the card, ipsum dolor sit amet consectetur adipisicing.",
        fileSize: "4.8gb",
        close: true,
        tag: {isOpen: false, tagLine: "Download Now", tagColor: "green"}
    }, {
        description: "This is the card, ipsum dolor sit amet consectetur adipisicing.",
        fileSize: "9.8mb",
        close: false,
        tag: {isOpen: true, tagLine: "Download Now", tagColor: "sky"}
    }]
  return (
    <div ref={constraintsRef} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'>
        {data.map((cardData) => (
            <Card data={cardData} reference={constraintsRef}/>
        ))}
    </div>
  )
}
