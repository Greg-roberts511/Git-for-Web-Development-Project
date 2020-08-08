<!--1. fork this codepen so that you have a copy on your account -->
<!--2. Add HTML and CSS to make the codepen look like the example: https://codepen.io/BritHemming/full/jONmxOm  - note that you can change the colours but everything else must look the same -->
<!-- 3. include the link to this completed codepen at the top of today's file first-lastname.txt --> 
<!-- 4. when you are finished - answer the questions at the bottom of this file -->

<body>
  
<div class='container'>

  <header>

  <h1> Learning How to Code </h1>

    <div class="info">

        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aperiam earum mollitia enim pariatur atque asperiores, deserunt fuga iure distinctio! Amet iste facilis odio rerum maiores neque laboriosam non aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eius officia reprehenderit dicta molestiae, excepturi inventore aut officiis! Perspiciatis, molestias tempora et nesciunt amet sint blanditiis eos voluptatibus ut facilis!</p>


     </div>
    
  </header>

  <section class='fisrt_section'>

  <h2> I'm a title </h2>
   
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus minima porro, aspernatur esse iure quas vero totam ea cupiditate numquam accusamus enim, eius neque molestiae minus. Aliquam non repudiandae, sunt!</p>
  
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto illo expedita ducimus incidunt similique voluptatum, error minus tenetur accusamus modi perferendis libero inventore quo, tempora. Repellendus quam eligendi, aliquid nobis.</p>
     
   </section>

   <section class='second-section'>
    
   <h2>This is another section</h2>
    
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus, reiciendis consequatur inventore mollitia ipsa sed quibusdam! Aut nemo voluptatibus modi iste repudiandae ea beatae suscipit. Officia omnis laudantium quasi</p>
    
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ratione doloribus nam officia reiciendis eligendi architecto maxime quisquam unde non, illo libero iure aut ad consequuntur animi modi, recusandae voluptatum!</p> 
    
   </section>

   <section class='images'>

    <img src="https://unsplash.it/200/200">
    <img src="https://unsplash.it/200/200">
    <img src="https://unsplash.it/200/200"> 
    <img src="https://unsplash.it/200/200">

   </section>
  
</div>
  
</body>

<!-- Questions to Submit in today's file first-lastname.txt --> 
<!--
Copy the questions below into the first-lastname.txt file on your github repo - answer each question and then push your changes. 

    1. What is Semantic HTML?

 to describe tags with meaning 

    2. What is HTML used for? 

HTML is used to display data in a graphic form

    3. What is an attribute and where do we put it? 

Attribute = flag does inside of a tag

    4. What is the h1 tag used for? How many times should I use it on a page?

h1 tag makes text a headline, once.

    5. Name two tags that have required attributes

<a> <ul>

    6. What do we put in the head of our HTML document? 

<body>

    7. What is an id? 

 unique id for an HTML element

    8. What elements can I add an id to? 

div, secetion. most if not all

    9. How many times can I use the same id on a page? 

once.

    10. What is a class? 

id for multipule elements

    11. What elements can I add a class to? 

div, secetion all of them?

    12. How many times can I use the same class on a page?

 as much as needed

    13. How do I get my link to open in a new tab?

<a href="https:www.w3schools.cm" target="_blank">

    14. What is the alt attribute in the image tag used for? 

to descrrbe what the image is for screen readers

    15. How do I reference an id?

.'idhere'{ 
}

    16. What is the difference between a section and a div

<section> means that the content inside is grouped, <div> does not mean anything, can be any where

    17. What is CSS used for? 

styles the HTML into what ever the mind can imagine

    18. How to we select an element? Example - every h2 on the page

h2 {
 }

    19. What is the difference between a class and an id? - Give me an example of when I might use each one

id can be used to identify one element, class can be used to identify multipule

    20. How do we select classes in CSS?

.'class id' {
}

    21. How do we select a p element with a single class of “human””?

.human { 
}

    22. What is a parent child selector? When would this be useful? 

elements that are a direct child of the specified element. to save space

    23. How do you select all links within a div with the class of sidebar?

.div 

    24. What is a pseudo selector?

selects elements that are in a specific state sucxh as first child.

    25. What do we use the change the spacing between lines?

line-height

    26. What do we use to change the spacing between letters?

.{
letter-spacing: ''px;
}

    27. What do we use to to change everything to CAPITALS? lowercase? Capitalize?

.{
text-transform: uppercase; 
text-transform: lowercase;
text-transform: capitalize;
}

    28. How do I add a 1px border around my div that is dotted and black?

div { 
  border-style: dotted;
  border: 1px solid; 
}

    29. How do I select everything on the page? 

* {

}

    30. How do I write a comment in CSS?

/* like this */

    31. How do I find out what file I am in, when I am using the command line? 

$ pwd

    32. Using the command line - how do I see a list of files/folders in my current folder?

$ ls

    33. How do I remove a file via the command line? Why do I have to be careful with this? 

% rm 'filename.js' it will pomptly nuke the file from existance without giving you warning

    34. Why should I use version control? 


helps multipule devs work on and branch difrent versions of the same project


    35. How often should I commit to github?

  when ever you change vital code/ every time you change stuff.

    36. What is the command we would use to push our repo up to github? 

git push -u "branch-name"

    37. Walk me through Lambda's git flow. 

fork the github, add TL as collaberator, clone the forked repo in a set directory with a terminal, create your own branch name for the repo, work on project, push your changes to github repo, submit a pull requeest.

Stretch Questions

    1. What is the difference between an inline element and a block element?

blcok elements cause a line break, inline don't break the flow

    2. What happens when an element is positioned absolutely? 



    3. How do I make an element take up only the amount of space it needs 
but also have the ability to give it a width? 

.{
margin:0 auto;
width: ''px;
}

    4. Name 3 elements that are diplay block by default, 2 elements that are display inline by default and 1 element that is display inline-block by default

<span> <a> <script> are blcok, 


    5. In your own words, explain the box model. What is the "fix" for the box model, in other words, how do we make all elements respect the width we've given them? 




   --> 