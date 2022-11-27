let buttons = document.querySelector('#error-btns');
    
buttons.addEventListener('click', e => {
    e.preventDefault();

    if(e.target.textContent == "Console Log")
        console.log("Console Log Demo");

    if(e.target.textContent == "Console Error")
        console.error("Console Error Demo");

    if(e.target.textContent == "Console Count")
        console.count('Count Button');
      
    if(e.target.textContent == "Console Warn")
        console.warn('Console Warn Button');

    if(e.target.textContent == "Console Assert")
    {
        let x = 2;
        let y = 3;
        let reason = '2 is expected to be less than 3';
        console.assert(x > y, {x, y, reason});
    }
      
    if(e.target.textContent == "Console Clear")
        console.clear();
      
    if(e.target.textContent == "Console Dir")
        console.dir(e.target);

    if(e.target.textContent == "Console dirxml")
        console.dirxml(e.target);  
      
    if(e.target.textContent == "Console Group Start")
        console.group('console.group');

    if(e.target.textContent == "Console Group End")
        console.groupEnd('console.group');  

    if(e.target.textContent == "Console Table")
    {
        let array = [
        {
            first: 'Jane',
            last: 'Doe'
        }, 
        {
            first: 'Tim',
            last: 'Taylor'
        },
        {
            first: 'Nancy',
            last: 'Swan'
        }];
        console.table(array);
    }
      
    if(e.target.textContent == "Start Timer")
        console.time('Timer Button');  

    if(e.target.textContent == "End Timer")
        console.timeEnd('Timer Button');  
});

//Step 3: Try-throw-catch-finally
//Step 4: Throw and Custom Errors
class ReadError extends Error {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
}

function handleBtnClick(){
    try
    {
        throw new ReadError("ReadError");
    }
    catch(error)
    {
        console.log(error);
    }
    finally
    {
        deep();
    }
}

function deep()
{
    function deeper()
    {
        function deepest()
        {
            console.trace();
        }
        deepest();
    }
    deeper();
}

errorBtns[13].addEventListener('click', handleBtnClick);

errorBtns[14].addEventListener('click', function handleBtnClick ()
{
    boom();
});

window.addEventListener('error', () =>
{
    console.log("Sadly an error happened my friend");
});

