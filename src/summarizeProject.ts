import { readdirSync, statSync } from "fs"
import { join as pathJoin, relative as pathRelative, basename } from "path"

const directoriesToSkip = [".git", "node_modules", "vendor"]

export function summarizeProject(projectDirectoryPath: string): void {
  summarizeDirectoryStructure(projectDirectoryPath, projectDirectoryPath)
}

function summarizeDirectoryStructure(
  directoryPath: string,
  baseDirectory: string,
  depth: number = 0
): void {
  const directoryName = basename(directoryPath)
  if (depth === 0) {
    console.log(`Listing files and directories in: ${directoryName}`)
  } else {
    if (directoriesToSkip.includes(directoryName)) {
      console.log(`${" ".repeat((depth + 1) * 2)}[...]`)
      return
    }
  }

  const items = readdirSync(directoryPath)

  for (const item of items) {
    const itemPath = pathJoin(directoryPath, item)

    if (statSync(itemPath).isDirectory()) {
      const relativeItemPath = pathRelative(baseDirectory, itemPath)
      console.log(
        `${" ".repeat((depth + 1) * 2)}Directory: ${relativeItemPath}`
      )
      summarizeDirectoryStructure(itemPath, baseDirectory, depth + 1)
    } else {
      console.log(
        `${" ".repeat((depth + 1) * 2)}File: ${pathRelative(
          baseDirectory,
          itemPath
        )}`
      )
    }
  }
}
