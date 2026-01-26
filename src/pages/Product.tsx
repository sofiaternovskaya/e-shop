import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();

  return (
    <body>
      <h1>Product {id}</h1>
    </body>
  );
};
