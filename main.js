// NO CREDENTIALS REQUIRED

const clickedEvent = async(img_index) => {
    // get artwork id -- targeting the id value in the img.galler__img in html
    let artwork = document.getElementsByTagName('img')[img_index].attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['AIC-User-Agent', 'aic-bash (kmcc079@gmail.com)']
    ]);

    // request info from API 
    let request = await fetch(`https://api.artic.edu/api/v1/artworks/${artwork}?fields=title,artist_display`, {
        headers: headers
    });
        
    let response = await request.json();
    console.log(response.data);

    // save data to variables
    const image = response.data;
    let title = image.title;
    let artist = image.artist_display;

    // create popup function
    function popUp() {
        let popup = document.getElementById('my-popup');

        // insert data to html elements
        document.getElementById('head').innerHTML = title;
        document.getElementById('subhead').innerHTML = artist;

        // Get the position of the image
        let img = document.getElementsByTagName('img')[img_index];
        let rect = img.getBoundingClientRect();
        let imgTop = rect.top + window.scrollY;
        let imgLeft = rect.left + window.scrollX;
        let imgWidth = rect.width;

        // Set the position of the popup relative to the image
        popup.style.top = `${imgTop - popup.offsetHeight/20}px`;
        popup.style.left = `${imgLeft + imgWidth/2 - popup.offsetWidth/1.87}px`;

        popup.classList.toggle('show');
    }
    popUp();
}

/**
//  * @param id
//  * @param event
//  */

const getInfo = (id, event) => {
    switch(id) {
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0);
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1);
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2);
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3);
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4);
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5);
            break;
        }
        case 'fig7': {
            event.stopPropagation();
            clickedEvent(6);
            break;
        }
        case 'fig8': {
            event.stopPropagation();
            clickedEvent(7);
            break;
        }
        case 'fig9': {
            event.stopPropagation();
            clickedEvent(8);
            break;
        }
        case 'fig10': {
            event.stopPropagation();
            clickedEvent(9);
            break;
        }
        case 'fig11': {
            event.stopPropagation();
            clickedEvent(10);
            break;
        }
    }
}