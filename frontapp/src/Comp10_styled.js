import styled from "styled-components";

const ReactButton = (props) => {
  return <button className={props.className}>{props.children}</button>;
};

const ReactLargeButton = styled(ReactButton)`
  font-size: 20px;
  color: tomato;
`;

const PrimaryButton = styled(ReactButton)`
  color: ${function (props) {
    return props.stock < 20 ? "red" : "blue";
  }};
`;

export default function App() {
  return (
    <>
      <ReactLargeButton>스타일버튼</ReactLargeButton>
      <PrimaryButton stock="10">function버튼</PrimaryButton>
      <PrimaryButton stock="50">function버튼</PrimaryButton>
    </>
  );
}
