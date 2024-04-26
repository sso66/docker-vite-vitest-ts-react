import resolveConfig  from "tailwindcss/resolveConfig";
import tailwindConfig from "./tailwind.config";

const getTailwindConfig = () => {
    return resolveConfig(tailwindConfig).theme
}

const config = getTailwindConfig() 

console.log(config.colors.red[500]) // would print #EF4444