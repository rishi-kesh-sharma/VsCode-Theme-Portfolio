import styles from "../styles/ContactCode.module.css";

const contactItems = [
  // {
  //   social: "website",
  //   link: "Rishikesh",
  //   href: "https://portfolio-rishi.netlify.app",
  // },
  {
    social: "email",
    link: "rks83601@gmail.com",
    href: "mailto:rks83601@gmail.com",
  },
  {
    social: "github",
    link: "rishi-kesh-sharma",
    href: "https://github.com/rishi-kesh-sharma",
  },
  {
    social: "linkedin",
    link: "Rishikesh Sharma",
    hred: "https://www.linkedin.com/in/rishi-sharma-579685193/",
  },
  // {
  //   social: "twitter",
  //   link: "iamnitinr",
  //   href: "https://www.twitter.com/iamnitinr",
  // },
  {
    social: "instagram",
    link: "rishikesh",
    href: "https://www.instagram.com/ri_c_sharma",
  },
  // {
  //   social: "polywork",
  //   link: "nitinranganath",
  //   href: "https://www.polywork.com/nitinranganath",
  // },
  {
    social: "telegram",
    link: "rishikeshsharma",
    href: "https://t.me/rkeshsharma",
  },
  {
    social: "codepen",
    link: "rishikeshsharma",
    href: "https://codepen.io/Rishi-Sharma-the-animator",
  },
  {
    social: "codesandbox",
    link: "rishikeshsharma",
    href: "https://codesandbox.io/u/rishi-kesh-sharma",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
