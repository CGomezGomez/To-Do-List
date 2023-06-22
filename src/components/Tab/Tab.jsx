import { Circle, CircleInput, CircleInputContainer } from "./styles";


export const Tab = () => {
  return (

    <CircleInputContainer>
        <Circle />
        <CircleInput type="text" placeholder="Create a new Todo..." />
  </CircleInputContainer>
  )
}

export default Tab;