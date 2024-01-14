import { FaGithubSquare } from "react-icons/fa"
import { projects } from "../data"
import ProjectCard from "./ProjectCard"
import SectionTitle from "./SectionTitle"

const Projects = () => {
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="Projects" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((item) => {
          return <ProjectCard key={item.id} {...item} />
        })}
      </div>
      <h2 className="text-xl tracking-wide font-medium">
        More Projects here:
        <a
          href="https://github.com/Tanmoy-Sarkar-Pranto"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare className="h-6 w-6 text-slate-500 hover:text-black duration-300" />
        </a>
      </h2>
    </section>
  )
}
export default Projects
