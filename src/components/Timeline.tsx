
import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
       <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#f9f9f9", color: "#333" }}
            contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}
            date="2023 - Present"
            iconStyle={{ background: "#5000ca", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{ color: "#222" }}>
              Java Full-Stack Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{ color: "#444" }}>
              OSS Technologies
            </h4>
            <p style={{ color: "#555" }}>
              Full-stack Java Development, Java/Spring Boot, Project Development.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
           
      </div>
    </div>
  );
}

export default Timeline;



