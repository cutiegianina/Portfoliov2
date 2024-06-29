import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";
import { name } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          {name.first}
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          a Full-Stack Software Engineer based in the Philippines, specializing in software development
          through hands-on learning and building applications from scratch.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Tech Stacks</h3>

        <h1 className='mt-5 text-2xl'>Front-end</h1>
        <div className='mt-4 flex flex-wrap gap-12 justify-center md:justify-start'>
          {skills.map(skill => {
            if (skill.type == 'Frontend') {
              return (
              <div className='block-container w-20 h-20 ml-5 flex justify-center' key={skill.name}>
                <span className='absolute z-10 text-xs'>{skill.name}</span>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                    title={skill.name}
                  />
                </div>
              </div>
            )}
          })} 
        </div>

        <h1 className='mt-5 text-2xl'>Back-end</h1>
        <div className='mt-4 flex flex-wrap gap-12 justify-center md:justify-start'>
          {skills.map(skill => {
            if (skill.type == 'Backend') {
              return (
              <div className='block-container w-20 h-20 ml-5 flex justify-center' key={skill.name}>
                <span className='absolute z-10 text-xs'>{skill.name}</span>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                    title={skill.name}
                  />
                </div>
              </div>
            )}
          })} 
        </div>

        <h1 className='mt-5 text-2xl'>Database</h1>
        <div className='mt-4 flex flex-wrap gap-12 justify-center md:justify-start'>
          {skills.map(skill => {
            if (skill.type == 'Database') {
              return (
              <div className='block-container w-20 h-20 ml-5 flex justify-center' key={skill.name}>
                <span className='absolute z-10 text-xs'>{skill.name}</span>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                    title={skill.name}
                  />
                </div>
              </div>
            )}
          })} 
        </div>

        <h1 className='mt-5 text-2xl'>Version Control</h1>
        <div className='mt-4 flex flex-wrap gap-12 justify-center md:justify-start'>
          {skills.map(skill => {
            if (skill.type == 'Version Control') {
              return (
              <div className='block-container w-20 h-20 ml-5 flex justify-center' key={skill.name}>
                <span className='absolute z-10 text-xs'>{skill.name}</span>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                    title={skill.name}
                  />
                </div>
              </div>
            )}
          })} 
        </div>

      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
