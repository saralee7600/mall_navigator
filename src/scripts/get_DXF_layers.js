const fs = require('fs');
const DxfParser = require('dxf-parser');

const parser = new DxfParser();

try {
    const fileContent = fs.readFileSync('floorplan.dxf', 'utf-8');
    
    const dxf = parser.parseSync(fileContent);
    
    const layers = dxf.tables.layer.layers;
    
    console.log('--- רשימת השכבות שנמצאו בקובץ ---');
    
    Object.keys(layers).forEach((layerName) => {
        console.log(`שם שכבה: ${layerName}`);
    });
    
    console.log('---------------------------------');

} catch (err) {
    console.error('אירעה שגיאה בקריאת הקובץ:', err.message);
}