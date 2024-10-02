import NavPages from "../../utils/NavPages";
import "./AboutPage.css";
const AboutPage = () => {
  return (
    <section className="about_section">
      <NavPages pageName={"About"} />
      <div className="about_card">
        <img src="./aboutMe.jpg" alt="portrait" className="about_portrait" />
        <div className="about_text-container">
          <h3 className="about-h3">A bit of me</h3>
          <p className="about-paragraph">
            I&apos;m a Colombian full-stack web developer, photographer, and
            entrepreneur with a diverse background and a passion for creativity.
            As a freelancer
          </p>
        </div>
      </div>
      <div className="parallax"></div>
      <p className="about-paragraph">
        I enjoy tackling a wide range of projects, combining technical expertise
        with artistic flair. Fluent in 2.5 languages, I currently live in
        Wroclaw, Poland, where I continue to grow professionally and explore new
        opportunities.
      </p>
    </section>
  );
};

export default AboutPage;
