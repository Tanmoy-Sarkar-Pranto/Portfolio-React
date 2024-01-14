import { nanoid } from "nanoid"
import { FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
]

export const skills = [
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Proficiency in React, developing responsive websites with component-based architecture. Have advanced knowledge",
  },
  {
    id: nanoid(),
    title: "Node",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Have intermediate knowledge in Node and Express js, have experience in building RESTful APIs",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in Python, done some development using this and have knowledge of OOP",
  },
]

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://cart-react.onrender.com/",
    github: "https://github.com/Tanmoy-Sarkar-Pranto/Cart-React",
    title: "Cart",
    text: "Cart system that is used in online shops, using React js",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/616836/pexels-photo-616836.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://cocktails-react.onrender.com/",
    github: "https://github.com/Tanmoy-Sarkar-Pranto/Cocktails-React",
    title: "MixMaster",
    text: "This is a Project which explores React Router to build an SPA(Single Page Application) ",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/140945/pexels-photo-140945.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://jobs-api-p9bz.onrender.com/api-docs/",
    github: "https://github.com/Tanmoy-Sarkar-Pranto/Job-API",
    title: "Jobs API",
    text: "API for searching, posting jobs with authentication.",
  },
]
