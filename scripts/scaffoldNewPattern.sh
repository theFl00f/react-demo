folderName=src/pages/"$1"Page
pageView="$1"Page
model="$1"Model
index=index

# Make folder + files
mkdir -p -v $folderName;
touch $folderName/$pageView.tsx
touch $folderName/$model.tsx
touch $folderName/$index.ts

# Add some basic boilerplate
cat > $folderName/$pageView.tsx << ENDOFFILE
import { FC } from "react"

const $pageView: FC = () => {
  return (

  )
}

export default $pageView

ENDOFFILE


cat > $folderName/$model.tsx << ENDOFFILE
import { FC } from "react"

export default function $model: FC {
  render() {
    return (

    )
  }
}

ENDOFFILE

cat > $folderName/$index.ts << ENDOFFILE
export { default as $pageView } from './$pageView'

ENDOFFILE