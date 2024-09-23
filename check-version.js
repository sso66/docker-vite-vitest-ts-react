// check-version.js
import fs from 'fs'
import packageJson from './package.json' assert { type: 'json' }

console.log({ packageJson })

const currentVersion = packageJson.version

let [major, minor, patch] = currentVersion.split('.')
major = parseInt(major)
minor = parseInt(minor)
patch = parseInt(patch)

let newVersion = ''

if (patch === 9) {
  const newPatch = 0
  let newMinor = minor + 1
  let newMajor = major

  if (newMinor > 9) {
    newMinor = 0
    newMajor = major + 1
  }

  newVersion = `${newMajor}.${newMinor}.${newPatch}`
} else {
  const newPatch = patch + 1
  const newMinor = minor
  const newMajor = major

  newVersion = `${newMajor}.${newMinor}.${newPatch}`
}

if (newVersion !== currentVersion) {
  packageJson.version = newVersion
  fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2))
  console.log(`Version updated to ${newVersion}`)
} else {
  console.log('No version update required')
}
