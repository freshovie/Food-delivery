import React from 'react';
import './style.scss';
import { motion } from 'framer-motion';

interface HeroPageProps {
    // Define any props here if needed in the future
}

const HeroPage: React.FC<HeroPageProps> = (props) => {
    return (
        <React.Fragment>
            <div className="heropage">
                <motion.div 
                    className="heropage__container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Add your content here */}
                </motion.div>
            </div>
        </React.Fragment>
    );
}

export default HeroPage;
