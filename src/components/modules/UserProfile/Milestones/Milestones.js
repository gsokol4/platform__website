import React from "react";
import {
  Wrapper,
  TaskGroup,
  Title,
  Task,
  Description,
} from "./StyledMilestones";

export default function Milestones(props) {
  const milestones = props.data;
  return (
    <Wrapper>
      <h3
        style={{
          paddingRight: "1rem",
          paddingLeft: "1rem",
          paddingTop: "0rem",
          paddingBottom: "1rem",
        }}
      >
        Milestones
      </h3>
      {milestones?.map((milestone, i) => (
        <TaskGroup key={i}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Title>
              {milestone.title}
              <Description>{milestone.description}</Description>
            </Title>
            {milestone.task.map((task) => (
              <Task key={i} primary={task.isReached}>
                {task.title}
                <p
                  style={{
                    marginTop: ".9rem",
                    marginLeft: "-1rem",
                  }}
                >
                  {task.isReached ? "hit" : "reach"} by: {task.completionDate}
                </p>
              </Task>
            ))}
          </div>
        </TaskGroup>
      ))}
    </Wrapper>
  );
}

/* 
{today.map((day, i) => (
        <Day key={i}>
          <WeekdayTitle>{day}</WeekdayTitle>
          {eventList.map(
            ({ name, time, weekday }) =>
              weekday === i + 1 && (
                <Event key={`${name}_${time}`}>
                  {name}
                  <br />
                  {time}
                </Event>
              )
          )}
          {eventList.filter(({ weekday }) => weekday === i + 1).length === 0 ? (
            <div style={{ fontSize: "1rem" }}>No events</div>
          ) : (
            ""
          )}
        </Day>
      ))}

*/
