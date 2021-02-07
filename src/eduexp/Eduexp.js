import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Eduexp.css";

const Eduexp = () => {
  return (
    <div>
      <div id="eduexp">
        <div class="firstsectionedu">
          <p>Education</p>
          <h3>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="&nbsp; 2020 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  MERN Stack Fellow
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Mumbai, IN
                </h4>
                <p>MERN Full Stack Developer at The Youth Project</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2012 - 2016 &nbsp; "
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  BE Electronics
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Mumbai, IN
                </h4>
                <p>Completed BE in Electronics</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </h3>
        </div>
        <div class="secondsectionedu">
          <p>Experience</p>
          <h3>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="&nbsp; 2019 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Sr Software Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Mumbai, IN
                </h4>
                <p>Sr Software Developer at Euclid Infotech Ltd</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017 - 2019 &nbsp; "
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Software Engineer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">Pune, IN</h4>
                <p>Software Developer at Tech Mahindra Ltd</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Eduexp;
