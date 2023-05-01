import PropTypes from "prop-types";
import { BtnContainer, FeedbackButton } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <BtnContainer>
      {options.map((option, index) => (
        <FeedbackButton key={index} name={[option]} type="button" onClick={onClick}>{[option]}</FeedbackButton>
      ))}
    </BtnContainer>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  
}