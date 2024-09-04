import { FunctionComponent } from "react";
import styled from "styled-components";

const VectorIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;

const Child = styled.div`
  height: 3px;
  width: 3px;
  position: relative;
  background-color: var(--gray-light);
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs-5);
`;

const Vector = styled.div`
  position: absolute;
  height: 75%;
  width: 75%;
  top: 12.5%;
  right: 12.5%;
  bottom: 12.5%;
  left: 12.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs-5);
`;

const AllAppBlack24dp = styled.div`
  height: 16px;
  width: 16px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;

const IconRoot = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Icon: FunctionComponent<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <IconRoot className={className}>
      <AllAppBlack24dp>
        <VectorIcon alt="" />
        <Vector>
          <Div>
            <Child />
            <Child />
            <Child />
          </Div>
          <Div>
            <Child />
            <Child />
            <Child />
          </Div>
          <Div>
            <Child />
            <Child />
            <Child />
          </Div>
        </Vector>
      </AllAppBlack24dp>
    </IconRoot>
  );
};

export default Icon;
