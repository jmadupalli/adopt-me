import { QueryStatus, useQuery } from "@tanstack/react-query";
import { Animal } from "./APIResponsesTypes";
import fetchBreedList from "./fetchBreedList";

const useBreedList = (animal: Animal) => {
  const results = useQuery({
    queryKey: ["breeds", animal],
    queryFn: fetchBreedList,
  });

  return [results?.data?.breeds ?? [], results.status] as [
    string[],
    QueryStatus,
  ];
};

export default useBreedList;
