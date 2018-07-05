function scrollme(x) {
    console.log(x);
    if (x.toString() == "about") {
        document.querySelector('#About').scrollIntoView(true);
    } else if (x == 'education') {
        document.querySelector('#About').scrollIntoView(true);
    } else if (x == 'experience') {
        document.querySelector('#Experience').scrollIntoView(true);
    } else if (x == 'skills') {
        document.querySelector('#Skills').scrollIntoView(true);
    } else if (x == 'certificates') {
        document.querySelector('#Certificate').scrollIntoView(true);
    } else if (x == "projects") {
        document.querySelector('#Projects').scrollIntoView(true);
    } else if (x == "top") {
        document.querySelector('#pics').scrollIntoView(true);
    }

}