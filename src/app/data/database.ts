import { ProjectData } from '../models/project-data';
import { HomepageSlide } from '../models/homepage-slide';

export const PROJECTS = <ProjectData[]> [
    
    new ProjectData
    ({
        name: "fire-in-metal",
        title: "FIRE IN METAL",
        text: "In a colorful orchard there is a brick road that leads to the house. The brick continues around the house and is tucked inside the metal sheath that covers the house. The house is covered with a gabled roof that extends along the facade, and on the south side part of the roof extends creating a canopy for outdoor gatherings.",
        meta: "RESIDENTIAL | 2021. | ZAGREB, CROATIA",
        pictures: ['assets/pictures/fire-in-metal-home.jpg']
    }),

    new ProjectData
    ({
        name: "church-of-st-ana",
        title: "CHURCH OF ST. ANA",
        text: "The Church of St. Ana was built in 1687, and since then it has been damaged by earthquakes and landslides many times, but the 2020 earthquake made the church unusable. The renovation project is made of two parts: the rebuilt entrance and tower of the old church, and the new part of the building in front of the old church. The new part of the church is designed to preserve the visual identity of the old church by using structure frames with a glass facade. To achieve the impression of warmness, wooden finishing touches were chosen for the interior.",
        meta: "SACRAL | 2021. | SVETA JANA, CROATIA",
        pictures: ['assets/pictures/st-ana1.jpg',
                    'assets/pictures/st-ana2.jpg']
    }),

    new ProjectData
    ({
        name: "two-apartment-buildings",
        title: "TWO APARTMENT BUILDINGS",
        text: "The buildings are positioned along one of the city’s busiest avenues, leaving an impression of life in nature as the surrounding greenery is designed as a park within which the buildings are inserted. The entire facade consists of only two materials: aluminum and plaster. The dynamics of the façade is achieved by aluminum frames that frame the loggias and windows. IBT won the third award in this architectural competition.",
        meta: "RESIDENTIAL | 2020. | ZAGREB, CROATIA",
        pictures: ['assets/pictures/two-apartment-buildings1.jpg',
                   'assets/pictures/two-apartment-buildings2.jpg']
    }),

    new ProjectData
    ({
        name: "three-urban-villas",
        title: "THREE URBAN VILLAS",
        text: "Three urban villas are located on the slopes of Medvednica. The facades of the buildings are shaped with white balconies, fences, panels, and glass railings. The buildings are connected as a whole by paths and cascading green areas. The urban villas are dark with a white outer envelope consisting of balconies and panels. Additional dynamics of the facade is achieved by LED lights.",
        meta: "RESIDENTIAL | 2021. | ZAGREB, CROATIA",
        pictures: ['assets/pictures/three-urban-villas1.jpg',
                   'assets/pictures/three-urban-villas2.jpg',
                   'assets/pictures/three-urban-villas3.jpg',
                   'assets/pictures/three-urban-villas4.jpg']
    }),

    new ProjectData
    ({
        name: "glassframe",
        title: "GLASSFRAME",
        text: "",
        meta: "RESIDENTIAL | 2021. | ZAGREB, CROATIA",
        pictures: ['assets/pictures/glassframe.jpg']
    }),

    new ProjectData
    ({
        name: "dubrovnik-city-harbour",
        title: "DUBROVNIK CITY HARBOUR",
        text: "The main problem of the Dubrovnik city port was servicing the area of catering facilities, because they are intersected by pedestrian roads. For this reason, supply assembly kiosks supplying economic zones have been dispersed. The kiosks are lined with reflective coating so that their volume does not impose itself on the space but reflects the high-quality ambience of the space. Kiosks have built-in smart boards that provide tourists and passers-by with interesting and important information about the city. In addition to the kiosks, unobtrusive white urban equipment has been selected. Mobile urban equipment enables multi-purpose use of space for various purposes.",
        meta: "PUBLIC | 2021. | DUBROVNIK, CROATIA",
        pictures: ['assets/pictures/dubrovnik-city-harbour1.jpg',
                   'assets/pictures/dubrovnik-city-harbour2.jpg',
                   'assets/pictures/dubrovnik-city-harbour3.jpg']
    }),

    new ProjectData
    ({
        name: "apartment-building",
        title: "APARTMENT BUILDING",
        text: "The main feature of this building are the large terraces with a beautiful view. The apartments have the possibility of opening the glass wall towards the terraces and thus give an extension of the interior of the apartment, which turns into an exterior. The facade consists of compositions of aluminum panels and windows. The terraced construction is further accentuated by white horizontals. The last two floors are a luxury duplex penthouse.",
        meta: "RESIDENTIAL | 2020. | ZAGREB, CROATIA",
        pictures: ['assets/pictures/apartment-building.jpg']
    }),

    new ProjectData
    ({
        name: "interior",
        title: "INTERIOR",
        text: "The interior is a combination of traditional and modern. Modern and luxurious furniture is inserted into the traditional scheme of the apartment which contains a fireplace (in a modern interpretation) as the main aspect of the living room. A black kitchen over the entire wall with a wooden element frames the black reflective elements where the cooking activity takes place. The whole apartment is open plan and from every corner offers a beautiful view of the old town of Zagreb.",
        meta: "INTERIOR | 2021. | ZAGREB, CROATIA",
        pictures: ['assets/pictures/interior1.jpg',
                   'assets/pictures/interior2.jpg',
                   'assets/pictures/interior3.jpg']
    })

];

export const HOMEPAGE_SLIDES = <HomepageSlide[]> [

    new HomepageSlide
    ({
        title: "FIRE IN METAL",
        meta: "RESIDENTIAL | 2021. | ZAGREB, CROATIA",
        picture: "assets/pictures/fire-in-metal-home.jpg"
    }),

    new HomepageSlide
    ({
        title: "CHURCH OF ST. ANA",
        meta: "SACRAL | 2021. | SVETA JANA, CROATIA",
        picture: "assets/pictures/st-ana1.jpg"
    }),

    new HomepageSlide
    ({
        title: "TWO APARTMENT BUILDINGS",
        meta: "RESIDENTIAL | 2020. | ZAGREB, CROATIA",
        picture: "assets/pictures/two-apartment-buildings1.jpg"
    }),

    new HomepageSlide
    ({
        title: "THREE URBAN VILLAS",
        meta: "RESIDENTIAL | 2021. | ZAGREB, CROATIA",
        picture: "assets/pictures/three-urban-villas2.jpg"
    }),

    new HomepageSlide
    ({
        title: "DUBROVNIK CITY HARBOUR",
        meta: "PUBLIC | 2021. | DUBROVNIK, CROATIA",
        picture: "assets/pictures/dubrovnik-city-harbour1.jpg"
    })

];
