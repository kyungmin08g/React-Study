import "../styles/Button.css"

interface SetButton {
  title: string;
}

export default function Button(props: SetButton) {
  return (
    <button className="button">{ props.title }</button>
  );
}