import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Pretitle from './Pretitle';
import FaqItem from './FaqItem';

const faqItemsData = [
  {
    title: "How long does a construction project usually take?",
    description: "Timelines vary based on the project size and complexity"
  },
  {
    title:"Do I need permits for my project",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aut placeat itaque repellendus sunt recusandae veniam. Perferendis magni dolor natus asperiores dignissimos beatae optio perspiciatis, repellendus similique illum ipsum veniam."
  },
  {
    title:"What materials do you use",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aut placeat itaque repellendus sunt recusandae veniam. Perferendis magni dolor natus asperiores dignissimos beatae optio perspiciatis, repellendus similique illum ipsum veniam."
  },
  {
    title:"Can I make changes after construction starts",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aut placeat itaque repellendus sunt recusandae veniam. Perferendis magni dolor natus asperiores dignissimos beatae optio perspiciatis, repellendus similique illum ipsum veniam."
  },
  {
    title:"How much will my construction project cost",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aut placeat itaque repellendus sunt recusandae veniam. Perferendis magni dolor natus asperiores dignissimos beatae optio perspiciatis, repellendus similique illum ipsum veniam."
  },
  {
    title:"How do you ensure quality and safety on-site",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aut placeat itaque repellendus sunt recusandae veniam. Perferendis magni dolor natus asperiores dignissimos beatae optio perspiciatis, repellendus similique illum ipsum veniam."
  },
  {
    title:"Do I need permits for my project",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex aut placeat itaque repellendus sunt recusandae veniam. Perferendis magni dolor natus asperiores dignissimos beatae optio perspiciatis, repellendus similique illum ipsum veniam."
  },
];

// animation variants
const faqItemsVariants = {
  hidden: { opacity: 0, y: 30},

  visible: (index)=> ({
    opacity: 1,
    y: 0,
    transition: {delay: index = 0.1, duration: 0.3},
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <div className='text-center max-w-[540px] mx-auto xl:mb-20'>
          <Pretitle text="Faq" center />
          <h2 className="h2">Got Questions? We've Got You Covered</h2>
          <p className='mb-11 max-w-[480px] mx-auto'>
            From project planning to final touches, we've answered the most common
            questions to help you make imformed decisions.
          </p>
        </div>
        {/* faq items */}
        <ul className='w-full flex flex-col'>
          {faqItemsData.map((item, index) => {
            return (<li key={index}>
              <FaqItem title={item.title} description={item.description} />
            </li>);
          })}
        </ul>
      </div>

    </section>
  );
};

export default Faq;
