folderName=src/pages/"$1"Page
pageComponent="$1"Page
classComponent=Class"$1"
functionComponent=Functional"$1"
index=index

# Make folder + files
mkdir -p -v $folderName;
touch $folderName/$pageComponent.tsx
touch $folderName/$classComponent.tsx
touch $folderName/$functionComponent.tsx
touch $folderName/$index.ts

# Add some basic boilerplate
cat > $folderName/$pageComponent.tsx << ENDOFFILE
import { FC } from "react"

const $pageComponent: FC = () => {
  return (

  )
}

export default $pageComponent

ENDOFFILE

cat > $folderName/$functionComponent.tsx << ENDOFFILE
import { FC } from "react"

export default function $functionComponent(): FC {
  return (

  )
}


ENDOFFILE

cat > $folderName/$classComponent.tsx << ENDOFFILE
import { Component } from "react"

export default class $classComponent extends Component {
  render() {
    return (

    )
  }
}

ENDOFFILE

cat > $folderName/$index.ts << ENDOFFILE
export { default as $pageComponent } from './$pageComponent'

ENDOFFILE