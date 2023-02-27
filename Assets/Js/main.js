let htmlEvents = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    console.log(currentDate);
    console.log(eventDate);
    if (eventDate < currentDate) {
       console.log('pasado');
    } else {
        console.log('futuro')
    }
         htmlEvents += `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <div class="card">
            <img src="./Assets/Cinema.jpg" class="card-img-top" alt="card-cinema">
            <div class="card-body">
              <h5 class="card-title">Cinema</h5>
              <p class="card-text">Texto descriptivo</p>
              <div class="d-flex justify-content-between align-items-center">
                <span>Price $0000</span>
                <a href="./details.html" class="btn btn-primary">View more...</a>
              </div>
            </div>
          </div>
        </div>`;
}
document.querySelector('.row').innerHTML = htmlEvents;
console.log(htmlEvents);