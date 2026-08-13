import type { ProjectDetail } from "../../types/content";
import { exembleProject } from "./exemble";
import { safetyBellProject } from "./safetybell";
import { adaProject, exemUiProject, koinProject, orbroProject, togetherProject } from "./simpleProjects";

const projectDetails: ProjectDetail[] = [
  exembleProject,
  exemUiProject,
  orbroProject,
  safetyBellProject,
  adaProject,
  togetherProject,
  koinProject,
];

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}
