import { Disaffection, Offense } from "./types";

const mockOffense: Offense = {
  id: "1",
  title: "Ofensa 1",
  description: "Descrição da ofensa 1",
  cursedFamilyMember: "Membro da família amaldiçoado 1",
  offendingPerson: "Pessoa ofendida 1",
}

const mockOffenses: Offense[] = [
  mockOffense,
]

const mockDisaffection: Disaffection = {
  id: "1",
  title: "Desafeição 1",
  description: "Descrição da desafeição 1",
  createdAt: new Date(),
  updatedAt: new Date(),
  witnesses: "Testemunhas da desafeição 1",
  involvedPeople: "Pessoas envolvidas na desafeição 1",
  offenses: mockOffenses,
}

const mockDisaffections: Disaffection[] = [
  mockDisaffection,
]

export {
  mockDisaffection,
  mockDisaffections,
}