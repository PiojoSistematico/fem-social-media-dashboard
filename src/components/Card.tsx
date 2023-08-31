type CardProps = {
  values: {
    name: string;
    followers: number;
    new: number;
    pageViews: number;
    pageViewsPCT: number;
    likes: number;
    likesPCT: number;
  };
};

const Card: React.FunctionComponent<CardProps> = ({ values }) => {
  return (
    <div>
      <h2>{values.name}</h2>
      <span>{values.followers}</span>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
        accusamus quae incidunt voluptatum maxime sapiente impedit aliquam ab
        ducimus sint explicabo eum distinctio repellat, illo perspiciatis!
        Explicabo vitae tempora aliquam?
      </p>
    </div>
  );
};

export default Card;
