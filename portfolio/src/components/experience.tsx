import React from 'react';
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
    const { ref } = useSectionInView('Experience', 0.4);

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
                                    background: "#fafafa",
                                    boxShadow: "none",
                                    border: "1px solid rgba(0,0,0,0.1)",
                                    textAlign: "left",
                                    padding: "1.3rem 2rem",
                                }}
                                contentArrowStyle={{
                                    borderRight: "0.4rem solid rgba(0,0,0,0.2)",
                                }}
                                date={item.date}
                                icon={item.icon}
                                iconStyle={{
                                    background: "white",
                                    fontSize: "1.5rem",
                                    color: "rgba(0,0,0,0.65)"
                                }}
                            >
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="!mt-1 font-normal text-gray-700">{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    );
}
