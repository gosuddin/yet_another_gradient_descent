# Yet Another Explanation for Gradient Descent
An explorable explanation for Gradient Descent

This work is an assignment which is a part of the coursework INFX 574 - Interactive Information Visualization completed by myself. The assignment is an attempt to prepare an explorable explanation that uncovers some caveats around the algorithm of gradient descent. 

### Background

The role of Data Scientist is the hottest job in market. It has been since the term ‘Data Science’ by Jeff Humberbach and DJ Patil. According to Bloomberg, job postings for Data Scientist rose by 75 percent from January 2015 to January 2018. The boom for this title dates back to 2012, where Harvard Business Review article, labelled Data Scientist as “the sexiest job in the 21st century.” If that does not catch your eyes, Glassdoor.com, lists the national average salary of Data Scientists in the USA, is $121k. Also, people with higher degree such as PhD. in Data Science, asks for as much as $300k, reports Bloomberg. 

Career seekers have jumped on this bandwagon. Students and professionals from almost of fields of education are seeking entry into the field of Data Science. Data Science have also found its application in everywhere, especially in data-driven field of retail, e-commerce, travel and tourism, social sciences, physics and many others.

As career seekers wants to get a head start, there has been a boom in availability of formal education and Massively Open Online Courses (MOOCs). Class Central is a free online course / MOOC aggregator. According to their reports, of 110,000 searched keywords on python and machine learning were the top 2 most searched keywords. As per their Annual report of 2017 for MOOCs, there has been an 2.5% increase in MOOCs offered in the field of Computer Science, Programming and Data Science. 

So if the supply of knowledge is trying to the meet the demand of the Data Scientist professionals, what’s going wrong? According to me, this supply demand have become a business in its true sense. There has been a lot of monetization involved when it comes to taking up a MOOC. For example, there are several tiers of an MOOC, where you can only audit i.e. look at the videos and practice problems and assignments on your own, without validating your answers. Also, students are void of gaining any credits in terms of certification as  a part of the successful completion of the course. In order to gain this, the average cost is around 50$. Moreover, these courses tends to provide only an abstract introduction to the concepts. For example, the course of Machine Learning by Andrew Ng on coursera and the one at Stanford University are in different depths completely. 

### Motivation

My personal experience suggests that half knowledge is dangerous. Interviewing for a role of Data Scientist at all levels of organization from startups to leading tech firms can be daunting when they ask about these topics in depth. Some popular questions are:
What is a convex function? Convex optimization?
Why do we use only first-order derivative?
If it is about finding minimum value why not just solve for it?
Methods exists for second-order derivatives, what wrong with that?
If there is an analytical solution, why not use it?

There are several explanation to gradient descent widely available but are rifed with shortcomings. Not all explanations cover every aspects of the algorithm. Majority of them are in context of linear regression. This constraints reader to think of this as a solver for linear regression rather than a generic convex optimizer.

In order to provide more clarity around the concepts of convex functions and to generalize the concept of gradient, I take this opportunity to attempt and explain them.

### Related Work:

As mentioned earlier, many Machine Learning enthusiasts have tried to explain gradient descent algorithm. Misa Ogura, Full Stack Software Engineer and Cancer Cell Biologist, presents one such explanation in the Hackernoon blog. This article jumps directly to linear regression and flows from then on. The course by Andrew Ng on Coursera, assumes that the user know about convex function and dives straight into solving it with first order method. It fails to explain why first order only as well. Two examples from the visualization domains explains graphically in context of linear regression.

### Storyboard:

I had to go through several rounds of brainstorming to understand, formulate and find a better to explain these concepts. Mostly, the questions where I tinkered revolved around what level of details should I be focusing on. What audience should I be targeting, how well can I generalize gradient descent with a motivating example. After several iterations of this and prototyping and wireframing, I decided on simple graphs to exhibit properties of the convex functions and towards the end try to move the user away from the lone example of linear regression. 

The final layout takes the shape of an overflowing scrollable web page with cards like structure adapted from Google Material Design. All the visualizations are build with Google charts. Printing latex and calculating the derivative given an equation proved to be the most challenging aspect. Here is an image of the final wireframe:




### Results

After the successful implementation of the explorable explanation, the user will have a better understanding of the convex function and can recognize the function better graphically. These graphs are shown below:


Each graph consists of several functions mentioned in the legends. Also, graphs are associated with tooltips as well. 

In order to motivate the readers to look at more functions and try out to inspect the properties graphically, I have provided an input area along with suggesting some functions automatically.

The graphs for custom functions are populated accordingly. This leaves the code vulnerable to complex functions where it becomes difficult to compute and add constraints. For example, log functions would fail to evaluated by JavaScript on the front end. As a future scope, this can be accounted for and can be shown as a broken continuity function, broken where it is not differentiable.

At the end, a motivating example from physics domain illustrates the use of the concept of gradient to solve the problem of finding the maximum horizontal range by varying the projection angle of the projectile.


Since this is the maximization problem, from where we choose the initial points it keeps on going in an upward direction.

### Major Tasks:

The explorable explanation comprised of a backend to frontend application.

Backend: I choose to develop the backend in Flask - python. I have created several APIs that will help bind the data to be derived and presented on the frontend. To solve and calculate derivative, Sympy was used. Using Sympy, I converted the equations in to latex format.
Frontend: Charts were built using Google Charts. They layout was prepared using Google Material design involving cards with bootstrap. The latex was rendered using MathJS and dynamically rendered using MathJAX. A majority of efforts have been invested in experimenting with these libraries and understanding their working.

### Future Scope:

Complex functions can be handled with some more exploration of Sympy. 

Also another motivating examples such as minimum runway for an aircraft or escape velocity of an object on bodies with different gravitational forces can be used to demonstrate the concept of gradient.
