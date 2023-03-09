let htmlEvents = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
     console.log(currentDate);
     console.log(eventDate);
    if (eventDate < currentDate) {
       console.log('pasado');
       htmlEvents += `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p-2">
       <div class="card">
         <img src="${event.image}" class="card-img-top" alt="card-cinema">
         <div class="card-body">
           <h5 class="card-title">${event.name}</h5>
           <p class="card-text">${event.description}</p>
           <div class="d-flex justify-content-between align-items-center">
             <span>Price: $${event.price}</span>
             <a href="./details.html" class="btn btn-primary">View more...</a>
           </div>
         </div>
       </div>
     </div>`;
    } else {
        console.log('futuro')
    }

}
document.querySelector('.row').innerHTML = htmlEvents;
//console.log(htmlEvents);