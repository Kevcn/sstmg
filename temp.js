// 'use strict'

var data = [];

$(document).ready(function() {
//
//   var deep_thought = {
//   the_answer: 42,
//   ask_question: function () {
//    return this.the_answer;
//   }
//  };
//
//  var the_meaning = deep_thought.ask_question();
//
//  console.log(the_meaning);
//
//
//  function BigComputer(answer) {
//   this.the_answer = answer;
//   this.ask_question = function () {
//    return this.the_answer;
//   }
//  }
//
//  var deep_thought = new BigComputer(42);
//  var the_meaning = deep_thought.ask_question();
//
//  console.log(the_meaning);
//
//  function test_this() {
//  return this;
// }
// console.log(test_this());


  // for (var j = 0; j < data.length; j++){
  //
  //   console.log(data[j]);
  //
  // }

  // let entry = document.querySelector(.wop);
  // let button = document.createElement('button');

  // var prizes = ['prize1','prize2','prize3'];
  // for (let btnNum = 0; btnNum < prizes.length; btnNum++){
  //   (function(i){
  //     document.querySelector('#btn-' + i).onclick = function(){
  //     // console.log("show?");
  //     console.log(prizes[i]);
  //     }
  //   }(btnNum))
  // }


  // var stack1 = ['item1','item2','item3'];
  //
  // function addItem(item){
  //   stack1.push(item);
  // }
  //
  // function removeItem(){
  //   stack1.shift();
  // }
  //
  // console.log(stack1);
  // addItem('newItem');
  // console.log(stack1);
  // removeItem();
  // console.log(stack1);



  // $.ajax({
  //   type: 'GET',
  //   // url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.bbci.co.uk%2Fnews%2Frss.xml',
  //   // url: 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fopen.live.bbc.co.uk%2Fweather%2Ffeeds%2Fen%2F2643123%2F3dayforecast.rss',
  //   url: 'http://api.flickr.com/services/feeds/photos_public.gne?id=150866114@N02&format=json&jsoncallback=?',
  //   id: '150866114@N02',
  //   dataType: "json",
  //   success: function(response){

      // let info = response.items[0].title;

      // console.log(response);

    },
  })

  // $(".here").append(data);

});

// ************************************************************************//
// ************************************************************************//
// ************************************************************************//
// ************************************************************************//
// ************************************************************************//

    // var myObject = {
    //     foo: "bar",
    //     func: function() {
    //         var self = this;
    //         console.log("outer func:  this.foo = " + this.foo);
    //         console.log("outer func:  self.foo = " + self.foo);
    //         (function() {
    //             console.log("inner func:  this.foo = " + this.foo);
    //             console.log("inner func:  self.foo = " + self.foo);
    //         }());
    //     }
    // };
    // myObject.func();

// ************************************************************************//


      // function sum(x) {
      //   if(arguments.length == 2){
      //     return arguments[0] + arguments[1];
      //   }else{
      //     return function(y){
      //       console.log('wop');
      //       return x+y;
      //     }
      //   }
      //   }


          // for (var i = 0; i < 5; i++) {
          // 	(function(x) {
          //     	setTimeout(function() {
          //          console.log(x); }
          //       ,x * 1000 );
          //     }(5))
          // }


            //       var a={},
            //     b={key:'b'},
            //     c={key:'c'};
            //
            // a[b]=123;
            // a[c]=456;
            //
            // console.log(a[b]);

// x = [1,2,3,4];
// var arr1 = "john".split('');
        //
        // var arr1 = "john".split('');
        // var arr2 = arr1.reverse();
        // var arr3 = "jones".split('');
        // var a4 = arr2.concat(arr3);
        // console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
        // console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// };

      //
      // var hero = {
      //     _name: 'John Doe',
      //     getSecretIdentity: function (){
      //         return this._name;
      //     }
      // };
      //
      // var stoleSecretIdentity = hero.getSecretIdentity;
      //
      // console.log(stoleSecretIdentity);
      // // console.log(hero.getSecretIdentity());


      // function duplicate(x){
      //   console.log(arguments[0].concat(arguments[0]));
      // };
      //
      // duplicate([1,2,3,4,5]);


  //     var foo = {
  //   bar: function() { return this.baz; },
  //   baz: 1
  // };
  // (function(x){
  //   console.log(typeof x);
  // })(foo.bar);





  //   function fibonacci(n) {
  //    if (n < 2)
  //        return n;
  //
  //    return fibonacci(n - 1) + fibonacci(n - 2);
  // }
  //
  // console.log(fibonacci(6)); //8


//   for (let i = 1; i <= 10; i++) {
//     (function(v){
//
//       console.log('Div' + v + " is kicked");
//   })(i);
// }

  // (function wop(i){
  //   console.log("show this?" + typeof arguments[0]);
  // })('s');



  // function HelloWorldClosure(){
  //     var counter = 0;
  //
  //     var hello = function(){
  //         counter += 1;
  //         alert( "Hello World " + counter);
  //     }
  //
  //     return hello;
  // }
  //
  // var hello1 = HelloWorldClosure();
  // var hello2 = HelloWorldClosure();


          //   var counter = 0;
          //
          //  var incrementPerSec = function () {
          //      console.log(counter);
          //      counter += 1;
          //  };
          //
          // var ticky = () => {
          //      console.log(counter);
          //      counter += 1;
          //  };
          //
          //  setInterval(ticky, 1000);

        // let insert = document.querySelector('.wop');
        //
        // let button = document.createElement('button');
        // button.textContent = 'Test'
        // button.addEventListener('mouseenter', () => {
        //   console.log("This button has been clicked!");
        // })
        // insert.appendChild(button);
        //
        // document.write("dadadadada")

      // function isInteger(x) { return (x^0) === x; }
      //
      //         for(let i = 1; i <= 100; i++){
      //           // if ((i/3) === parseInt(i/3, 10)){console.log('fizz ' + i)};
      //
      //           if (isInteger(i/3)) {
      //             console.log('fizz ' + i);
      //           }
          // if ((i/5) === parseInt(i/5, 10)){console.log('buzz ' + i)};
          // if ((i/3) === parseInt(i/3, 10) && (i/5) === parseInt(i/5, 10)){console.log('fizzbuzz ' + i)};
