class Dish {
  description: string
  image: string
  title: string
  id: number

  constructor(id: number, description: string, title: string, image: string) {
    this.id = id
    this.title = title
    this.image = image
    this.description = description
  }
}

export default Dish
