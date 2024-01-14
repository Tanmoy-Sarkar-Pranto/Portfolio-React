import aboutSvg from "../assets/about.svg"
import SectionTitle from "./SectionTitle"

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text="about myself" />
          <p className="mt-2 text-lg text-gray-500 capitalize tracking-wide">
            Currently pursuing a Computer Science degree at RUET, have done web
            development with react.js, developed API with node.js and
            express.js, made games using Unity, done some python gui development
            and now learning and passionate about Computer vision. Skilled in
            problem solving and producing high-quality code. Seeking a demanding
            web developer role that will allow me to use my skills and abilities
            to assisting with business growth.
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
