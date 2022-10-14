export async function getServerSideProps(context) {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=twopart&idRange=0-10&amount=5"
  );
  const { jokes } = await res.json();
  return {
    props: { jokes },
  };
}
const ServerJokes = ({ jokes }) => {
  //   console.log(props);
  return (
    <div>
      <h1>Here are some jokes!</h1>
      <ul>
        {jokes.map((item, index) => (
          <li key={index}>
            {item.id}. {item.setup} - {item.delivery}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerJokes;
