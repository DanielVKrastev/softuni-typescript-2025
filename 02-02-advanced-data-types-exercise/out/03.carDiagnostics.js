"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carBody = { material: 'aluminum', state: 'scratched' };
const tires = { airPressure: 30, condition: 'needs change' };
const engine = { horsepower: 300, oilDensity: 780 };
function createCar(carBody, tires, engine) {
}
createCar({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics() { return this.partName; } }, { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics() { return this.partName; } }, { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics() { return this.partName; } });
//# sourceMappingURL=03.carDiagnostics.js.map