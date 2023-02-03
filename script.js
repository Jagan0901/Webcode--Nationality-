const header = document.createElement('h1');
header.innerText = "Nationality Report"
document.body.appendChild(header);

const division = document.createElement('div');
division.innerHTML = `
<div class="container-fluid">
<div class="input-group flex-nowrap">
<div class="input-group-prepend">
  <span class="input-group-text" id="addon-wrapping" style="margin-left: 550px;margin-top:40px">Nationality</span>
</div>
<div id="input">
<input type="text" class="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="addon-wrapping" id="name">
</div>
</div>
<button type="button" class="btn btn-success" onclick="nationality()" style = "position:relative;width: 100px; margin-left:700px; margin-top:30px">Search</button>
</div>`
document.body.append(division);

const para = document.createElement('p');
document.body.append(para);

async function nationality() {
  let personName = document.getElementById('name').value;
  // console.log(personName);
  let result = await fetch(`https://api.nationalize.io?name=${personName}`);
  let output = await result.json();
  console.log(output);
  let probability = output.country[0].probability
  let probability1 = output.country[1].probability
  let country = output.country[0].country_id;
  let country1= output.country[1].country_id;
  console.log(`Country ID:${country} Probabilty:${probability}`)
  console.log(`Country ID:${country1} Probabilty:${probability1}`)
 para.innerText = `The top two country id's of using this name are ${country} and ${country1}
                    And their probabilities are ${probability} and ${probability1} `
}
