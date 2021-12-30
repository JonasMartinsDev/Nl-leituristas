import nlsOccurrences from "utils/mock";

export const loadPosts = async () => {
  const occurrences = nlsOccurrences.map((occurrence) => {
    return { ...occurrence };
  });
  return occurrences;
};
