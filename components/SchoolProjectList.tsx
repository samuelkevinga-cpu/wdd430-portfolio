import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectList() {
  // Because this component is async, its database request can resolve
  // independently
  const projects = await getProjects("school");

  return <ProjectList projects={projects} />;
}