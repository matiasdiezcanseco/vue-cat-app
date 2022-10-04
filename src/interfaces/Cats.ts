export interface Breed {
  weight: {
    imperial: string
    metric: string
  }
  id: string
  is_favourite: boolean
  name: string
  temperament: string
  adaptability: number
  origin: string
  description: string
  life_span: string
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  reference_image_id: string
  image: {
    id: string
    width: number
    height: number
    url: string
  }
}
