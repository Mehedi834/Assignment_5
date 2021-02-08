fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then(res => res.json())
    .then(data => displayFoods(data))

const displayFoods = foods => {
    // const ul = document.getElementById('foods');
    // console.log(foods);
     for (let i = 0; i < foods.length; i++) {
        const food = foods[i];
         console.log(food.name);
    
     }
     
} 