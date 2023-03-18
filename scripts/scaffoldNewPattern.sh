folderName=src/pages/"$1"Page
page="$1"Page
model="$1"Model
index=index

# Make folder + files
mkdir -p -v $folderName;
touch $folderName/$page.tsx
touch $folderName/$model.tsx
touch $folderName/$index.ts

# Add some basic boilerplate
cat > $folderName/$page.tsx << ENDOFFILE
import $model from './$model'

export default function $page(): JSX.Element {
  return <$model />
}

ENDOFFILE


cat > $folderName/$model.tsx << ENDOFFILE
import { Component } from "react"

export default class $model extends Component {
  render() {
    return (

    )
  }
}

ENDOFFILE

cat > $folderName/$index.ts << ENDOFFILE
export { default as $page } from './$page'

ENDOFFILE