import "../styles/Input.css"

interface SetInput {
  type: "text" | "password";
  message: string;
}

export default function Input(props: SetInput) {
  return (
    <input type={ props.type } className="input" placeholder={ props.message } />
  );
}