import "../styles/Button.css"

interface SetButton {
  title: string;
  event: any;
}

export default function Button(props: SetButton) {
  return (
    <button className="button" onClick={ props.event }>{ props.title }</button>
  );
}