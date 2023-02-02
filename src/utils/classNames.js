import react from "react"

export const classNames = (...classNames) => {
return classNames.filter(Boolean).join(' ');
}; 