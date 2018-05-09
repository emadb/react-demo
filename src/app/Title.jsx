export default function Title(props) {
  return <h3 className="title">{props.text}</h3>
}

Title.defaultProps = { text: "Title here"}