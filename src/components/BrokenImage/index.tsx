import IconContainer from "./styles";

const BrokenImage = ({
  iconSize = "24px",
  width = "206px",
  height = "306px",
}) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <path d="M18 11.438l3 3v4.547q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.797 0-1.406-0.609t-0.609-1.406v-6.563l3 3 3.984-4.031 4.031 4.031zM21 5.016v6.563l-3-3-3.984 4.031-4.031-4.031-3.984 4.031-3-3.047v-4.547q0-0.797 0.609-1.406t1.406-0.609h13.969q0.797 0 1.406 0.609t0.609 1.406z"></path>
      </svg>
    </IconContainer>
  );
};

export default BrokenImage;