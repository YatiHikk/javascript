(async () => {
    let data = await fetch("motorists.json")
        .then(response => response.json());
    addContent(data)
})();

function addContent(listInfo) {
    let main = document.getElementById("table-content");

    listInfo.forEach(function (item, i) {
        let row = main.insertRow(1 + i);
        let owner = row.insertCell(0);
        let manufacturer = row.insertCell(1);
        let model = row.insertCell(2);
        let year = row.insertCell(3);

        owner.innerHTML = item.person.firstname + " " + item.person.lastname;
        manufacturer.innerHTML = item.car.manufacturer;
        model.innerHTML = item.car.model;
        year.innerHTML = item.car.year;
    })

};
