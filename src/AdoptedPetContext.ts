import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "Something",
    breed: "eagle",
    images: [],
    city: "Springfield",
    state: "MO",
  },
  () => {},
]);

export default AdoptedPetContext;
