import { useGetBreedsQuery } from "./petApiService";

const useBreedList = (animal) => {
  const { data: breeds, isLoading } = useGetBreedsQuery(animal, {
    skip: !animal,
  });
  if (!animal) return [[], "loaded"];

  return [breeds ?? [], isLoading ? "loading" : "loaded"];
};

export default useBreedList;
