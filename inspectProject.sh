#!/bin/bash

workingDirectory=`echo $(pwd -P)`
scriptDirectory=`echo $(cd $(dirname $0) ; pwd -P)`

echo "$(cd $scriptDirectory && npx tsx inspectProject.ts $workingDirectory)"