import React, { Component } from 'react';
import $ from 'jquery';

class Workshop extends Component {
  constructor(props){
    super(props);
    this.state = {
      array: ['a','b','c','d'],
      array2: ['w','x','y','z'],
    };

    this.unshift = this.unshift.bind(this);
    this.shift = this.shift.bind(this);
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
    this.resetArray1 = this.resetArray1.bind(this);
    this.sliceArray = this.sliceArray.bind(this);
    this.resetArray2 = this.resetArray2.bind(this);

    this.hideEmailMsg = this.hideEmailMsg.bind(this);
    this.hidePasswordMsg = this.hidePasswordMsg.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }

  submitForm(e){
    e.preventDefault();
  }

  //onBlur validate password format
  hidePasswordMsg(e){
    let redBorder = document.createAttribute('style');
    redBorder.value = 'border: 1px red solid';
    let resetBorder = document.createAttribute('style');
    resetBorder.value = 'none';

    //The password must be at least 8 characters long, it must contains both upper and lower case letters, as well as number.
    let password = e.target.value;
    if(password.length >= 8 && password.toUpperCase() != password && password.toLowerCase() != password && /\d/.test(password)){
      e.target.setAttributeNode(resetBorder);
      e.target.nextElementSibling.innerHTML = '';
    }else{
      e.target.setAttributeNode(redBorder);
      e.target.nextElementSibling.innerHTML = 'Password must contain at least 1 uppercase letter and a number.';
    }
  }

  //onBlur
  hideEmailMsg(e){
    // Form validation - email address must contain @ char. Throws a warning message and red border if user input is invalid.
    let redBorder = document.createAttribute('style');
    redBorder.value = 'border: 1px red solid';
    let resetBorder = document.createAttribute('style');
    resetBorder.value = 'none';

    if(e.target.value.indexOf('@') > -1){
      this.setState({
        email_msg: 'email_msg_hide',
      });
      e.target.setAttributeNode(resetBorder);
      e.target.nextElementSibling.innerHTML = '';
    }else{
      e.target.setAttributeNode(redBorder);
      e.target.nextElementSibling.innerHTML = 'Please enter a valid email address.';
    }
  }
    // console.log(e.target.value);


  unshift(){
    this.state.array.unshift('unshift-newItem');
    this.setState({ });
    // console.log(newArray);
  }

  shift(){
    this.state.array.shift();
    this.setState({ });
  }

  pop(){
    this.state.array.pop();
    this.setState({ });
  }

  push(){
    this.state.array.push('push-newItem');
    this.setState({ });
  }

  resetArray1(){
    this.setState({
      array: ['a','b','c','d'],
    })
  }

  sliceArray(){
    let slicedArray = this.state.array2.slice(1,3);
    this.setState({
      array2: slicedArray,
    });
  }

  resetArray2(){
    this.setState({
      array2: ['w','x','y','z'],
    })
  }



  render() {
    // Generate an array in a form of String.
    let array1 = this.state.array;
    let printArray1 = '';
      //Remove opening bracket if the array is empty
    if(array1.length > 0){
      printArray1 = "[";
      for(let i = 0; i < array1.length; i++){
          if(i === array1.length - 1){
            printArray1 += "'" + array1[i] + "']";
          }else{
            printArray1 += "'" + array1[i] + "',";
          }
      };
    }
    // Generate array2
    let array2 = this.state.array2;
    let printArray2 = '';

    if(array2.length > 0){
      printArray2 = "[";
      for(let i = 0; i < array2.length; i++){
          if(i === array2.length - 1){
            printArray2 += "'" + array2[i] + "']";
          }else{
            printArray2 += "'" + array2[i] + "',";
          }
      };
    }



    return (
      <div className="main-content workshop">
        <div className="workshop-sidebar">
          <ul>

            <h4>General</h4>
            <li><a href='#http_protocol'>HTTP protocol</a></li>
            <li><a href='#cookies'>Cookies</a></li>
            <li><a href='#cache'>Cache</a></li>
            <li><a href='#status_code'>Status Code</a></li>
            <li><a href='#same_origin_policy'>Same origin policy</a></li>
            <li><a href='#form'>Form</a></li>
            <li><a href='#seo_friendly'>SEO friendly</a></li>
            <li><a href="#git">GIT</a></li>

            <h4>JavaScript</h4>
            <li><a href="#callback_function">Callback Function</a></li>
            <li><a href="#anonymous_function">Anonymous Function</a></li>
            <li><a href="#promise">Promise</a></li>
            <li><a href='#closure'>Closure</a></li>
            <li><a href="#prototype_chain" >Prototype Chain</a></li>
            <li><a href='#arrays'>Arrays</a></li>
            <li><a href='#primitives_vs_objects'>Primitives vs Objects</a></li>
            <li><a href='#undefined_not_defined_null'>Undefined, Not defined and Null</a></li>
            <li><a href='#this'>This</a></li>
            <li><a href='#anonymous_function'>Anonymous Function</a></li>
            <li><a href='#host_and_native_object'>Host and native object</a></li>
            <li><a href='#hoisting'>Hoisting</a></li>
            <li><a href='#asynchronous_js'>Asynchronous JavaScript</a></li>

            <h4>Miscellaneous</h4>
            <h4>Resource</h4>
          </ul>
        </div>
        <div className="workshop-content">
          <h1>General</h1>
          <section>
            <h2 id='http_protocol' className='anchor'>HTTP protocol</h2>
            <p>
              HTTP stands for Hypertext Transfer Protocol. A typical HTTP message contains a start line, headers and body.
            </p><br></br>
            <p>
              For a request HTTP message, the start line shall include method such as GET and POST; headers will define information such as host address, accept-language, accepted type of text etc. <br></br>

              For a response HTTP message, the start line shall indicate the version of the response(i.e: v2 of an API) as well as status code. The response header will have host address, accept-language, accepted type of text etc. Finally the response body will contain the file that has been requested(i.e: contain a HTML file to load a web page or a JSON data to fill a table etc).
            </p>
          </section>
          <section>
            <h2 id='cookies' className='anchor'>Cookies</h2>
            <p>
              Cookies are files thats saved locally by browser, it remembers certain action taken by the user(i.e: stores a language perenfernce, login details, browser history).
            </p><br></br>
            <p>
              There are different types of cookies;<br></br>
            A <strong>session cookie</strong> only last for the duration of user using the website. The browser normally deletes session cookie when it quits. This type of cookie expires if the user does not access the website for a period of time set by the server.
            </p><br></br>
            <p>
              A <strong>persistent cookie</strong> will outlast user sessions. The initial value set in that cookie would be sent back to the server every time the user visits the server, hence its also called tracking cookies.<br></br>
              When a website offers the user the option to ‘remember me’, this is where the persistent cookie comes in.
            </p><br></br>
            <p>
              <strong>Third-party cookies</strong> are cookies set by a different domain than the one shown in the address bar. A website could contain a embedded section provided by a third-party, if that third-party has a cookie stored on users computer, the section can display dynamic information tailored to the user based on users browser history and other preferences.<br></br>
              These cookies are used by advertising agencies; they track the type of sites you visit and make an educated guess to what products and services one maybe interested in.
            </p>
          </section>
          <section>
            <h2 id='cache' className='anchor'>Cache</h2>
            <p>
              A web cache is an information technology for the temporary storage such as HTML and images locally at the client. Instead of request data from the server again, previous loaded web pages can be retrieve from the cache to save loading time and bandwidth usage.
            </p>
          </section>
          <section>
            <h2 id='status_code' className='anchor'>Status Codes</h2>
            <p>
              HTTP response status codes are indications to the result of the HTTP request. The status code can be split into 5 groups:
            </p>
            <ul className="ul_bullet">
              <li>1xx Provides information while the connection is still in progress.</li>
              <li>2xx Indicates a successful connection was made.</li>
              <li>3xx Indicates redirection.</li>
              <li>4xx Client side error, for example the well known 404 indicates the requested resource does not exist. </li>
              <li>5xx Server side error, such as failed database connection or server being down. </li>
            </ul><br></br>
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">A list of HTTP response status codes from MDN</a>
          </section>
          <section>
            <h2 id='same_origin_policy' className='anchor'>Same origin policy</h2>
            <p>
              The Same Origin Policy is a security policy defined by the browser with the intention to protect data. The SOP ensures that certain information are only accessible from a particular client.
            </p><br></br>
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy">Docs on same origin policy - MDN</a><br></br>
            <p>

            </p><br></br>
            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS">Docs on CORS - MDN</a><br></br>

            <a target="_blank" href="http://restlet.com/company/blog/2015/12/15/understanding-and-using-cors/">Understanding and using CORS</a>
          </section>
          <section>
            <h2 id='form' className='anchor'>Form</h2>
            <p>An example of typical form: </p>
            <form className="form">
              <p>
                <label>Name: </label>
                <input type="text" name="user_name"></input>
              </p>
              <p>
                <label>Email:</label>
                <input type="text" name="user_email" onBlur={this.hideEmailMsg}></input>
                <span></span><br></br>
              </p>
              <p>
                <label>Password:</label>
                <input type="password" name="user_password" onBlur={this.hidePasswordMsg}></input>
                <span></span><br></br>
              </p>
              <label>Additional info:</label>
              <textarea name="addi_info"></textarea>
              <button className="submit_button" type="submit" onClick={this.submitForm}>Submit</button>
            </form>
          </section>
          <section>
            <h2 id='seo_friendly' className='anchor'>SEO friendly</h2>
            <p>
              The easiest way to ensure that the words and phrases you display to your visitors are visible to search engines is to place them in the HTML text on the page. Having the ‘alt’ attribute with all the images are also beneficial for search engines to pick up. For websites thats intended for sales it has to be highly SEO-friendly to grab potential customers.
            </p><br></br>
          <a target="_blank" href="https://moz.com/beginners-guide-to-seo/basics-of-search-engine-friendly-design-and-development">Article on make a website search engine friendly</a>
          </section>
          <section>
            <h2 id='git' className='anchor'>GIT</h2>
            <ul className="ul_bullet">
              <h4>Basic commands</h4>
              <li>
                <code>git init</code> -- To initialise the git repository. The hidden .git file will be created at this stage, thats where git stores everything such as branches and change/commit logs.
              </li>
              <li>
                <code>git add</code> -- A file in the git folder does not become tracked automatically, it has to be added manually using the command <code>git add (filename.txt)</code>. The target file will be added and ready for commit, this is called staging.  Note that the file has to be added again if its been changed afterwards, otherwise the changes made to a staged file will not be saved upon commit.
              </li>
              <li>
                <code>git add .</code> -- Use the '.' flag to stage all files in the git repository. Use <code>git add *.js</code> to stage only the JavaScript files.
              </li>
              <li>
                <code>git status</code> -- To check untracked and tracked files in the git repository. This command will also show the current branch.
              </li>
              <li>
                <code>git log</code> -- To check all commits in the git repository.
              </li>
              <li>
                <code>git commit -m ‘Here is the commit message’</code> -- Commit all staged files. The ‘-m’ flag allows the commit message to be typed directly in the command line. Multiple staged files can be committed all at once by adding the ‘-a’ flag.
              </li>
              <h4>Branch</h4>
              <p>
                Branch allows developers to work on a copy of the code without affect the master copy.  For example a branch could be created for a bug fix which one person is working on, while the rest of the team can carry on with other parts of the project without being affected by changes made in that branch.
              </p>
              <li>
                <code>git branch</code> -- View all branches in the git repository.
              </li>
              <li>
                <code>git branch MyBranch</code> -- To create a new branch.
              </li>
              <li>
                <code>git checkout MyBranch</code> -- Navigate to the 'MyBranch' branch.
              </li>
              <li>
                <code>git checkout master</code> -- Navigate back to the main/master branch.
              </li>
              <li>
                <code>git merge MyBranch</code> -- Use git status to make sure master is the current branch(use git checkout master to navigate to master branch if not already done so). Now execute git merge MyBranch will copy all commits from MyBranch to master branch.
              </li>
              <h4>Remote repository</h4>
              <li>
                <code>git clone url</code> -- To copy a git repository from an online source(i.e: GitHub).
              </li>
              <li>
                <code>git fetch origin</code> -- Fetch the remote git repository, but this will not merge the latest changes to the local version.
              </li>
              <li>
                <code>git pull origin</code> -- Fetch and merge the remote git repository.
              </li>
              <li>
                <code>git push origin master</code> -- Once changes are committed locally, use this command to commit the changes to the remote repository’s master branch. Authentication are normally required to proceed.
              </li>
            </ul>
          </section>
          <h1>JavaScript</h1>
          <section>
            <h2 id='callback_function' className='anchor'>Callback functions</h2>
            <p>
              A {'function'} called within another {'function'} for a certain purpose<br></br>
              Video explaining callback functions:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pTbSfCT42_M" frameBorder="0" allowFullScreen></iframe>
          </section>
          <section>
            <h2 id='promise' className='anchor'>Promise</h2>
            <p>
              Function that returns certain value based on the outcome produced. By chaining functions in a promise manner, the functions can be executed in order while confirming all outputs are as intended. <br></br>
              Video explaining promises in JavaScript:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/s6SH72uAn3Q" frameBorder="0" allowFullScreen />
            <p>Comprehensive  explaination of promise</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/104J7_HyaG4" frameBorder="0" allowFullScreen></iframe>
          </section>
          <section>
            <h2 id='closure' className='anchor'>Closure</h2>
            <p>
              Closure is functions with preserved data. The inner functions have full access to variables and properties defined from its parent functions.<br></br>
              Video explaining closure:
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/71AtaJpJHw0" frameBorder="0" allowFullScreen></iframe>
          </section>
          <section>
            <h2 id='prototype_chain' className='anchor'>Prototype Chain</h2>
            <p>
              Every JavaScript obect has a method called prototype, and by default its empty. One can define properties and methods within this prototype method, which the corresponding object have full access to them all.
            </p><br></br>
            <p>
              When a method is called, the JavaScript interpreter checks the object where the method is called from; if the method is not defined from that object or its prototype, then the interperter shall go to its parent object to search for the called method. This behaviour is so called prototype chain or prototype inheritance. <br></br>
              Since all JavaScript object are inherited from 'Object', the methods, properties and prototype of 'Object' are accessable from any object(i.e: any object can call the 'toStirng' method which is defined in 'Object').
            </p>
          </section>
          <section className='arrays'>
            <h2 id='arrays' className='anchor'>Arrays</h2>
            <div className="flexbox flex-center">
              <button className="buttons" onClick={this.unshift}>Unshift</button>
              <button className="buttons" onClick={this.pop}>Pop</button>
              <button className="buttons" onClick={this.shift}>Shift</button>
              <button className="buttons" onClick={this.push}>Push</button>
              <button className="buttons" onClick={this.resetArray1}>Reset Array</button>
              <code>{printArray1}</code>
              <button className="buttons" onClick={this.sliceArray}>Slice array(1,3)</button>
              <button className="buttons" onClick={this.resetArray2}>Reset Array</button>
              <code>{printArray2}</code>
            </div>
          </section>
          <section>
            <h2 id='primitives_vs_objects' className='anchor'>Primitives vs Objects</h2>
            <p>
              Primitives are simple data types such as string, number, boolean, null and undefined.
              object are functions such as arrays, Date() values, etc.<br></br>

              when a primitive gets passed to a {'function'} as an argument, thats passed by value (a copy of the value); whatever happens in that {'function'} will not change the original primitive value.<br></br>

              However, if an object is passed into a {'function'} as an argument, it actually takes a reference of that very object; hence changes made to that object in the {'function'} shall persist after the {'function'} is executed. This is sometimes referred to as side effect.
            </p>
          </section>
          <section>
            <h2 id='undefined_not_defined_null' className='anchor'>Undefined, Not defined and Null</h2>
            <p>
              In JavaScript, undefined means a variable has been declared but has not yet been assigned a value.  (i.e: var x;) However, if a variable has not been declared, it shall return ‘not defined’ if called.
              <br></br>
              Null is an assignment value. It can be assigned to a variable as a representation of no value. The type of null is ‘object’
            </p>
          </section>
          <section>
            <h2 id='this' className='anchor'>This</h2>
            <p>
              The 'this' keyword is most commonly used as a reference to its current context.
            </p>
            <p>For example;</p>
              <ul className="ul_bullet">
                <li>In a global context it would refer to the window object in browser environment</li>
                <li>Inside of a {'function'}, 'this' would refer to its immediate parent. If the {'function'} is declared in the global scope, then 'this' would again refer to the window object.</li>
                <li>In an event handler, 'this' refers to the DOM element that generated the event.</li>
                <li>'this' is used in {'constructors'} extensively. When creating new objects from a {'constructor'}, 'this' will be refered to that object being created.</li>
              </ul><br></br>
              <a target="_blank" href="http://www.digital-web.com/articles/scope_in_javascript/">Scope in JavaScript</a>
          </section>
          <section>
            <h2 id='anonymous_function' className='anchor'>Anonymous Function</h2>
            <p>
              Anonymous functions are commonly used to create private scope, which only has access to its parent and its own variables and functions. Its also used as self-invoking functions and callback functions. <br></br>
              Since ES6, "<code>{'(arguments) => { function body };'}</code>" is shorthand to declare a anonymous {'function'}.
            </p>
          </section>
          <section>
            <h2 id='host_and_native_object' className='anchor'>Host and native JavaScript object. </h2>
            <p>
              JavaScript has native object such as string, array, date, Math etc. Those object are available regardless the environment.<br></br>
              Host objects vary with the JavaScript running environment. While on browser, typical JavaScript host object includes window, documents, xmlRequest etc. However, when JavaScript is running in a NodeJS environment, those objects will no longer be available.
            </p>
          </section>
          <section>
            <h2 id='hoisting' className='anchor'>Hoisting</h2>
            <p>
              Hoisting is JavaScript's default behaviour of moving all declarations to the top of the current scope (to the top of the current script or the current {'function'}). In other words a variable can be used before its even been declared. Note that only variable declaration with '<code>var,let,const</code>' will be hoisted to the top of the scope. variable assignments will not be hoist to the top of the scope!
            </p>
          </section>
          <section>
            <h2 id='asynchronous_js' className='anchor'>Asynchronous JavaScript</h2>
            <p>
              Asynchronous javascript doesn't block the construction of the HTML DOM elements, downloading the script will not pause the static HTML elements from loading. However,  errors will occur if the HTML elements are not fully loaded before executing the javascript; hence the reason to add scripts right before the closing body tag. <br></br>
              Add defer to the script tag creates a Deferred JavaScript. These scripts will not block the HTML elements and will wait till the HTML elements to be fully loaded before executing.
            </p><br></br>
          <a target="_blank" href="https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2015/july/what-are-the-benefits-and-drawbacks-of-loading-javascript-asynchronously/">Blog that discuss asynchronous JavaScript</a>
          </section>
          <h1>Miscellaneous</h1>
          <section className="misc">
            <ul className="ul_bullet">
            <li>
              When using typeof x = "object" for type validation, note that null is considered as an object, therefore the validation will return true if 'x' is null.
            </li>
            <li>
              <code>var a = b = 3</code> is equivalent to <code>b = 3, var a = b</code>. Note that b is accessable globally since its not decleared with a var/let.
            </li>
            <li>
              Wrap entire content in a {'function'} block is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps <strong>avoid potential name clashes between different JavaScript modules and libraries.</strong>
            </li>
            <li>
              Use 'use strict' to avoid errors been ignored or failed sliently without error messages or throw exceptions. This is not compulsory but always a good practice.
            </li>
            <li>
              Use the built in array {"function"} '<code>{'forEach'}</code>' to loop through objects in an array.
            </li>
            <li>
              A semicolon will be automatically inserted at the end of a line if its been omitted<br></br>
              <code>{"return"}</code><br></br>
              <code>{"{ key1: 'value'}"}</code><br></br>
              The above code will not return any value.
            </li>
            <li>
              NaN property represents a value thats not a number, but its type is 'Number'. <br></br>
              NaN compared to anything returns false, even to itself:<code>{"   console.log(NaN === NaN);  // logs false"}</code><br></br>
              Since ES6, <code>{"Number.isNaN()"}</code> becomes a reliable way to check 'NaN'.
            </li>
            <li>
              Numbers in JavaScript are all treated with floating point precision, hence <code>{"0.1 + 0.2 == 0.3"}</code> may not return 'true', because the result would be <code>{"0.30000000000000004"}</code>
            </li>
            <li>
              A closure is a {'function'}, along with all variables or functions that were in-scope at the time that the closure was created. In JavaScript, a closure is implemented as an “inner {'function'}”; i.e., a {'function'} defined within the body of another {'function'}.<strong>An important feature of closures is that an inner {'function'} still has access to the outer {'function'}’s variables.</strong>
            </li>
            <li>
              To constantly excute a {'function '} with set time interval:  <br></br>   <code>{"setInterval(function(){ }, 1000"}</code>
            </li>
            </ul>
          </section>
          <h1>Resource</h1>
          <section className="resource">
            <ul>
              <li><a target="_blank" href="https://developer.mozilla.org/en-US/">MDN</a></li>
              <li><a target="_blank" href ="http://jquery.com/">jQuery</a></li>
              <li><a target="_blank" href="http://javascript.info/tutorial/events-and-timing-depth">Events and timing</a></li>
              <li><a target="_blank" href="http://thoughtsonscripts.blogspot.co.uk/2012/01/javascript-closures.html">JavaScript closures</a></li>
              <li><a target="_blank" href="http://thoughtsonscripts.blogspot.co.uk/2012/01/javascript-anonymous-functions.html">JavaScript anonymous functions</a></li>
              <li><a target="_blank" href="https://facebook.github.io/react/docs/hello-world.html">ReactJS</a></li>
              <li><a target="_blank" href="https://developers.google.com/youtube/v3/docs/videos/list#examples">Youtube API Docs</a></li>
              <li><a target="_blank" href="http://www.w3schools.com/html/html_form_elements.asp">HTML references (from w3school.com)</a></li>
              <li><a target="_blank" href="http://caniuse.com/">Check browser support on caniuse.com</a></li>
              <li><a target="_blank" href="https://docs.webplatform.org/wiki/css">CSS references from webPlatform.org</a></li>
              <li><a target="_blank" href="http://codepen.io/pens/">Codepen</a></li>
              <li><a target="_blank" href="https://jsfiddle.net/">Fiddle</a></li>
              <li><a target="_blank" href="http://www.awwwards.com/">Web design ideas</a></li>
              <li><a target="_blank" href="https://babeljs.io/">Babel</a></li>
              <li><a target="_blank" href="https://unicode-table.com/en/#control-character">Unicode</a></li>
              <li><a target="_blank" href="https://kangax.github.io/compat-table/es6/">Compatibility table</a></li>
              <li><a target="_blank" href="http://www.bbc.co.uk/news/10628494">BBC News feeds</a></li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Workshop;
