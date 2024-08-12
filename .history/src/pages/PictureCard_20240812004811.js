import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import CardComponent from "./Home";

const PictureCard = ({ imageSrc, comments, likes, stars }) => {
      const [hovered, setHovered] = useState(false);
      const [seeComments, setSeeComments] = useState(false);

      const hoverSpring = useSpring({
            transform: hovered ? "scale(1.5)" : "scale(4)",
            boxShadow: hovered
                  ? "0px 20px 30px rgba(0,0,0,0.1)"
                  : "0px 10px 15px rgba(0,0,0,0.05)"
      });

      const loadSpring = useSpring({
            from: { opacity: 0, transform: "translateY(80px)" },
            to: { opacity: 1, transform: "translateY(0px)" }
      });

      function getRandomImage() {
        const images = [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
            'https://example.com/image3.jpg',
            // Add more image URLs as needed
        ];
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];

        const randomImage = getRandomImage();
    }

      return (
            // <animated.div
            //       style={{ ...hoverSpring, ...loadSpring }}
            //       className="bg-white shadow-lg rounded-lg overflow-hidden"
            //       onMouseEnter={() => setHovered(true)}
            //       onMouseLeave={() => setHovered(false)}
            // >
            //       <img
            //             src={imageSrc}
            //             alt="Picture"
            //             className="w-full h-56 object-cover"
            //       />
            //       <div className="p-4">
            //             <div className="flex items-center justify-between mb-2">
            //                   <button className="text-yellow-500">
            //                         ⭐ {stars}
            //                   </button>
            //                   <button className="text-blue-500">
            //                         👍 {likes}
            //                   </button>
            //             </div>
            //             {seeComments ? (
            //                  <div>
            //                      <div>
            //                         {comments.map((comment, index) => (
            //                               <p
            //                                     key={index}
            //                                     className="text-gray-800 text-sm mb-1"
            //                               >
            //                                     {comment}
            //                               </p>
            //                         ))}
            //                   </div>
            //                   <button
            //                   onClick={() => setSeeComments(!seeComments)}
            //                   className="text-red-500 relative left-[85%]"
            //             >
            //                   Close
            //             </button>
            //                  </div>
            //             ) : (
            //                   <button
            //                         onClick={() => setSeeComments(true)}
            //                         className="text-blue-500"
            //                   >
            //                         Comments (40)
            //                   </button>
            //             )}
            //       </div>


            // </animated.div>

            <di>





<CardComponent image={randomImage} likes={10} stars={5} comments={3} /></di>
      );
};

export default PictureCard;
