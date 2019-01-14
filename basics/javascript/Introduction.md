# History of the web

- 1960 - Packet switching research, NPL and ARPANET
- 1970 - satellite link US - Europe
- 1980 - Access to ARPANET expanded, IP4 was published, First ISPs emerged
- 1989 - WWW was proposed
- 1990 - First browser
- 1994 - CSS Html Stylesheets
- 1995 - Javascript
- 1999 - Internet on mobile
- 2000 - 414M users in the internet
- 2008 - Google Chrome
- 2017 - 3.9B users in the internet

# How the web works

## WWW
- information space
- documents / web resources are identified by URLs
- interlinked by hypertext links

## Ingredients for the web

- Document in the Web Server
- Documents with CSS and JS
- All resources will have a unique url name
- clients usually web browsers
- HTTP takes care of the communication from client to server

# Why you should learn about how it works

- HTML
    - CSS - to style the document
    - Javascript - to add functionality

# Where HTML came from?

- standard markup language
- scripting language
- 1990 - first specs of html - Tim Berners-Lee
- 1993 - first draft of html - IETF
- 1995 - HTML 2.0
- 1996 - W3C
- 1997 - HTML 3.2
- 1997 - HTML 4.0
- 1999 - HTML 4.01
- 2000 - ISO, IEC
- 2004 - WHATWG
- 2014 - HTML 5
- 2016 - HTML 5.1
- 2017 - HTML 5.2

# What is HTML

## Structure of HTML

```html
<!DOCTYPE html>
<html>
    <head>
        <!--meta information-->
    </head>
    <body>
        <!--content of the page-->
    </body>
</html>

```

# Working with HTML
- Text Editor
- IDE
- Write HTML with a Framework: PHP, ASP.NET, Node.js, Python

# CSS

## Where CSS came from
- is a style sheet language
- 1994 - CSS was proposed
- 1996 - CSS1
- 1998 - CSS2
- 2004 - CSS2.1 Candidate recommendation
- 2011 - CSS2.1
- 2011 - CSS3-selectors, CSS3-color and on and on

## What is CSS
- CSS Syntax Selectors
```css
div { // styles all the element
    color: blue;
}

.class1 { // styles all the class
    color: blue;
}

#para1 { // styles the id
    color: blue;
}

div p { // styles the paragraph element with a div parent
    text-align: center;
    color: red;
}
h1, h2 { // styles multiple elements
    color: red;
}

```
- CSS priority - this is the order of the priority
    - #morespecific - id selector is most important
    - .specific
    - element i.e p
- but if the css selector has an !important keyword like
```css
.specific {
    background-color: gray;
    border: none !important;
} // then other selector cannot override it
```
### Advanced CSS Syntax

```css
@media screen and (min-width: 480px) {
    body {
        background-color: lightgreen;
    }
}

#grad {
    background: linear-gradient(red, yellow);
}
```
- CSS depends also with the web browser
- you can use caniuse.com to check if a browser supports a certain css property

## Working with CSS
- IDE or Texteditor
- CSS Libraries - Bootstrap, Font-Awesome
- CSS Preprocessors - LESS

# Javascript

## Where it came from
- 1995 - first version of Javascript
- 1995 - first server-side Javascript implementation
- 1996 - Javascript submitted to ECMA international
- 1997 - ECMAScript1
- 1998 - ECMAScript2
- 1999 - ECMAScript3
- 2000 - work started for ECMAScript4
- 2004 - ECMAScript4 scrapped
- 2007 - Microsoft started ECMAScript3.1
- 2009 - ECMAScript5
- 2011 - ECMAScript5.1
- 2015 - ECMAScript 2015
- 2016 - ECMAScript 2016
- 2017 - ECMAScript 2017

## What is Javascript

- Dynamic Values
- Interacts with the Browser
- makes AJAX calls (Asynchronous Javascript and XML)
