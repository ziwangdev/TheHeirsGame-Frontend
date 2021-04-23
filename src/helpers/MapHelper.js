module.exports.mapData = {
    playersPositions: {
        player1: '',
        player2: '',
        player3: '',
        player4: ''
    },
    pathCells:{
        x02y03: {
            placedHere: '',
            type: 'land',
            land: 'H4',
            adjacent: ['x03y03', 'x02y04']
        },
        x02y04: {
            placedHere: '',
            type: 'land',
            land: 'A1',
            adjacent: ['x02y03', 'x02y05']
        },
        x02y05: {
            placedHere: '',
            type: 'land',
            land: 'A2',
            adjacent: ['x02y04', 'x02y06']
        },
        x02y06: {
            placedHere: '',
            type: 'land',
            land: 'A3',
            adjacent: ['x02y05', 'x02y07']
        },
        x02y07: {
            placedHere: '',
            type: 'land',
            land: 'A4',
            adjacent: ['x02y06', 'x03y07']
        },
        x03y07: {
            placedHere: '',
            type: 'plus-20000-cash',
            adjacent: ['x02y07', 'x04y07']
        },
        x04y07: {
            placedHere: '',
            type: 'plus-1-card',
            adjacent: ['x03y07', 'x05y07']
        },
        x05y07: {
            placedHere: ['player1'],
            type: 'minus-50000-cash',
            adjacent: ['x04y07', 'x05y08']
        },
        x05y08: {
            placedHere: '',
            type: 'random-event',
            adjacent: ['x05y07', 'x05y09']
        },
        x05y09: {
            placedHere: '',
            type: 'plus-50000-cash',
            adjacent: ['x05y08', 'x05y10']
        },
        x05y10: {
            placedHere: '',
            type: 'shop',
            adjacent: ['x05y09', 'x05y11']
        },
        x05y11: {
            placedHere: '',
            type: 'land',
            land: 'B1',
            adjacent: ['x05y10', 'x05y12']
        },
        x05y12: {
            placedHere: '',
            type: 'land',
            land: 'B2',
            adjacent: ['x05y11', 'x05y13']
        },
        x05y13: {
            placedHere: '',
            type: 'land',
            land: 'B2',
            adjacent: ['x05y12', 'x05y14']
        },
        x05y14: {
            placedHere: '',
            type: 'land',
            land: 'B3',
            adjacent: ['x05y13', 'x05y15']
        },
        x05y15: {
            placedHere: '',
            type: 'land',
            land: 'B4',
            adjacent: ['x05y14', 'x05y16']
        },
        x05y16: {
            placedHere: '',
            type: 'land',
            land: 'B5',
            adjacent: ['x05y15', 'x05y17']
        },
        x05y17: {
            placedHere: '',
            type: 'random-event',
            adjacent: ['x05y16', 'x05y18']
        },
        x05y18: {
            placedHere: '',
            type: 'land',
            land: 'C1',
            adjacent: ['x05y17', 'x06y18']
        },
        x06y18: {
            placedHere: '',
            type: 'land',
            land: 'C2',
            adjacent: ['x05y17', 'x07y18']
        },
        x07y18: {
            placedHere: '',
            type: 'land',
            land: 'C2',
            adjacent: ['x06y18', 'x08y18']
        },
        x08y18: {
            placedHere: '',
            type: 'land',
            land: 'C3',
            adjacent: ['x07y18', 'x09y18']
        },
        x09y18: {
            placedHere: '',
            type: 'land',
            land: 'C4',
            intersection: true,
            adjacent: ['x08y18', 'x09y17', 'x10y18']
        },
        x10y18: {
            placedHere: '',
            type: 'random-event',
            adjacent: ['x09y18', 'x11y18']
        },
        x11y18: {
            placedHere: '',
            type: 'plus-2-card',
            adjacent: ['x10y18', 'x12y18']
        },
        x12y18: {
            placedHere: '',
            type: 'land',
            land: 'D1',
            adjacent: ['x11y18', 'x13y18']
        },
        x13y18: {
            placedHere: '',
            type: 'land',
            land: 'D2',
            adjacent: ['x12y18', 'x14y18']
        },
        x14y18: {
            placedHere: '',
            type: 'land',
            land: 'D3',
            adjacent: ['x13y18', 'x15y18']
        },
        x15y18: {
            placedHere: '',
            type: 'land',
            land: 'D4',
            adjacent: ['x14y18', 'x16y18']
        },
        x16y18: {
            placedHere: '',
            type: 'land',
            land: 'D4',
            adjacent: ['x15y18', 'x17y18']
        },
        x17y18: {
            placedHere: '',
            type: 'land',
            land: 'D5',
            adjacent: ['x16y18', 'x18y18']
        },
        x18y18: {
            placedHere: '',
            type: 'minus-20000-cash',
            adjacent: ['x17y18', 'x19y18']
        },
        x19y18: {
            placedHere: '',
            type: 'plus-20000-cash',
            adjacent: ['x18y18', 'x17y17']
        },
        x19y17: {
            placedHere: '',
            type: 'plus-1-card',
            adjacent: ['x19y18', 'x19y16']
        },
        x19y16: {
            placedHere: '',
            type: 'plus-2-card',
            adjacent: ['x19y17', 'x19y15']
        },
        x19y15: {
            placedHere: '',
            type: 'plus-50000-cash',
            adjacent: ['x19y16', 'x19y14']
        },
        x19y14: {
            placedHere: '',
            type: 'minus-50000-cash',
            adjacent: ['x19y15', 'x19y13']
        },
        x19y13: {
            placedHere: '',
            type: 'plus-100000-cash',
            adjacent: ['x19y14', 'x19y12']
        },
        x19y12: {
            placedHere: '',
            type: 'random-event',
            adjacent: ['x19y13', 'x19y11']
        },
        x19y11: {
            placedHere: '',
            type: 'shop',
            adjacent: ['x19y12', 'x19y10']
        },
        x18y11: {
            placedHere: '',
            type: 'land',
            land: 'E1',
            prev: 'x19y11',
            next: 'x17y11',
            adjacent: ['x11y18', 'x13y18']
        },
        x17y11: {
            placedHere: '',
            type: 'land',
            land: 'E2',
            adjacent: ['x18y11', 'x16y11']
        },
        x16y11: {
            placedHere: '',
            type: 'land',
            land: 'E2',
            adjacent: ['x17y11', 'x15y11']
        },
        x15y11: {
            placedHere: '',
            type: 'land',
            land: 'E3',
            intersection: true,
            adjacent: ['x16y11', 'x15y10', 'x14y11']
        },
        x15y10: {
            placedHere: '',
            type: 'plus-1-card',
            adjacent: ['x15y11', 'x15y09']
        },
        x15y09: {
            placedHere: '',
            type: 'land',
            land: 'F1',
            adjacent: ['x15y10', 'x15y08']
        },
        x15y08: {
            placedHere: '',
            type: 'land',
            land: 'F2',
            adjacent: ['x15y09', 'x15y07']
        },
        x15y07: {
            placedHere: '',
            type: 'land',
            land: 'F3',
            prev: 'x15y08',
            next: 'x15y06',
            adjacent: ['x15y08', 'x15y06']
        },
        x15y06: {
            placedHere: '',
            type: 'land',
            land: 'F4',
            adjacent: ['x15y07', 'x15y05']
        },
        x15y05: {
            placedHere: '',
            type: 'plus-50000-cash',
            adjacent: ['x15y06', 'x14y05']
        },
        x14y05: {
            placedHere: '',
            type: 'land',
            land: 'G1',
            adjacent: ['x15y05', 'x13y05']
        },
        x13y05: {
            placedHere: '',
            type: 'land',
            land: 'G1',
            adjacent: ['x14y05', 'x12y05']
        },
        x12y05: {
            placedHere: '',
            type: 'land',
            land: 'G2',
            adjacent: ['x13y05', 'x11y05']
        },
        x11y05: {
            placedHere: '',
            type: 'land',
            land: 'G3',
            adjacent: ['x12y05', 'x10y05']
        },
        x10y05: {
            placedHere: '',
            type: 'plus-1-card',
            adjacent: ['x11y05', 'x09y05']
        },
        x09y05: {
            placedHere: '',
            type: 'land',
            land: 'I1',
            intersection: true,
            adjacent: ['x10y05', 'x09y04', 'x09y06']
        },
        x09y04: {
            placedHere: '',
            type: 'random-event',
            adjacent: ['x09y05', 'x09y03']
        },
        x09y03: {
            placedHere: '',
            type: 'plus-2-card',
            intersection: true,
            adjacent: ['x09y04', 'x09y02', 'x08y03']
        },
        x08y03: {
            placedHere: '',
            type: 'plus-100000-cash',
            adjacent: ['x09y03', 'x07y03']
        },
        x07y03: {
            placedHere: '',
            type: 'land',
            land: 'H1',
            adjacent: ['x08y03', 'x06y03']
        },
        x06y03: {
            placedHere: '',
            type: 'land',
            land: 'H1',
            adjacent: ['x07y03', 'x05y03']
        },
        x05y03: {
            placedHere: '',
            type: 'land',
            land: 'H2',
            adjacent: ['x06y03', 'x04y03']
        },
        x04y03: {
            placedHere: '',
            type: 'land',
            land: 'H3',
            adjacent: ['x05y03', 'x03y03']
        },
        x03y03: {
            placedHere: '',
            type: 'land',
            land: 'H4',
            adjacent: ['x04y03', 'x02y03']
        },
        x09y02: {
            placedHere: '',
            type: 'plus-50000-cash',
            adjacent: ['x09y03', 'x09y01']
        },
        x09y01: {
            type: 'hospital',
            adjacent: ['x09y02']
        },
        x09y06: {
            placedHere: '',
            type: 'land',
            land: 'I2',
            adjacent: ['x09y05', 'x09y07']
        },
        x09y07: {
            placedHere: '',
            type: 'land',
            land: 'I3',
            adjacent: ['x09y06', 'x09y08']
        },
        x09y08: {
            placedHere: '',
            type: 'land',
            land: 'I3',
            adjacent: ['x09y07', 'x09y09']
        },
        x09y09: {
            placedHere: '',
            type: 'land',
            land: 'I4',
            adjacent: ['x09y08', 'x09y10']
        },
        x09y10: {
            placedHere: '',
            type: 'land',
            land: 'I4',
            adjacent: ['x09y09', 'x09y11']
        },
        x09y11: {
            placedHere: '',
            type: 'land',
            land: 'I5',
            adjacent: ['x09y10', 'x09y12']
        },
        x09y12: {
            placedHere: '',
            type: 'shop',
            adjacent: ['x09y11', 'x09y13']
        },
        x09y13: {
            placedHere: '',
            type: 'land',
            land: 'J1',
            adjacent: ['x09y12', 'x09y14']
        },
        x09y14: {
            placedHere: '',
            type: 'land',
            land: 'J2',
            adjacent: ['x09y13', 'x09y15']
        },
        x09y15: {
            placedHere: '',
            type: 'land',
            land: 'J3',
            adjacent: ['x09y14', 'x09y16']
        },
        x09y16: {
            placedHere: '',
            type: 'land',
            land: 'J4',
            adjacent: ['x09y15', 'x09y17']
        },
        x09y17: {
            placedHere: '',
            type: 'land',
            land: 'J5',
            adjacent: ['x09y16', 'x09y18']
        },
        x10y11: {
            placedHere: '',
            type: 'minus-20000-cash',
            adjacent: ['x09y11', 'x11y11']
        },
        x11y11: {
            placedHere: '',
            type: 'plus-20000-cash',
            adjacent: ['x10y11', 'x12y11']
        },
        x12y11: {
            placedHere: '',
            type: 'land',
            land: 'E5',
            adjacent: ['x11y11', 'x13y11']
        },
        x13y11: {
            placedHere: '',
            type: 'land',
            land: 'E5',
            adjacent: ['x12y11', 'x14y11']
        },
        x14y11: {
            placedHere: '',
            type: 'land',
            land: 'E4',
            adjacent: ['x13y11', 'x15y11']
        }
    },
    landCells:{
        A1:{
            position: 'x01y04',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        A2:{
            position: 'x01y05',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        A3:{
            position: 'x01y06',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        A4:{
            position: 'x01y07',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        B1:{
            position: 'x04y11',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        B2:{
            position: ['x03y12', 'x04y13', 'x04y12', 'x03y13'],
            owner: 'none',
            building: 'none',
            size: 'large',
            value: 0,
            level: 0
        },
        B3:{
            position: 'x04y14',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        B4:{
            position: 'x04y15',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        B5:{
            position: 'x04y16',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        C1:{
            position: 'x05y19',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        C2:{
            position: ['x06y19', 'x07y19', 'x06y20', 'x07y20'],
            owner: 'none',
            building: 'none',
            size: 'large',
            value: 0,
            level: 0
        },
        C3:{
            position: 'x08y19',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        C4:{
            position: 'x09y19',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        D1:{
            position: 'x12y17',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        D2:{
            position: 'x13y17',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        D3:{
            position: 'x14y17',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        D4:{
            position: ['x15y16','x16y17', 'x15y17', 'x16y16'],
            owner: 'none',
            building: 'none',
            size: 'large',
            value: 0,
            level: 0
        },
        D5:{
            position: 'x17y17',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        E1:{
            position: 'x18y12',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        E2:{
            position: ['x16y12', 'x17y12', 'x16y13', 'x17y13'],
            owner: 'none',
            building: 'none',
            size: 'large',
            value: 0,
            level: 0
        },
        E3:{
            position: 'x15y12',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        E4:{
            position: 'x14y12',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        E5:{
            position: ['x12y12', 'x13y12', 'x13y13', 'x12y13'],
            owner: 'none',
            building: 'none',
            size: 'large',
            value: 0,
            level: 0
        },
        F1:{
            position: 'x16y09',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        F2:{
            position: 'x16y08',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        F3:{
            position: 'x16y07',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        F4:{
            position: 'x16y06',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        G1:{
            position: ['x13y03', 'x13y04', 'x14y03', 'x14y04'],
            owner: 'none',
            building: 'none',
            size: 'large',
            value: 0,
            level: 0
        },
        G2:{
            position: 'x12y04',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        G3:{
            position: 'x11y04',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        H1:{
            position: ['x06y01', 'x07y02', 'x07y01', 'x06y02'],
            owner: 'none',
            building: 'none',
            size: 'large',
            value: 0,
            level: 0
        },
        H2:{
            position: 'x05y02',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        H3:{
            position: 'x04y02',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        H4:{
            position: ['x02y01', 'x02y02', 'x03y01', 'x03y02'],
            owner: 'none',
            building: 'none',
            size: 'large',
            value: 0,
            level: 0
        },
        I1:{
            position: 'x08y05',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        I2:{
            position: 'x08y06',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        I3:{
            position: ['x07y07', 'x08y08', 'x08y07', 'x07y08'],
            owner: 'none',
            building: 'none',
            size: 'large',
            value: 0,
            level: 0
        },
        I4:{
            position: ['x07y09', 'x08y10', 'x08y09', 'x07y10'],
            owner: 'none',
            building: 'none',
            size: 'large',
            value: 0,
            level: 0
        },
        I5:{
            position: 'x08y11',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        J1:{
            position: 'x10y13',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        J2:{
            position: 'x10y14',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        J3:{
            position: 'x10y15',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        J4:{
            position: 'x10y16',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
        J5:{
            position: 'x10y17',
            owner: 'none',
            building: 'none',
            size: 'small',
            value: 0,
            level: 0
        },
    }
}
