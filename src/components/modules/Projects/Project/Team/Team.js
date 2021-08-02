import React from "react";
import { withTheme } from "styled-components";
import { Wrapper, TeamContentContainer, MembersContainer } from "./StyledTeam";
// import { env } from "../../../../../utils/EnvironmentVariables";

const Team = (props) => {
  const { projectData } = props;

  return (
    <Wrapper>
      <h4>
        <u>Team</u>
      </h4>
      <TeamContentContainer>
        <p>
          <h4>Leader(s)</h4>
          <MembersContainer>
            {projectData?.team.leaders.map((leader) => (
              <p key={leader.id}>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: "1" }}>
                    <img
                      style={{ height: "auto" }}
                      width="100"
                      src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/176159565/original/18689bb8acd2b6cb37913d7ecb8eea12f5c6b387/make-among-us-profile-pictures.png"
                      alt="img"
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ flex: "1" }}>leader.name</p>
                    <p style={{ flex: "1" }}>leader.role</p>
                    <p style={{ flex: "1" }}>
                      <a href={`mailto:${leader.email}`}>Send Email</a>
                    </p>
                  </div>
                </div>
              </p>
            ))}
          </MembersContainer>
        </p>

        <p>
          <h4>Members</h4>
          <MembersContainer>
            {projectData?.team.members.map((member) => (
              <p key={member.id}>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div style={{ flex: "1" }}>
                    <img
                      style={{ height: "auto" }}
                      width="100"
                      src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/176159565/original/18689bb8acd2b6cb37913d7ecb8eea12f5c6b387/make-among-us-profile-pictures.png"
                      alt="img"
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ flex: "1" }}>member.name</p>
                    <p style={{ flex: "1" }}>member.role</p>
                  </div>
                </div>
              </p>
            ))}
          </MembersContainer>
        </p>
      </TeamContentContainer>
    </Wrapper>
  );
};

export default withTheme(Team);
