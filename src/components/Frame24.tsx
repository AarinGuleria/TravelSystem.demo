import { FunctionComponent } from "react";
import styled from "styled-components";

const InsightBlack24dp1Icon = styled.img`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

const Icon = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs-5) 0px 0px;
`;

const Insight = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;
  display: inline-block;
  min-width: 43px;
`;

const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;

const Mis = styled.div`
  position: relative;
  display: inline-block;
  min-width: 25px;
`;

const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 18px 0px 0px;
  gap: var(--gap-5xs);
  color: #ccc;
`;

const InsightMisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
`;

const InsightMisContainerParentRoot = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 16px 8px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-sm);
  color: #c5c5c5;
  font-family: var(--font-heebo);
`;

const Frame24: FunctionComponent<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <InsightMisContainerParentRoot className={className}>
      <InsightMisContainer>
        <FrameParent>
          <IconWrapper>
            <Icon>
              <InsightBlack24dp1Icon
                loading="lazy"
                alt=""
                src="/insight-black-24dp-1.svg"
              />
            </Icon>
          </IconWrapper>
          <Insight>Insight</Insight>
        </FrameParent>
        <FrameGroup>
          <IconWrapper>
            <Icon>
              <InsightBlack24dp1Icon
                loading="lazy"
                alt=""
                src="/mis-black-24dp-1.svg"
              />
            </Icon>
          </IconWrapper>
          <Mis>MIS</Mis>
        </FrameGroup>
      </InsightMisContainer>
    </InsightMisContainerParentRoot>
  );
};

export default Frame24;
