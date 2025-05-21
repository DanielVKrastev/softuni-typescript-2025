const carBody = { material: 'aluminum', state: 'scratched' };
const tires = { airPressure: 30, condition: 'needs change' };
const engine = { horsepower: 300, oilDensity: 780 }

type carBodyType = { material: string, state: string };
type tiresType = { airPressure: number, condition: string };
type engineType = { horsepower: number, oilDensity: number };
type diagnostics = { partName: string, runDiagnostics: () => string };
type speedometer = { speed: number };

function createCar(
    carBody: carBodyType & diagnostics & speedometer,
    tires: tiresType & diagnostics & speedometer,
    engine: engineType & diagnostics & speedometer,
) {

}

createCar(
    { material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics() {return this.partName} },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics() {return this.partName} },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics() {return this.partName} }
);