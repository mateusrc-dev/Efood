class Restaurant {
  description: string
  image: string
  infos: string[]
  title: string
  assessment: number
  id: number

  constructor(
    id: number,
    description: string,
    title: string,
    infos: string[],
    image: string,
    assessment: number
  ) {
    this.id = id
    this.title = title
    this.infos = infos
    this.image = image
    this.description = description
    this.assessment = assessment
  }
}

export default Restaurant
