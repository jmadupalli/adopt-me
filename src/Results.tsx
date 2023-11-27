import { Pet as PetType } from "./APIResponsesTypes";
import Pet from "./Pet";
const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>Not Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
