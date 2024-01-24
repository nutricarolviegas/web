import { caesar_salad, carrot_chips, healthy_browie, salmon_on_fire } from "@/assets/images/recipes"
import { StaticImageData } from "next/image"

type recipes = {
  title: string,
  cookDuration: number
  peopleServed: number
  imgUrl: StaticImageData
}[]

export const recipes: recipes = [
  {
    title: "Salmão no forno",
    cookDuration: 6300,
    peopleServed: 4,
    imgUrl: salmon_on_fire
  },
  {
    title: "Salada caesar",
    cookDuration: 2100,
    peopleServed: 4,
    imgUrl: caesar_salad
  },
  {
    title: "Browie saudável",
    cookDuration: 4800,
    peopleServed: 5,
    imgUrl: healthy_browie
  },
  {
    title: "Chips de cenoura",
    cookDuration: 2700,
    peopleServed: 4,
    imgUrl: carrot_chips
  }
]