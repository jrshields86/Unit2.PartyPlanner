let events = [];
const eventList = document.querySelector('#events')

async function fetchEvents(){
    const response = await fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2307-ftb-et-web-ft/events')
    const json = await response.json();
    events = json.data;
    renderEvents();
}

function renderEvents(){
    const html = events.map(function(event){
        return`
        <div>
        <h2>${event.name}</h2>
        <p>
        ${event.description}
        </p>
        <h3>${event.location}</h3>
        </div>
        `;
    }).join('')
    eventList.innerHTML = html;
}

fetchEvents();