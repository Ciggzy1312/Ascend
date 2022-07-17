import { useSession, getSession } from "next-auth/react"
import prisma from '../../lib/prisma'
import ProjectCard from '../../components/Projects/ProjectCard'

const Projects = () => {
  return (
    <div className=''>
      <ProjectCard />
    </div>
  )
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
  console.log(projects)

  return {
    props: {
      data: projects,
    }
  }
}

export default Projects