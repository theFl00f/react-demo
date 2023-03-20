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
import { FC } from 'react'
import $model from './$model'

const $page: FC =() {
  return <$model />
}

export default $page
ENDOFFILE


cat > $folderName/$model.tsx << ENDOFFILE
import { FC } from 'react'

const $model: FC = () => {
  return (

  )
}

export default $model
ENDOFFILE

cat > $folderName/$index.ts << ENDOFFILE
export { default as $page } from './$page'
ENDOFFILE