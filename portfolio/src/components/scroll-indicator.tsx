// // ScrollIndicator.tsx

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const ScrollIndicator = () => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;

//       const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;

//       setIsVisible(scrollPercentage < 100);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleClick = () => {
//     const aboutSection = document.getElementById('about');

//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <motion.div
//       className={`scroll-indicator ${isVisible ? 'visible' : ''}`}
//       onClick={handleClick}
//       initial={{ opacity: 0, scale: 1 }}
//       animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       🡓
//     </motion.div>
//   );
// };

// export default ScrollIndicator;
