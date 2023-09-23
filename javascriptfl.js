
const BASEURL = "https://backend.getlinked.ai";

const optionss = document.getElementById("getoptions");



const getCategories = async (endpoint) => {
    const res = await fetch(`${BASEURL}/${endpoint}`); 

    if(!res.ok || !res.ok){
        throw new Error("Cannot fetch news from this endpoint");
    }
    const data = await res.json();

    optionss.innerHTML = '';

    data.map((item) => {
        const { id, name } = item;

        optionss.appendChild(filloptions(id, name));

        console.log(id, name);
    });
        
    
    // console.log(data);

    return data;
    
}

const showOption = async () => {
    const options = await getCategories();
    options.data.forEach(option => {
        const alloptions = document.createElement('option');
        console.log(option);

        alloptions.value = option.optionss;
        alloptions.text = option.optionss;
    });
}

showOption();

// getCategories('hackathon/categories-list');


//Fetching Categories
// getCategories("", {
//     method: "GET",
//     headers: {"Content-Type": "application/json"} 
// })


function filloptions(name){

    //creating news elements
const filloptions = document.createElement('select'); /*div*/


   
optionss.innerHTML = `
    <option value="${name}"></option>
    `;

    return filloptions;

}