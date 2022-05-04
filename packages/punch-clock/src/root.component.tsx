import Routes from "./routes";

export default function Root(props) {
  return (
    <section>
      {props.name} is mounted!
      <Routes />
    </section>
  );
}
