// src/components/Timeline.js
import React, { useState, useEffect } from 'react';
import { csv } from 'd3-fetch';
import classNames from 'classnames';

const Timeline = ({ csvPath }) => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    csv(csvPath).then((data) => {
      setTimelineData(data);
    });
  }, [csvPath]);

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {timelineData.map((entry, index) => (
        <li key={index}>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10 ${index % 2 === 0 ? 'md:text-end' : ''}`}
          >
            <time className="font-mono italic">{entry.dates}</time>
            <div className={classNames({ 'text-primary': entry.highlight === 'yes' }, 'text-lg font-black')}>
              {entry.school}
            </div>
            <div className={classNames({ 'text-secondary': entry.highlight === 'yes' }, 'text-lg font-bold')}>
              {entry.degree}
            </div>
            {entry.thesis && <div>{entry.thesis}</div>}
          </div>
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
