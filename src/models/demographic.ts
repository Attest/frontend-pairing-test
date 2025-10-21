export type Demographic = Readonly<{
  id: string
  display: string
  options: Readonly<{ [id: string]: DemographicOption }>
}>

export type DemographicOption = Readonly<{
  id: string
  display: string
}>
