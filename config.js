var config = {
    style: 'mapbox://styles/ahnchaewon/clsa50mkj001g01pfhdcy6i96',
    accessToken: 'pk.eyJ1IjoiYWhuY2hhZXdvbiIsImEiOiJjbHMwYXVwbXkwMDl0MmlwZmtkYTB5ZmI0In0.zmvB-GrUOPLAmNm0EYcrYw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Small Size Families in Food deserts',
    subtitle: 'Access to fresh food in Singapore',
    byline: 'By Chaewon Ahn',
    footer: 'Source: HDB and URA. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Food deserts in Singapore',
            description: 'An SMU study published in 2020 reveals that 10.4% of Singaporeans struggle to get sufficient, safe and nutritious food. <a href="https://www.straitstimes.com/singapore/10-of-singaporeans-struggle-to-get-sufficient-safe-and-nutritious-food-smu-study"> <strong>Read more</strong></a>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'resale-2021',
                    opacity: 0.5,
                    duration: 5000
                },
                {
                    layer: 'supermarkets',
                    opacity: 1,
                    duration: 5000              
                },
                {
                    layer: 'sa-sup-500m',
                    opacity: 0,
                    duration: 5000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'resale-2021',
                    opacity: 0
                },
                {
                    layer: 'supermarkets',
                    opacity: 0                
                },
                {
                    layer: 'sa-sup-500m',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Housing provision',
            description: 'These families were more likely to be living in one- or two-room Housing Board flats, the study found.',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'resale-2021',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'supermarkets',
                    opacity: 0,
                    duration: 5000
                },
                {
                    layer: 'sa-sup-500m',
                    opacity: 1,
                    duration: 5000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'resale-2021',
                    opacity: 0.5
                },
                {
                    layer: 'supermarkets',
                    opacity: 0.5                
                },
                {
                    layer: 'sa-sup-500m',
                    opacity: 0.5               
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Punggol / Senkang',
            description: 'Geographical mapping of areas where vulnerable households reside can aid in identifying food-insecure neighbourhoods and informing food aid organisations.',
            location: {
                center: [103.90280, 1.39981],
                zoom: 14.4,
                pitch: 45,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sa-sup-500m',
                    opacity: 1,
                    duration: 5000                              
                },
                {
                    layer: 'supermarkets',
                    opacity: 1,
                    duration: 5000                              
                },
                {
                    layer: 'resale',
                    opacity: 1,
                    duration: 5000              
                }
            ],
            onChapterExit: [
                {
                    layer: 'resale-2021',
                    opacity: 1
                },
                {
                    layer: 'supermarkets',
                    opacity: 1                
                },
                {
                    layer: 'sa-sup-500m',
                    opacity: 1                
                }
            ]
        }
    ]
};
