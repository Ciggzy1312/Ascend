import { useState } from "react"
import { useSession, getSession } from "next-auth/react"
import prisma from '../../lib/prisma'
import ProjectCard from '../../components/Projects/ProjectCard'

const Projects = ({data}) => {

  const [projects, setProjects] = useState(data)

  const { data: session, status } = useSession()

  console.log(projects)

  if(status === "authenticated"){
      return (
        <div className="">
        {projects.map((project)=>(
          <div className='' key={project.id}>
            <ProjectCard project={project}/>
          </div>
        ))}
      </div>
    )
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const email = session.user.email
  const projects = await prisma.project.findMany({
    where: {
      userId: {
        equals: email,
      }
    },
  });

  return {
    props: {
      data: projects,
    }
  }
}

export default Projects