function Button({ children, msg }) {
  return <button onClick={msg}>{children}</button>;
}

function PlayButton({ children }) {
  return (
    <Button
      msg={() => {
        alert("play");
      }}
    >
      {children}
    </Button>
  );
}

function UploadButton({ children }) {
  return (
    <Button
      msg={() => {
        alert("upload");
      }}
    >
      {children}
    </Button>
  );
}

export default function Toolbar() {
  return (
    <>
      <PlayButton>play</PlayButton>
      <UploadButton>upload</UploadButton>
    </>
  );
}
