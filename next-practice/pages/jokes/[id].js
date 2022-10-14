export const getStaticPaths = async () => {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=twopart&idRange=0-10&amount=5"
  );
  const { jokes } = await res.json();
  //   console.log(jokes);

  return {
    paths: jokes.map((item) => ({
      params: { id: item.id.toString() },
    })),
    // [{params: {id: 1}}, {params: {id: 6}}, {params: {id: 7}}, dst]
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://v2.jokeapi.dev/joke/Any?idRange=${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

const StaticJokes = ({ data }) => {
  return (
    <div>
      <h1>Here are some jokes!</h1>
      <ul>
        <li key={data.id}>
          {data.setup} - {data.delivery}
        </li>
      </ul>
    </div>
  );
};

export default StaticJokes;
