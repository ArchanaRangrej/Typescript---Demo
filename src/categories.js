const categories = [
    {
        value: 'Construction',
        label: 'Construction',
        children: [
            {
                value: 'Ceilings',
                label: 'Ceilings',
            },
            {
                value: 'Columns',
                label: 'Columns',
            },
            {
                value: 'Doors',
                label: 'Doors',
            },
            {
                value: 'Decorative Walls',
                label: 'Decorative Walls',
            },
            {
                value: 'Fireplaces',
                label: 'Fireplaces',
            },
            {
                value: '`Floor `Vent',
                label: 'Floor Vent',
            },
            {
                value: 'Moulding',
                label: 'Moulding',
            },
            {
                value: 'Platforms',
                label: 'Platforms',
            },
            {
                value: 'Stairs',
                label: 'Stairs',
            },
            {
                value: 'Niche',
                label: 'Niche',
            },
            {
                value: 'Walls',
                label: 'Walls',
            },
            {
                value: 'Windows',
                label: 'Windows',
                children: [
                    {
                        value: 'Window Shades',
                        label: 'Window Shades',
                    },
                ],
            },
        ],
    },
    {
        value: 'Furniture',
        label: 'Furniture',
        children: [
            {
                value: 'Sofas',
                label: 'Sofas',
                children: [
                    {
                        value: '3 Seater Sofas',
                        label: '3 Seater Sofas',
                    },
                    {
                        value: 'Armchairs',
                        label: 'Armchairs',
                    },
                    {
                        value: 'Benches',
                        label: 'Benches',
                    },
                    {
                        value: 'Chaise',
                        label: 'Chaise',
                    },
                    {
                        value: 'Futon',
                        label: 'Futon',
                    },
                    {
                        value: 'Loveseats',
                        label: 'Loveseats',
                    },
                    {
                        value: 'Recliner',
                        label: 'Recliner',
                    },
                    {
                        value: 'Sectional',
                        label: 'Sectional',
                    },
                    {
                        value: 'Settes',
                        label: 'Settes',
                    },

                ],
            },
            {
                value: 'Chairs',
                label: 'Chairs',
                children: [
                    {
                        value: 'Armchairs',
                        label: 'Armchairs',
                    },
                    {
                        value: 'Bar Chairs',
                        label: 'Bar Chairs',
                    },
                    {
                        value: 'Dining Chairs',
                        label: 'Dining Chairs',
                    },
                    {
                        value: 'Ottomans & Poufs',
                        label: 'Ottomans & Poufs',
                    },
                    {
                        value: 'Recliners',
                        label: 'Recliners',
                    },
                    {
                        value: 'Swivel Chairs',
                        label: 'Swivel Chairs',
                    },
                ],
            },
            {
                value: 'Tables',
                label: 'Tables',
                children: [
                    {
                        value: 'Accent Tables',
                        label: 'Accent Tables',
                    },
                    {
                        value: 'Bar Tables',
                        label: 'Bar Tables',
                    },
                    {
                        value: 'Cocktail Tables',
                        label: 'Cocktail Tables',
                    },
                    {
                        value: 'Coffee Tables',
                        label: 'Coffee Tables',
                    },
                    {
                        value: 'Console Tables',
                        label: 'Console Tables',
                    },
                    {
                        value: 'Desks',
                        label: 'Desks',
                    },
                    {
                        value: 'Dining Tables',
                        label: 'Dining Tables',
                    },
                    {
                        value: 'End Tables',
                        label: 'End Tables',
                    },
                    {
                        value: 'Side Tables',
                        label: 'Side Tables',
                    },
                    {
                        value: 'Sofa Tables',
                        label: 'Sofa Tables',
                    }
                ],
            },
            {
                value: 'Beds',
                label: 'Beds' 
            },
            {
                value: 'Storage',
                label: 'Storage',
                children: [
                    {
                        value: 'Bookcases',
                        label: 'Bookcases',
                    },
                    {
                        value: 'Cabinets',
                        label: 'Cabinets',
                    },
                    {
                        value: 'Chests',
                        label: 'Chests',
                    },
                    {
                        value: 'Dressers',
                        label: 'Dressers',
                    },
                    {
                        value: 'Night Stands',
                        label: 'Night Stands',
                    }
                ],
            },
        ],
    },
    {
        value: 'Lights',
        label: 'Lights',
        children: [
            {
                value: 'Ceiling Lamps',
                label: 'Ceiling Lamps'
            },
            {
                value: 'Floor Lamps',
                label: 'Floor Lamps' 
            },
            {
                value: 'Table Lamps',
                label: 'Table Lamps' 
            },
            {
                value: 'Wall Lamps',
                label: 'Wall Lamps' 
            },
            {
                value: 'Templates',
                label: 'Templates' 
            },
        ],
    },
    {
        value: 'Kitchen',
        label: 'Kitchen',
        children: [
            {
                value: 'Appliances',
                label: 'Appliances'
            },
            {
                value: 'Cabinets',
                label: 'Cabinets' 
            },
            {
                value: 'Templates',
                label: 'Templates' 
            },
            {
                value: 'Others',
                label: 'Others' 
            }
        ],
    },
    {
        value: 'Bathroom',
        label: 'Bathroom',
        children: [
            {
                value: 'Niche',
                label: 'Niche'
            },
            {
                value: 'Bath Fittings and Fixtures',
                label: 'Bath Fittings and Fixtures' 
            },
            {
                value: 'Bath Tubs',
                label: 'Bath Tubs' 
            },
            {
                value: 'Toilets',
                label: 'Toilets' 
            },
            {
                value: 'Toiletries',
                label: 'Toiletries' 
            },
            {
                value: 'Vanities',
                label: 'Vanities' 
            },
            {
                value: 'Showers',
                label: 'Showers' 
            },
        ],
    },
    {
        value: 'Decor',
        label: 'Decor',
        children: [
            {
                value: 'Curtains',
                label: 'Curtains'
            },
            {
                value: 'Cushions',
                label: 'Cushions' 
            },
            {
                value: 'Flowers & Plants',
                label: 'Flowers & Plants' 
            },
            {
                value: 'Mirrors',
                label: 'Mirrors' 
            },
            {
                value: 'Musical Instruments',
                label: 'Musical Instruments' 
            },
            {
                value: 'Rugs',
                label: 'Rugs' 
            },
            {
                value: 'Table Decor',
                label: 'Table Decor' 
            },
            {
                value: 'Wall Decor',
                label: 'Wall Decor' 
            },
            {
                value: 'Baskets',
                label: 'Baskets' 
            },
        ],
    },
    {
        value: 'Appliances',
        label: 'Appliances',
        children: [
            {
                value: 'Electronics',
                label: 'Electronics'
            },
            {
                value: 'Kitchen',
                label: 'Kitchen' 
            },
            {
                value: 'Switches & Sockets',
                label: 'Switches & Sockets' 
            },
            {
                value: 'Other Appliances',
                label: 'Other Appliances' 
            }
        ],
    },
    {
        value: 'Office Room',
        label: 'Office Room',
        children: [
            {
                value: 'Bookcases',
                label: 'Bookcases'
            },
            {
                value: 'Chairs',
                label: 'Chairs' 
            },
            {
                value: 'Desks',
                label: 'Desks' 
            }
        ],
    },
    {
        value: 'Templates',
        label: 'Templates',
        children: [
            {
                value: 'Chairs',
                label: 'Chairs',
                children: [
                    {
                        value: 'Chair Arms',
                        label: 'Chair Arms',
                    },
                    {
                        value: 'Chair Backs',
                        label: 'Chair Backs',
                    },
                    {
                        value: 'Chair Legs',
                        label: 'Chair Legs',
                    },
                    {
                        value: 'Chair Seats',
                        label: 'Chair Seats',
                    },
                    {
                        value: 'Cushions',
                        label: 'Cushions',
                    }
                ],
            },
            {
                value: 'Handles & Knobs',
                label: 'Handles & Knobs' 
            },
            {
                value: 'Tables',
                label: 'Tables',
                children: [
                    {
                        value: 'Table Legs',
                        label: 'Table Legs',
                    },
                    {
                        value: 'Table Tops',
                        label: 'Table Tops',
                    },
                    {
                        value: 'Under Design',
                        label: 'Under Design',
                    }
                ],
            },
            {
                value: 'Sofas',
                label: 'Sofas',
                children: [
                    {
                        value: 'Ottoman',
                        label: 'Ottoman',
                    },
                    {
                        value: 'Sectionals',
                        label: 'Sectionals',
                    },
                    {
                        value: 'Sofa Back',
                        label: 'Sofa Back',
                    },
                    {
                        value: 'Sofa Legs',
                        label: 'Sofa Legs',
                    },
                    {
                        value: 'Sofa Seats',
                        label: 'Sofa Seats',
                    }
                ],
            }
        ],
    },
    {
        value: 'Outdoor',
        label: 'Outdoor',
        children: [
            {
                value: 'Environment',
                label: 'Environment'
            }
        ],
    },
];

export default categories;