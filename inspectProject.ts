import { summarizeProject } from "./src/summarizeProject.ts"
import { validateProjectDirectory } from "./src/validateProjectDirectory.ts"

function main(): void {
  summarizeProject(validateProjectDirectory())
}

main()
