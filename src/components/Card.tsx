type CardProps = {
  data: {
    name: string;
    followers: string;
    new: string;
    pageViews: string;
    pageViewsPCT: string;
    likes: string;
    likesPCT: string;
  };
};
const Card: React.FunctionComponent<CardProps> = ({ data }) => {
  return (
    <div>
      <h2>data[name]</h2>
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
