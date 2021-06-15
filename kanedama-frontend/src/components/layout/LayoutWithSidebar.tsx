import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  height: 100%;
`;

const SidebarWrapper = styled.aside`
  flex: 0 1 300px;
  order: 0;
  background-color: rgb(250, 250, 250);
`;

const ContentWrapper = styled.div`
  order: 1;
  flex: 1;
  min-height: 100vh;
  flex-direction: row;
`;

interface Props {
  SidebarContent: React.ReactNode;
  LayoutContent: React.ReactNode;
}

const LayoutWithSidebar: React.FC<Props> = ({
  LayoutContent,
  SidebarContent,
}) => {
  return (
    <Wrapper>
      <SidebarWrapper>{SidebarContent}</SidebarWrapper>
      <ContentWrapper>{LayoutContent}</ContentWrapper>
    </Wrapper>
  );
};

export default LayoutWithSidebar;
