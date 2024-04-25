const AboutPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}>
      <h3 style={{ marginBottom: "1rem" }}>
        Introducing{" "}
        <h1 style={{ marginTop: "2rem" }}>
          Rishikesh Sharma - A MERN Stack Developer
        </h1>{" "}
        <p style={{ fontSize: "0.7rem", fontWeight: "200" }}>
          {" "}
          Shaping the Digital World
        </p>
      </h3>
      <p style={{ fontWeight: "100" }}>
        Welcome to Rishikesh Sharma&apos;s About Page! With a passion for
        creating seamless web applications and a strong command over the MERN
        (MongoDB, Express.js, React.js, Node.js) stack, Rishikesh is a dedicated
        and skilled developer ready to make an impact in the digital world.
      </p>
      <p style={{ fontWeight: "200" }}>
        My journey in the realm of technology began with a profound interest in
        software development and a commitment to continuous learning. His
        relentless pursuit of knowledge and eagerness to explore new
        technologies have equipped him with a wide range of expertise in
        building robust, efficient, and user-friendly web solutions.
      </p>{" "}
      <h3>
        Are you ready to embark on a digital journey? Connect with Rishikesh
        today and let his expertise in MERN stack development transform your
        ideas into reality.
      </h3>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
