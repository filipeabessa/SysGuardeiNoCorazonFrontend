import { Disaffection } from "./types";

const mockDisaffection: Disaffection = {
  id: "1",
  title: "Desafeição 1",
  description: "Descrição da desafeição 1",
  createdAt: new Date(),
  updatedAt: new Date(),
  witnesses: "Testemunhas da desafeição 1",
  involvedPeople: "Pessoas envolvidas na desafeição 1",
  offenses: ["1", "2"],
}

const mockDisaffections: Disaffection[] = [
  mockDisaffection,
]

export {
  mockDisaffection,
  mockDisaffections,
}