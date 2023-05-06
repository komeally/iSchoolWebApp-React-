import { motion } from "framer-motion";
import { useState } from 'react';
import './Minors.css';

function ExpandableCard(props) {
    const name = props.name;
    const description = props.description;
    const note = props.note;
    const [isOpen, setIsOpen] = useState(false);

    return (
        //using Framer Motion to make interactive animated cards to display data on minors
        <div>
            <motion.div 
              transition={{layout: {duration: 1, type: "spring"}}} 
              layout 
              onClick={() => setIsOpen(!isOpen)} 
              className="card"
              style={{
                borderRadius: "1rem", 
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
              }}
            >
                <motion.h4 layout="position">{name}</motion.h4>
                {isOpen && (
                    <motion.div
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{duration: 1}}
                      className="expand"
                    > 
                        <p style={{width: "100%"}}>{description}</p>
                        <p><span style={{fontSize: "smaller"}}>{note}</span></p>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default ExpandableCard;