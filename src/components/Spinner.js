import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.svg`
  animation: ${rotate} 2s linear infinite;
`;

export const Spinner = () => {
  return (
    <Rotate xmlns="http://www.w3.org/2000/svg" width="24" height="24">
      <g
        fill="none"
        stroke="cornflowerblue"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M12 1.2v2.4M4.363 4.363L6.06 6.06M1.2 12h2.4M4.363 19.637L6.06 17.94M12 22.8v-2.4M19.637 19.637L17.94 17.94M22.8 12h-2.4M19.637 4.363L17.94 6.06"
          strokeWidth="2.4"
        />
      </g>
    </Rotate>
  );
};
