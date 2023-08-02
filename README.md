# @pointotech/project-inspector

## Overview

Project Inspector provides an organized and detailed summary of the structure of a project's files and directories. It offers an in-depth listing of all the files and directories present within the project, excluding specified directories such as ".git", "node_modules" and "vendor."

## Features

- List all files and directories in the project, presenting them in a hierarchical manner based on their structure.
- Exclude certain directories, such as ".git", "node_modules" and "vendor," to maintain clarity in the summary.

## How to Use

1. Clone the `project-inspector` repository to your local machine. This
   repository clone will be referred to as `$projectInspectorDirectory`.
2. Navigate to the root of the project directory. This can be any directory,
   but the assumption is that the current directory is the root directory of a
   code project.
3. Run `$projectInspectorDirectory/inspectProject.sh` to generate the project
   structure summary for the current directory.

## Requirements

- Node.js installed on your system.

## License

This project is licensed under the MIT License.
