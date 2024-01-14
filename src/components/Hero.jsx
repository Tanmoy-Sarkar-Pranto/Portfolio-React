import heroImg from "../assets/hero.svg"
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl tracking-wider font-bold">I'm Tanmoy</h1>
          <p className="mt-4 text-2xl text-slate-700 tracking-wider capitalize">
            Web Developer, Computer vision Enthusiast
          </p>

          <div className="flex gap-x-4 mt-4">
            <p className="text-lg text-slate-700 tracking-wider font-bold">
              Contacts:
            </p>
            <a
              href="https://github.com/Tanmoy-Sarkar-Pranto"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="h-6 w-6 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/tanmoy-sarkar-pranto-5a25901b3/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-6 w-6 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.facebook.com/lmpranto.10/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className="h-6 w-6 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="hero" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  )
}
export default Hero
