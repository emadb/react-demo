export default function MyButton({text, onClick}) {
  return <button className="btn btn-default" onClick={onClick} >{text}</button>
}