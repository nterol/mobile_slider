import styled from "styled-components";
import DrawerContainer from "./drawer-container";

const HeaderWrapper = styled.header`
  padding: 16px 24px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Drawer() {
  return (
    <DrawerContainer>
      <HeaderWrapper>Title</HeaderWrapper>
    </DrawerContainer>
  );
}
