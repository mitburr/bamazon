# bamazon
<h1> MySQL Virtual Store</h1>

<h3> This app intends to showcase my ability to use MySQL to create a working virtual store. It displays my knowledge on CLIs, node.js, and NPM, as well as interaction with MySQL through Javascript. I also including seeds for a MySQL database.</h3> 


<hr>


<h1> Known Errors </h1>

<h3>The primary error I had noticed is an async error due to the server call; inquirer displays the prompts for inquiry before the items in the database get displayed. Inquirer has a workaround for this, which is shown in the demonstration: when the user types the prompt is added to the most recent cursor focus. This is less than ideal, however, because the user may not see the prompt before they start typing. </h3>


<hr>


<h1> Future Directions </h1>

<h3> This has a wide variety of future directions: we could track purchases based on department and create related statistics, or we could add more to the user side and create accounts which utilize a cart. My next move would probably be to add an input value to the order function, so that when it's recalled after a user attempts to purchase more than stock, the id selection phase of the prompt could be ignored. </h3>


<hr>

<h1> Demonstration </h1>

<h3>First we see the typical CLI interface of the app</h3>

![User flow example](bmazon/images/UserFlow.gif)




  <h3> Then we see that purchases by the user cause changes in the database.</h3>

![database change demonstration](bmazon/images/ServerChange.gif)
