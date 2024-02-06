var config = {
    style: 'mapbox://styles/ahnchaewon/clsa50mkj001g01pfhdcy6i96',
    accessToken: 'pk.eyJ1IjoiYWhuY2hhZXdvbiIsImEiOiJjbHMwYXVwbXkwMDl0MmlwZmtkYTB5ZmI0In0.zmvB-GrUOPLAmNm0EYcrYw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Food and housing',
    subtitle: 'HDB resale housing prices and access to fresh food in Singapore',
    byline: 'By Chaewon Ahn',
    footer: 'Source: HDB and URA. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Home Location',
            description: '',
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
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'supermarkets',
                    opacity: 0.8                
                }
            ],
            onChapterExit: [
                {
                    layer: 'resale-2021',
                    opacity: 0
                },
                {
                    layer: 'supermarkets',
                    opacity: 1                
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Supermarkets',
            description: 'The classroom for the Community Data Lab Course.',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'supermarkets',
                    opacity: 1
                },
                {
                    layer: 'sa-sup-500m',
                    opacity: 0.8
                }
            ],
            onChapterExit: [
                {
                    layer: 'supermarkets',
                    opacity: 0.3
                },
                {
                    layer: 'sa-sup-500m',
                    opacity: 1
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Punggol',
            description: 'The classroom for the Community Data Lab Course.',
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'sa-sup-500m',
                    opacity: 1                
                },
                {
                    layer: 'supermarkets',
                    opacity: 1                
                },
                {
                    layer: 'resale',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'resale',
                    opacity: 0
                },
                {
                    layer: 'supermarkets',
                    opacity: 0              
                }
            ]
        }
    ]
};
