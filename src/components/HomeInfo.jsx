import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { name } from "../constants";

const HomeInfo = ({ currentStage }) => {
  const stages = [
    {
      index: 2,
      description: 'Worked with many companies <br /> and picked up many skills along the way',
      route: '/about',
      routeLabel: 'Learn more'
    },
    {
      index: 3,
      description: 'Led multiple projects to success over the years. <br /> Curious about the impact?',
      route: '/projects',
      routeLabel: 'Visit my portfolio'
    },
    {
      index: 4,
      description: 'Need a project done or looking for a dev? <br/> I\'m just a few keystrokes away',
      route: '/contact',
      routeLabel: 'Let\'s talk'
    }
  ];

  if (currentStage === 1) {
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>{name.first}</span>
        👋
        <br />
        A Software Engineer
      </h1>
    );
  }

  return (
    <>
      {stages.map((stage, index) => {
        if (currentStage === stage.index) {
          return (
            <div className='info-box' key={index}>
              <p className='font-medium sm:text-xl text-center' dangerouslySetInnerHTML={{ __html: stage.description }} />
              <Link to={stage.route} className='neo-brutalism-white neo-btn'>
                {stage.routeLabel}
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
              </Link>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default HomeInfo;