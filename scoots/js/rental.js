fetch("../scoots/data/rental.json")
    .then(response => response.json())
    .then(data => {
        for (rental of data.rentals) {
            if (rental.name == 'Honda Metropolitan Scooter') {
                let h=` <h3>${rental.name}</h3>
                     <p>PRICE</p>
                    <ul><li>Reservation:</li> 
                        <p>${rental.price.reserve.halfday}/Half Day</p>
                        <p>${rental.price.reserve.fullday}/Full Day</p>
                        <li>Walk In:</li>
                        <p>${rental.price.walkin.halfday}/Half Day</p>
                        <p>${rental.price.reserve.fullday}/Full Day</p>
                    </ul>
                    <p>PESSENGER: ${rental.person}</p>
                    <img src="../scoots/img/rental/metro.jpg" alt="metro scooter">
                    `;
                document.getElementById('metro').innerHTML = h;
            }
            else if (rental.name == "Honda Dio Scooter"){ 
                let h=` <h3>${rental.name}</h3>
                    <p>PRICE</p>
                    <ul><li>Reservation:</li> 
                        <p>${rental.price.reserve.halfday}/Half Day</p>
                        <p>${rental.price.reserve.fullday}/Full Day</p>
                        <li>Walk In:</li>
                        <p>${rental.price.walkin.halfday}/Half Day</p>
                        <p>${rental.price.walkin.fullday}/Full Day</p>
                    </ul>
                    <p>PESSENGER: ${rental.person}</p>
                    <img src="../scoots/img/rental/dio_scooter.jpg" alt="dio scooter">
                    `;
                document.getElementById('dio').innerHTML = h;
            }
            else if (rental.name == "Honda PCX150 Scooter"){ 
                let h=` <h3>${rental.name}</h3>
                     <p>PRICE</p>
                    <ul><li>Reservation:</li> 
                        <p>${rental.price.reserve.halfday}/Half Day</p>
                        <p>${rental.price.reserve.fullday}/Full Day</p>
                        <li>Walk In:</li>
                        <p>${rental.price.walkin.halfday}/Half Day</p>
                        <p>${rental.price.walkin.fullday}/Full Day</p>
                    </ul>
                    <img src="../scoots/img/rental/pcx150.jpg" alt="pcx">
                    `;
                document.getElementById('pcx').innerHTML = h;
            }
            else if (rental.name == "Honda Pioneer ATV"){ 
                let h=` <h3>${rental.name}</h3>
                     <p>PRICE</p>
                    <ul><li>Reservation:</li> 
                        <p>${rental.price.reserve.halfday}/Half Day</p>
                        <p>${rental.price.reserve.fullday}/Full Day</p>
                        <li>Walk In:</li>
                        <p>${rental.price.walkin.halfday}/Half Day</p>
                        <p>${rental.price.walkin.fullday}/Full Day</p>
                    </ul>
                    <p>PESSENGER: ${rental.person}</p>
                    <img src="../scoots/img/rental/pioneer.jpg" alt="atv">
                    `;
                document.getElementById('atv').innerHTML = h;
            }
            else if (rental.name == "Jeep Wrangler-4 door with a/c"){ 
                let h=` <h3>${rental.name}</h3>
                     <p>PRICE</p>
                    <ul><li>Reservation:</li> 
                        <p>${rental.price.reserve.halfday}/Half Day</p>
                        <p>${rental.price.reserve.fullday}/Full Day</p>
                        <li>Walk In:</li>
                        <p>${rental.price.walkin.halfday}/Half Day</p>
                        <p>${rental.price.walkin.fullday}/Full Day</p>
                    </ul>
                    <p>PESSENGER: ${rental.person}</p>
                    <img src="../scoots/img/rental/jeep4.jpg" alt="jeep4">
                    `;
                document.getElementById('jeep4').innerHTML = h;
            }
            else { 
                let h=` <h3>${rental.name}</h3>
                     <p>PRICE</p>
                    <ul><li>Reservation:</li> 
                        <p>${rental.price.reserve.halfday}/Half Day</p>
                        <p>${rental.price.reserve.fullday}/Full Day</p>
                        <li>Walk In:</li>
                        <p>${rental.price.walkin.halfday}/Half Day</p>
                        <p>${rental.price.walkin.fullday}/Full Day</p>
                    </ul>
                    <p>PESSENGER: ${rental.person}</p>
                    <img src="../scoots/img/rental/jeep2.jpg" alt="jeep2">
                    `;
                document.getElementById('jeep2').innerHTML = h;
            }


        }
    });


