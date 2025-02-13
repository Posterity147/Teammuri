import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SlidingDivs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const services = [
    { title: "Car Sales", description: "Find new and pre-owned cars that suit your style and budget.", link: "/carsales" },
    { title: "Vehicle Maintenance", description: "Ensure your vehicle runs smoothly with our expert service.", link: "/vehiclemaintenance" },
    { title: "Financing Options", description: "Get flexible financing plans tailored to your needs.", link: "/financingoptions" },
    { title: "Trade-in Services", description: "Exchange your old car for credit toward a new one.", link: "/trade-in-services" },
    { title: "Test Drives", description: "Experience your favorite car before making a decision.", link: "/testdrives" },
  ];

  return (
    <motion.div
      className="flex flex-col gap-6 p-8 max-w-3xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map((service, i) => (
        <Link to={service.link} key={i}>
          <motion.div
            className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl shadow-xl flex flex-col items-center justify-center text-lg font-semibold cursor-pointer hover:scale-105 transition-transform"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-sm text-gray-200 mt-2 text-center">{service.description}</p>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default SlidingDivs;
