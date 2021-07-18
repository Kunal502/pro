var img=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4YGB7ZZnwyzJSnRWbUE_8Sd7XnEv90BQjQ&usqp=CAU ",
    "http://www.recyclingtoday.com/fileuploads/image/2020/04/22/AdobeStock35274439-Isolated-Planet-Earth-showing-Europe-and-Africa.jpg?w=736&h=414&mode=crop",
    "https://www.sfu.ca/content/sfu/colloquium/PDC_Top/astrobiology/life-in-our-solar-system/mars/jcr:content/main_content/image.img.640.medium.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhv0auokBntFIF7l7u88mV_DYH-ogevEI4rg&usqp=CAU",
    "https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/AW_187527_OUTERPLANETS_Saturn_doegjg.jpg",
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2019%2F01%2Furanus-1200x800.jpg",
    "https://cdn.vox-cdn.com/thumbor/6epwjnco31qZ0UpPmrwFVDDqHZ8=/0x0:1000x1000/1200x800/filters:focal(420x420:580x580)/cdn.vox-cdn.com/uploads/chorus_image/image/63083128/PIA02210_orig.0.jpg",
    "https://nineplanets.org/wp-content/uploads/2020/03/mercury.png",]; img.length

    var namep=[
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Urans",
        "netpune",
    ];
    var i=0;
    function next()
    {
        i++;
        var numberofplanet_arrys= 8
        if(i> numberofplanet_arrys)
        {
            i=0;
        }
        var up_img=img[i];
        var nam_pl= namep[i];
        document.getElementById("img1").src= up_img;
        document.getElementById("nameplanets").innerHTML= nam_pl;
    }