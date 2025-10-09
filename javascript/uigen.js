

console.log(students);

for(var i = 0; i < students.length; i++) {
    var ntr = document.createElement("tr")

    var fntd = document.createElement("td")
    fntd.innerText = students[i].firstName;
    ntr.appendChild(fntd)

    var lntd = document.createElement("td")
    lntd.innerText = students[i].lastName;
    ntr.appendChild(lntd)

    var agetd = document.createElement("td")
    agetd.innerText = students[i].age;
    ntr.appendChild(agetd)

    var gentd = document.createElement("td")
    gentd.innerText = students[i].gender;
    ntr.appendChild(gentd)

    var pictd = document.createElement("td")
    var image = document.createElement("img")
    image.src = students[i].studentThumbnailUrl;
    image.style.width='50px'
    ntr.appendChild(pictd).appendChild(image)

    var placetd = document.createElement("td")
    placetd.innerText = students[i].place;
    ntr.appendChild(placetd)
    document.getElementById('d1').appendChild(ntr)
}