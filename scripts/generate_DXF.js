const fs = require('fs');

const dxfContent = `0
SECTION
2
HEADER
0
ENDSEC
0
SECTION
2
TABLES
0
ENDSEC
0
SECTION
2
BLOCKS
0
ENDSEC
0
SECTION
2
ENTITIES
0
POINT
8
MALL_ANCHOR
10
34.7818
20
32.0853
30
0.0
0
LWPOLYLINE
8
MALL_WALLS
90
4
70
1
10
0.0
20
0.0
10
10.0
20
0.0
10
10.0
20
10.0
10
0.0
20
10.0
0
ENDSEC
0
EOF`;

fs.writeFileSync('mock_mall.dxf', dxfContent);
console.log('קובץ הבדיקה mock_mall.dxf נוצר בהצלחה!');