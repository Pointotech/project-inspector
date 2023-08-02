import { statSync } from "fs"

/**
 * Validate the project directory.
 *
 * @returns The validated project directory.
 */
export function validateProjectDirectory(): string {
  // Get the command-line argument containing the project directory path
  const projectDirectory = process.argv[2]

  // Validate if the project directory parameter is present
  if (!projectDirectory) {
    throw new Error(
      "Project directory path is missing. Please provide the path as a command-line argument."
    )
  }

  // Check if the project directory is a directory and readable
  try {
    const stat = statSync(projectDirectory)
    if (!stat.isDirectory()) {
      throw new Error("The provided path is not a directory.")
    }
  } catch (err) {
    throw new Error(`Error accessing the project directory: ${err.message}`)
  }

  return projectDirectory
}
