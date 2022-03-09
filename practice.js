//1.Find the documentation of console tab utilities API.Then read it.try it.practice it.spend more time on the documentation.
//2.Easiest way to find out the event listener attached to a dom element.
//3.How can you break the first line of a function without actually adding a breakpoint. Rather you will use a console api utilities.
//4.go to the source tab and add a conditional breakpoint.

//---------------
//5.What is accessibility?
//accessibility is the practice of making our website usuable by many people as much as possible.The practice of making our sites accessible is very much important.We need to think about the people with disabilities,those using mobile devices or those with slow network connection.

//6.What is call stack?
//call stack is a data structure that store data information of a computer programme.Javascript is a single threated language where call stack is just the only thread where execution contexts are stored in stack and execute the contexts and converts the contexts to machine code.


//7.What is the purpose of regular expression?
//regular expression is a sequence of characters that forms a search pattern.The search pattern can be used for text search and text replace operations.


//8.What is the purpose of the lighthouse tab of chrome devtool.
//Lighthouse is an open source,automated tool for improving the quality of web pages. It informs us how we improve the quality,performance,etc of our web pages.



//----------
//Task-1:
//9.Simple website.You will have a input and a button.Input field will take an email.Use regular expression to validate the inserting an email.(Find the regEx by searching on online)
//10.If email is valid(correct email pattern) display some green color text.if email is not valid,show some error in red color text.


//javascript regular expression email validation
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const str = 'aftab@gmail.com';
console.log(pattern.test(str));



