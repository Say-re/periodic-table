interface PhysicalProperties {
  unitOfMeasurement: string,
  value: number,
}

export interface PeriodicElement {
  atomicMass: number,
  atomicNumber: string,
  boilingPoint?: PhysicalProperties,
  category?: string,
  commonName: string,
  density?: PhysicalProperties,
  discovery?: string,
  electronConfiguration?: Array<{
    [index: string]: string,
  }>,
  generalState?: string,
  group?: string,
  meltingPoint?: PhysicalProperties,
  period?: string,
  symbol: string,
}

export default PeriodicElement;
