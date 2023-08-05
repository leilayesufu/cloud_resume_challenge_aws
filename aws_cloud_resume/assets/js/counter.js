const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://u4z2f3edjkcls6pa2aq7az3iiu0cdlpk.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `You are visitor number: ${data}`;
}
updateCounter();