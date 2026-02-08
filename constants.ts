
import { Category, Material } from './types';

export const materialData: Record<Category, Material[]> = {
  [Category.Construction]: [
    {
      id: 'steel-1',
      name: 'Rebar Steel (10mm)',
      unit: 'Ton',
      suppliers: [
        { name: 'Emirates Steel', price: 2600, stockAvailability: true, rating: 5, location: 'Abu Dhabi' },
        { name: 'Conares Steel', price: 2580, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'Hamriyah Steel', price: 2620, stockAvailability: false, rating: 4, location: 'Sharjah' },
      ],
    },
    {
      id: 'steel-2',
      name: 'Rebar Steel (12mm)',
      unit: 'Ton',
      suppliers: [
        { name: 'Emirates Steel', price: 2650, stockAvailability: true, rating: 5, location: 'Abu Dhabi' },
        { name: 'Conares Steel', price: 2630, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'Hamriyah Steel', price: 2670, stockAvailability: true, rating: 4, location: 'Sharjah' },
      ],
    },
     {
      id: 'cement-1',
      name: 'Portland Cement (50kg Bag)',
      unit: 'Bag',
      suppliers: [
        { name: 'RAK Cement', price: 12.50, stockAvailability: true, rating: 4, location: 'Ras Al Khaimah' },
        { name: 'Union Cement', price: 12.75, stockAvailability: true, rating: 5, location: 'Ras Al Khaimah' },
        { name: 'National Cement', price: 12.60, stockAvailability: false, rating: 3, location: 'Dubai' },
        { name: 'Saveto', price: 13.00, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'Arkan', price: 12.80, stockAvailability: true, rating: 4, location: 'Abu Dhabi' },
      ],
    },
    {
      id: 'concrete-1',
      name: 'Ready Mix Concrete',
      unit: 'Cubic Meter',
      suppliers: [
          { name: 'Ready Mix Beaton', price: 220, stockAvailability: true, rating: 4, location: 'Dubai' },
          { name: 'Reem Ready Mix', price: 225, stockAvailability: true, rating: 4, location: 'Abu Dhabi' },
          { name: 'RMB Ready Mix', price: 215, stockAvailability: true, rating: 5, location: 'Dubai' },
          { name: 'Unibeton', price: 230, stockAvailability: true, rating: 5, location: 'Abu Dhabi' },
          { name: 'Union Concrete', price: 228, stockAvailability: true, rating: 4, location: 'Ras Al Khaimah' },
      ]
    },
    {
      id: 'block-1',
      name: 'Solid Block',
      unit: 'Piece',
      suppliers: [
        { name: 'Al Wathba', price: 2.10, stockAvailability: true, rating: 4, location: 'Abu Dhabi' },
        { name: 'Bildco', price: 2.15, stockAvailability: false, rating: 3, location: 'Dubai' },
        { name: 'Emirates Block', price: 2.20, stockAvailability: true, rating: 4, location: 'Dubai' },
      ]
    },
    {
      id: 'block-2',
      name: 'Hollow Block',
      unit: 'Piece',
      suppliers: [
        { name: 'Al Wathba', price: 2.50, stockAvailability: true, rating: 4, location: 'Abu Dhabi' },
        { name: 'Bildco', price: 2.55, stockAvailability: true, rating: 3, location: 'Dubai' },
        { name: 'Emirates Block', price: 2.60, stockAvailability: true, rating: 4, location: 'Dubai' },
      ]
    },
    {
      id: 'waterproofing-1',
      name: 'Waterproofing Membrane (Roof)',
      unit: 'Sq. Meter',
      suppliers: [
        { name: 'Henkel', price: 25, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'Polybit', price: 24, stockAvailability: true, rating: 4, location: 'Sharjah' },
        { name: 'Mapei', price: 26, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'Fosroc', price: 25.50, stockAvailability: true, rating: 4, location: 'Dubai' },
      ]
    },
    {
      id: 'waterproofing-2',
      name: 'Combo Roof System',
      unit: 'Sq. Meter',
      suppliers: [
        { name: 'Henkel', price: 45, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'BASF', price: 48, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'Sika', price: 46, stockAvailability: true, rating: 4, location: 'Dubai' },
      ],
    }
  ],
  [Category.Finishing]: [
    {
      id: 'paint-1',
      name: 'Internal Emulsion Paint (White)',
      unit: 'Gallon',
      suppliers: [
        { name: 'Jotun Paints', price: 95, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'National Paints', price: 90, stockAvailability: true, rating: 4, location: 'Sharjah' },
        { name: 'Berger Paints', price: 92, stockAvailability: false, rating: 3, location: 'Dubai' },
        { name: 'Caparol', price: 98, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'Kensi', price: 88, stockAvailability: true, rating: 3, location: 'Ajman' },
      ],
    },
    {
      id: 'paint-2',
      name: 'External Stone Paint',
      unit: 'Gallon',
       suppliers: [
        { name: 'Jotun Paints', price: 120, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'Caparol', price: 125, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'Kensi', price: 115, stockAvailability: true, rating: 3, location: 'Ajman' },
      ],
    },
    {
      id: 'tiles-1',
      name: 'Porcelain Floor Tiles (60x60cm)',
      unit: 'Sq. Meter',
      suppliers: [
        { name: 'RAK Ceramics', price: 45, stockAvailability: true, rating: 5, location: 'Ras Al Khaimah' },
        { name: 'Al Shamsi Tiling', price: 48, stockAvailability: false, rating: 3, location: 'Dubai' },
        { name: 'Ceramica Delmon', price: 46, stockAvailability: true, rating: 4, location: 'Sharjah' },
      ],
    },
    {
      id: 'gypsum-1',
      name: 'Gypsum Board (12.5mm)',
      unit: 'Sheet',
      suppliers: [
        { name: 'Knauf Gypsum', price: 22, stockAvailability: true, rating: 5, location: 'Abu Dhabi' },
        { name: 'Gypsemna', price: 21.50, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'USG Middle East', price: 23, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'Malaysian Gypsum', price: 21.00, stockAvailability: true, rating: 3, location: 'Sharjah' },
      ],
    },
    {
      id: 'false-ceiling-1',
      name: 'Gypsum False Ceiling',
      unit: 'Sq. Meter',
      suppliers: [
        { name: 'Knauf', price: 45, stockAvailability: true, rating: 5, location: 'Germany' },
        { name: 'Malaysian Gypsum', price: 40, stockAvailability: true, rating: 3, location: 'Malaysia' },
        { name: 'USG Middle East', price: 48, stockAvailability: true, rating: 4, location: 'Dubai' }
      ]
    },
    {
      id: 'wood-doors-1',
      name: 'Wooden Doors',
      unit: 'Door',
      suppliers: [
          { name: 'Mazhar El Zein Carpentry', price: 800, stockAvailability: true, rating: 4, location: 'Sharjah' },
          { name: 'Deco Vision', price: 850, stockAvailability: true, rating: 5, location: 'Dubai' },
          { name: 'Abaad Wood Industries', price: 820, stockAvailability: true, rating: 4, location: 'Dubai' },
      ]
    },
    {
      id: 'wood-cupboards-1',
      name: 'Wooden Cupboards',
      unit: 'Sq. Meter',
       suppliers: [
          { name: 'Mazhar El Zein Carpentry', price: 450, stockAvailability: true, rating: 4, location: 'Sharjah' },
          { name: 'Deco Vision', price: 470, stockAvailability: true, rating: 5, location: 'Dubai' },
          { name: 'Universal Kitchens', price: 460, stockAvailability: false, rating: 3, location: 'Dubai' },
          { name: 'Holker Kitchens', price: 480, stockAvailability: true, rating: 4, location: 'Abu Dhabi' },
          { name: 'Abaad Wood Industries', price: 465, stockAvailability: true, rating: 4, location: 'Dubai' },
      ]
    },
    {
      id: 'aluminum-1',
      name: 'Aluminum Profile (Schuco)',
      unit: 'Meter',
      suppliers: [
        { name: 'Schuco UAE', price: 150, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'Alumatec', price: 155, stockAvailability: true, rating: 4, location: 'Sharjah' },
        { name: 'White Aluminium', price: 148, stockAvailability: true, rating: 4, location: 'Abu Dhabi' },
      ],
    },
     {
      id: 'aluminum-2',
      name: 'Aluminum Profile (Gutmann)',
      unit: 'Meter',
      suppliers: [
        { name: 'Gutmann Middle East', price: 135, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'Alumatec', price: 140, stockAvailability: false, rating: 4, location: 'Sharjah' },
        { name: 'Technical Glass', price: 138, stockAvailability: true, rating: 3, location: 'Dubai' },
      ],
    },
    {
      id: 'aluminum-3',
      name: 'Aluminum Profile (Al Ghurair)',
      unit: 'Meter',
      suppliers: [
        { name: 'Al Ghurair Construction', price: 120, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'White Aluminium', price: 125, stockAvailability: true, rating: 4, location: 'Abu Dhabi' },
        { name: 'Thomas Gregor', price: 122, stockAvailability: true, rating: 3, location: 'Dubai' },
      ],
    },
    {
        id: 'cladding-1',
        name: 'Aluminum Composite Panel',
        unit: 'Sheet',
        suppliers: [
            { name: 'Alucopanel', price: 180, stockAvailability: true, rating: 4, location: 'Dubai' },
            { name: 'Alubond', price: 185, stockAvailability: true, rating: 5, location: 'Sharjah' },
        ]
    },
    {
      id: 'stone-cladding-1',
      name: 'Travertine Stone Cladding',
      unit: 'Sq. Meter',
      suppliers: [
        { name: 'South Jalala', price: 250, stockAvailability: true, rating: 4, location: 'Egypt' },
        { name: 'Omani Stone', price: 280, stockAvailability: true, rating: 5, location: 'Oman' },
        { name: 'Syrian Stone', price: 230, stockAvailability: true, rating: 3, location: 'Syria' },
        { name: 'Saudian Stone', price: 240, stockAvailability: true, rating: 4, location: 'Saudi Arabia' }
      ]
    },
    {
      id: 'glass-1',
      name: 'DS GRAY Glass',
      unit: 'Sq. Meter',
      suppliers: [
        { name: 'Guardian', price: 85, stockAvailability: true, rating: 5, location: 'Ras Al Khaimah' },
        { name: 'Emirates Glass', price: 88, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'Saudi American Glass', price: 83, stockAvailability: true, rating: 4, location: 'Dammam' },
      ]
    }
  ],
  [Category.Plumbing]: [
    {
      id: 'pvc-1',
      name: 'uPVC Pipes (4-inch)',
      unit: 'Meter',
      suppliers: [
        { name: 'Hepworth PME', price: 18, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'Cosmoplast', price: 17.50, stockAvailability: true, rating: 4, location: 'Sharjah' },
        { name: 'Terrain', price: 18.20, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'Marley', price: 17.80, stockAvailability: false, rating: 3, location: 'Abu Dhabi' },
      ],
    },
    {
      id: 'ppr-pipes-1',
      name: 'PPR & PEX Pipes',
      unit: 'Meter',
      suppliers: [
        { name: 'Wefatherm', price: 15, stockAvailability: true, rating: 4, location: 'Germany' },
        { name: 'NPP', price: 12, stockAvailability: true, rating: 3, location: 'UAE' },
        { name: 'Hepworth', price: 18, stockAvailability: true, rating: 5, location: 'Dubai' }
      ]
    },
    {
      id: 'copper-1',
      name: 'Copper Pipe (1/2-inch)',
      unit: 'Meter',
      suppliers: [
        { name: 'Mueller Middle East', price: 35, stockAvailability: true, rating: 5, location: 'Bahrain' },
        { name: 'Yorkshire Copper Tube', price: 36, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'Pegler', price: 34.50, stockAvailability: true, rating: 4, location: 'Dubai' },
      ],
    },
    {
      id: 'faucet-1',
      name: 'Mixer Faucet (Chrome)',
      unit: 'Piece',
      suppliers: [
        { name: 'Grohe', price: 350, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'Hansgrohe', price: 375, stockAvailability: true, rating: 5, location: 'Germany' },
        { name: 'RAK Kludi', price: 340, stockAvailability: false, rating: 4, location: 'Ras Al Khaimah' },
        { name: 'Kohler', price: 360, stockAvailability: true, rating: 4, location: 'Dubai' },
      ],
    },
    {
      id: 'pumps-1',
      name: 'Booster Pump',
      unit: 'Piece',
      suppliers: [
          { name: 'Grundfos', price: 1200, stockAvailability: true, rating: 5, location: 'Dubai' },
          { name: 'Xylem Vogel', price: 1150, stockAvailability: true, rating: 4, location: 'Dubai' },
          { name: 'Davey', price: 1250, stockAvailability: true, rating: 4, location: 'Australia' },
      ]
    },
    {
      id: 'tanks-1',
      name: 'GRP Water Tank (1000L)',
      unit: 'Piece',
      suppliers: [
          { name: 'Mitsubishi', price: 800, stockAvailability: false, rating: 4, location: 'Japan' },
          { name: 'Al Bassam', price: 780, stockAvailability: true, rating: 3, location: 'Saudi Arabia' },
          { name: 'Polycon', price: 820, stockAvailability: true, rating: 5, location: 'Abu Dhabi' },
      ]
    },
    {
        id: 'sanitary-ware-1',
        name: 'Sanitary Ware Set',
        unit: 'Set',
        suppliers: [
            { name: 'Villeroy & Boch', price: 2500, stockAvailability: true, rating: 5, location: 'Germany' },
            { name: 'Grohe', price: 2200, stockAvailability: true, rating: 5, location: 'Dubai' },
            { name: 'Kohler', price: 2400, stockAvailability: true, rating: 4, location: 'Dubai' },
        ]
    }
  ],
  [Category.Electrical]: [
    {
      id: 'wiring-1',
      name: 'Electrical Wiring (2.5mm)',
      unit: 'Roll (100m)',
      suppliers: [
        { name: 'Ducab', price: 180, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'National Cable', price: 175, stockAvailability: true, rating: 4, location: 'Saudi Arabia' },
        { name: 'Oman Cable', price: 185, stockAvailability: true, rating: 4, location: 'Oman' },
      ]
    },
    {
      id: 'switches-1',
      name: 'Wiring Accessories (Switches/Sockets)',
      unit: 'Set',
      suppliers: [
        { name: 'Schneider Electric', price: 350, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'ABB', price: 360, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'MK', price: 340, stockAvailability: true, rating: 4, location: 'UK' },
      ]
    },
    {
      id: 'lv-switchgear-1',
      name: 'LV Switchgear',
      unit: 'Panel',
      suppliers: [
        { name: 'Schneider Electric', price: 5000, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'ABB', price: 5200, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'Eaton', price: 4800, stockAvailability: true, rating: 4, location: 'USA' }
      ]
    },
    {
      id: 'lighting-1',
      name: 'LED Downlight',
      unit: 'Piece',
      suppliers: [
        { name: 'Thorn', price: 45, stockAvailability: true, rating: 4, location: 'Dubai' },
        { name: 'Philips', price: 50, stockAvailability: true, rating: 5, location: 'Dubai' },
        { name: 'Trilux', price: 55, stockAvailability: false, rating: 4, location: 'Germany' },
      ]
    },
    {
      id: 'intercom-1',
      name: 'Intercom System',
      unit: 'System',
      suppliers: [
        { name: 'Elvox', price: 1500, stockAvailability: true, rating: 4, location: 'Italy' },
        { name: 'Fermax', price: 1600, stockAvailability: true, rating: 4, location: 'Spain' },
        { name: 'Urmet', price: 1400, stockAvailability: true, rating: 3, location: 'Italy' }
      ]
    },
    {
        id: 'automation-1',
        name: 'Home Automation System',
        unit: 'System',
        suppliers: [
            { name: 'Schneider', price: 15000, stockAvailability: true, rating: 5, location: 'Dubai' },
            { name: 'Honeywell', price: 16000, stockAvailability: true, rating: 4, location: 'Dubai' },
            { name: 'ABB', price: 15500, stockAvailability: true, rating: 5, location: 'Dubai' },
        ]
    },
    {
        id: 'cctv-1',
        name: 'CCTV System',
        unit: 'System',
        suppliers: [
            { name: 'Grundig', price: 4500, stockAvailability: true, rating: 3, location: 'Germany' },
            { name: 'Hikvision', price: 4200, stockAvailability: true, rating: 5, location: 'China' },
            { name: 'Samsung', price: 4800, stockAvailability: true, rating: 4, location: 'South Korea' },
        ]
    },
    {
      id: 'fire-alarm-1',
      name: 'Fire Alarm System',
      unit: 'System',
      suppliers: [
        { name: 'Simplex', price: 8000, stockAvailability: true, rating: 4, location: 'USA' },
        { name: 'Notifier', price: 9000, stockAvailability: true, rating: 5, location: 'USA' },
        { name: 'Siemens', price: 9500, stockAvailability: true, rating: 5, location: 'Germany' }
      ]
    },
    {
        id: 'lift-1',
        name: 'Elevator/Lift',
        unit: 'Unit',
        suppliers: [
            { name: 'Otis', price: 120000, stockAvailability: true, rating: 5, location: 'USA' },
            { name: 'Kone', price: 125000, stockAvailability: true, rating: 5, location: 'Finland' },
            { name: 'Mitsubishi', price: 130000, stockAvailability: true, rating: 4, location: 'Japan' },
        ]
    }
  ],
  [Category.AC]: [
    {
        id: 'ac-duct-1',
        name: 'A/C Split Duct Unit',
        unit: 'Unit',
        suppliers: [
            { name: 'Mitsubishi', price: 7000, stockAvailability: true, rating: 5, location: 'Japan' },
            { name: 'Daiken', price: 7200, stockAvailability: false, rating: 5, location: 'Japan' },
        ]
    },
    {
        id: 'ac-ductwork-1',
        name: 'Ductwork',
        unit: 'Meter',
        suppliers: [
            { name: 'AGIS', price: 60, stockAvailability: true, rating: 4, location: 'Saudi Arabia' },
            { name: 'Nippon', price: 62, stockAvailability: true, rating: 3, location: 'Japan' },
            { name: 'Sasco', price: 58, stockAvailability: true, rating: 4, location: 'UAE' },
        ]
    },
    {
        id: 'ac-insulation-1',
        name: 'Duct Insulation',
        unit: 'Roll',
        suppliers: [
            { name: 'Afico', price: 250, stockAvailability: true, rating: 4, location: 'Saudi Arabia' },
            { name: 'Kimmco', price: 260, stockAvailability: true, rating: 5, location: 'Kuwait' },
            { name: 'Aerofoam', price: 240, stockAvailability: true, rating: 4, location: 'UAE' },
        ]
    },
    {
        id: 'ac-outlets-1',
        name: 'Air Outlets (Grills/Diffusers)',
        unit: 'Piece',
        suppliers: [
            { name: 'Flow Tech', price: 75, stockAvailability: true, rating: 4, location: 'UAE' },
            { name: 'Beta', price: 70, stockAvailability: false, rating: 3, location: 'UAE' },
            { name: 'Air Master', price: 80, stockAvailability: true, rating: 5, location: 'UAE' },
        ]
    },
    {
        id: 'ac-fan-1',
        name: 'Exhaust Fan',
        unit: 'Piece',
        suppliers: [
            { name: 'S&P', price: 300, stockAvailability: true, rating: 5, location: 'Spain' },
            { name: 'Panasonic', price: 320, stockAvailability: true, rating: 4, location: 'Japan' },
            { name: 'KDK', price: 310, stockAvailability: true, rating: 4, location: 'Japan' },
        ]
    }
  ]
};
