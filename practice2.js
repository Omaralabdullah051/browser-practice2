//1.How javascript codes are run in the browser?
//browser has two important part.Engine and run time environment.Engine has two part.Heap memory and call stack.As javascript a just in time compiled language,it is converted into machine code context by context of our code by call stack.Execution context are stored on call stack in stack and execute from call stack and converts into machine code.And computer hardware directly understand the machine language.


//2.What is Asynchronous in javascript?
//By default javascript works synchronously.Ansynchronous is javascript's another behavior and asychronous task execute at last when the all sychronous tasks are completed.

//3.How does setTimeOut() & setInterval() works and what's the difference between these two?
//both is an asychronous function and both execute at last when the all sychronous tasks are completed. setTimeOut is that kind of asynchronous function that will be execute when the time out is completed.But the setInterval is that kind of asynchronous function that will be execute again and again after the set time.


//4.What's the difference between alert(),confirm() and prompt()?
//alert() is a pop-up box with a specific text and 'Ok' button.
//confirm() is a pop-up box with a specific text and along with 'ok' and 'cancel' button.And prompt() is a pop-up box with a input-field and along with 'ok' and 'cancel' button. alert() shows specific message to the user.confirm() ask something from the user and prompt() takes some input from the user.


//5.Specify browser's url parts
//url has many part's.As like as href,origin,host,hostname,port,pathname,search,hash,etc.


//6.How does open youtube in the browser by using location API?
//location.assign('youtube url...........')

//7.Use history API to go backward (two step)
//history.go(-2);

//8.what's the difference between local storage and session storage?
//local storage data doesn't expires when the page session end or the tab closes.But session storage data expires until the page session end or the tab closes.local storage's space 10Mb. session storage's spacae 5Mb.local storage data will be deleted via javascript or manually.session storage data will automatically delete when the page session end or the tab closses.


//9.just simply store an object on local storage and also get local storage data and add more properties.And store the object again on local storage.
//10.How can you search an element by class name on element tab?
//11.Set a conditional breakpoint on source tab.
//12.How can you know the processing time of a loop that runs 1 million time over and over?