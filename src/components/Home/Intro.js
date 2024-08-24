import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
      // speed="10"
      // autoStart = "true"
      getBeforeInit={(instance) => {
        instance
          .type("I'm a Software Engineer.")
          .pause(750)
          .delete(18)
          .pause(500)
          .type("Web Developer.")
          .pause(750)
          .delete(14)
          .type("Front-end Developer.");

        // Remember to return it!
        return instance;
      }}
    />
  );
}

export default Intro;

// import React from "react";

// const Intro = () => {
//   return (
    // <p>
    //   I'm a passionate software engineer with a love for problem-solving and
    //   innovation. My journey in the world of technology began with a curiosity
    //   to understand how things work under the hood. With years of experience,
    //   I've honed my skills in full-stack development, specializing in building
    //   robust and scalable web applications.
    //   <br />
    //   As a software engineer, I thrive on tackling complex challenges and
    //   transforming ideas into reality through elegant code. Whether it's
    //   crafting intuitive user interfaces or optimizing backend systems for
    //   performance, I'm dedicated to delivering high-quality solutions that
    //   exceed expectations.
    //   <br />
    //   Outside of coding, you can find me exploring the latest tech trends,
    //   contributing to open-source projects, or indulging in a good book on
    //   software architecture. I'm passionate about continuous learning and
    //   staying updated with emerging technologies to stay at the forefront of
    //   innovation.
    // </p>
//   );
// };

// export default Intro;
