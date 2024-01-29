//12 balls volume

const smallestDiametr = 0.5;

const wallThickness = 0.01;

let totalVolume = 0;

const numberOfSpheres = 12;

for (let i = 0; i < numberOfSpheres; i++) {
    
    const radius = (smallestDiameter / 2) + (i * wallThickness);

    const volume = (4/3) * Math.PI * Math.pow(radius, 3);

    totalVolume += volume;
}

console.log("Суммарный объем 12 шаров без зазора:", totalVolume.toFixed(3), "кубических метров");