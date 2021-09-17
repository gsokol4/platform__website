import React from "react";
// import Link from "next/link";
// import Image from "next/image";
import { withTheme } from "styled-components";

import { Wrapper } from "./StyledProject";
// import OpenPositions from "./OpenPositions";
// import Team from "./Team";
// import SignUpButton from "./SignUpButton";

import { useProjectsDataContext } from "../../../../context/ProjectsContext";
import HeroSection from "./HeroSection";
import Tags from "./Tags";
import Vision from "./Vision";
import Sessions from "./Sessions"

// eslint-disable-next-line no-unused-vars
const truncateText = (text, truncateAt, replaceWith) => {
  if (text.length <= truncateAt) return text;
  return text.slice(0, truncateAt) + replaceWith;
};

const Project = (props) => {
  const projectsData = useProjectsDataContext([]);
  const [, setProjectData] = React.useState({
    heroImage: "",
    catchPhrase: "",
    keywords: [],
    projectReferenceURLs: [],
    openPositions: [],
    meetingTimes: [],
    meetingLinkURLs: [],
    team: { members: [], leaders: [] },
  });

  React.useEffect(() => {
    if (!projectsData.length) return;
    setProjectData(
      projectsData.filter((entry) => entry.slug === props.projectId)[0]
    );
  }, [projectsData, props.projectId]);

  return (
    <Wrapper>
      <div id="background" />
      <HeroSection />
      <Tags />
      <Vision Color="#3A7CA5" />
      <Sessions />
    </Wrapper>
  );
};

export default withTheme(Project);

// const Project = (props) => {
//   const projectsData = useProjectsDataContext([]);
//   const [projectData, setProjectData] = React.useState({
//     heroImage: "",
//     catchPhrase: "",
//     keywords: [],
//     projectReferenceURLs: [],
//     openPositions: [],
//     meetingTimes: [],
//     meetingLinkURLs: [],
//     team: { members: [], leaders: [] },
//   });

//   React.useEffect(() => {
//     if (!projectsData.length) return;
//     setProjectData(
//       projectsData.filter((entry) => entry.slug === props.projectId)[0]
//     );
//   }, [projectsData, props.projectId]);

//   return (
//     <Wrapper>
//       <ProjectHero projectData={projectData} />
//       <div
//         style={{
//           width: "90%",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       >
//         <div
//           style={{
//             fontFamily: props.theme.fonts.headline,
//             marginTop: "4rem",
//             marginBottom: "4rem",
//             padding: "1rem",
//             fontSize: "2.5rem",
//             border: "1px solid black",
//           }}
//         >
//           {projectData?.vision}
//         </div>
//         <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
//           <h3 style={{ display: "inline" }}>Description:</h3>{" "}
//           {projectData?.description?.split("\n").map((text, i) => (
//             <p key={i}> {text} </p>
//           ))}
//         </div>
//         <CategoriesContainer>
//           <div>
//             {/* }
//             <CategoryTitle>
//               Project
//             </CategoryTitle>
//             { */}
//             <CategoryContainer>
//               <h4>Commitment Level</h4>
//               <p>{projectData?.commitmentLevel}</p>

//               <h4>Project References</h4>
//               {projectData?.projectReferenceURLs.map((element, i) => (
//                 <p key={i}>
//                   <a
//                     href={element.url}
//                     rel="noopener noreferrer"
//                     target="_blank"
//                   >
//                     {element.title}
//                   </a>
//                 </p>
//               ))}
//             </CategoryContainer>
//           </div>
//           <div>
//             {/* }
//             <CategoryTitle>Commitment/Meetings</CategoryTitle>
//             { */}
//             <CategoryContainer>
//               <h4>Meeting Times</h4>
//               {projectData?.meetingTimes.map((meeting, i) => (
//                 <p key={i}>
//                   {meeting.title} {meeting.dateTime}
//                 </p>
//               ))}
//               <h4>Meeting Links</h4>
//               {projectData?.meetingLinkURLs.map((url) => (
//                 <p key={url.id}>
//                   <a href={url.url} rel="noopener noreferrer" target="_blank">
//                     {url.roomName}
//                   </a>
//                 </p>
//               ))}
//             </CategoryContainer>
//           </div>
//         </CategoriesContainer>
//         <br />
//       </div>
//       {projectData.openPositions.length ? (
//         <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
//           <OpenPositions projectData={projectData} />
//         </div>
//       ) : (
//         ""
//       )}
//       {projectData.team.leaders.length || projectData.team.members.length ? (
//         <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
//           <Team projectData={projectData} />
//         </div>
//       ) : (
//         ""
//       )}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           padding: "2rem",
//           color: "white",
//         }}
//       ></div>
//       <div
//         style={{
//           width: "100%",
//           marginBottom: "2rem",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <SignUpButton
//           projectName={projectData?.title}
//           style={{
//             fontSize: "3rem",
//             paddingLeft: "20vw",
//             paddingRight: "20vw",
//           }}
//         >
//           JOIN NOW
//         </SignUpButton>
//       </div>
//       <div
//         style={{
//           width: "90%",
//           marginLeft: "auto",
//           marginRight: "auto",
//           marginBottom: "2rem",
//         }}
//       >
//         <Link href="/projects" passHref>
//           <a>{"<<"} Back to Projects</a>
//         </Link>
//       </div>
//     </Wrapper>
//   );
// };

// export default withTheme(Project);
