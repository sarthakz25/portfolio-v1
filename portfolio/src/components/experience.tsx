import React from 'react';
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
    const { ref } = useSectionInView('Experience', 0.4);
    const { theme } = useTheme();

    return (
        <section
            id='experience'
            className="scroll-mt-28 mb-28 sm:mb-40"
            ref={ref}
        >
            <SectionHeading>
                My Experience
            </SectionHeading>

            <VerticalTimeline lineColor=''>
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement
                                visible={true}
                                contentStyle={{
                                    background: theme === 'light' ? "#fafafa" : "rgba(255, 255, 255, 0.05)",
                                    boxShadow: "none",
                                    border: "1px solid rgba(0, 0, 0, 0.1)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem",
                                }}
                                contentArrowStyle={{
                                    borderRight: theme === 'light' ? "0.4rem solid rgba(0, 0, 0, 0.2)" :
                                        "0.4rem solid rgba(255,255,255,0.1)",
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background: theme === 'light' ? "white" : "rgb(24, 24, 27)",
                                    fontSize: "1.5rem",
                                    color: theme === 'light' ? "rgba(0, 0, 0, 0.65)" : "rgb(228, 228, 231)",
                                }}
                            >
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="!mt-2 font-normal text-gray-700 dark:text-white/75">{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    );
}
