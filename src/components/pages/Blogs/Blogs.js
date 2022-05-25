import React from "react";
import codeExmaple from "../../../assets/search.PNG";

const Blogs = () => {
  return (
    <div className="flex flex-col gap-4 py-8 bg-pink-50">
      <div className="card p-6 m-6 rounded-xl shadow-xl bg-base-100">
        <h2 className="text-4xl text-center font-bold text-neutral my-4">How will you improve the performance of a React Application?</h2>
        <p className="text-lg">
          1. Keeping component state local where necessary We've to ensure
          re-rendering a component only happens when necessary, we can extract
          the part of code that cares about the component state, making it local
          to that part of the code.
          <br />
          2. Code-splitting in React using dynamic import() By default, when a
          React application renders in a browser, a “bundle” file containing the
          entire application code loads and serves to users at once. As an
          application grows, the file sizes increase. At a certain point, this
          continuous file increase slows the initial page load, reducing the
          user's satisfaction.With code-splitting, React allows us to split a
          large bundle file into multiple chunks using dynamic import() followed
          by lazy loading these chunks on-demand using the React.lazy. This
          strategy greatly improves the page performance of a complex React
          application.
          <br />
          3. Windowing or list virtualization in React applications Imagine we
          have an application where we render several rows of items on a page.
          Whether or not any of the items display in the browser viewport, they
          render in the DOM and may affect the performance of our application.
          With the concept of windowing, we can render to the DOM only the
          visible portion to the user. Then, when scrolling, the remaining list
          items render while replacing the items that exit the viewport. This
          technique can greatly improve the rendering performance of a large
          list.
        </p>
      </div>
      <div className="card p-6 m-6 rounded-xl shadow-xl bg-base-100">
        <h2 className="text-4xl text-center font-bold text-neutral my-4">
          What are the different ways to manage a state in a React application?
        </h2>
        <p className="text-lg">
          1. Local state For example, local state would be needed to show or
          hide a modal component or to track values for a form component, such
          as form submission, when the form is disabled and the values of a
          form's inputs.
          <br />
          2. Global state Global state is necessary when we want to get and
          update data anywhere in our app, or in multiple components at least. A
          common example of global state is authenticated user state. If a user
          is logged into our app, it is necessary to get and change their data
          throughout our application.
          <br />
          3. Server state Data that comes from an external server that must be
          integrated with our UI state. There are several pieces of state that
          must be managed every time you fetch or update data from an external
          server, including loading and error state. Fortunately there are tools
          such as SWR and React Query that make managing server state much
          easier.
          <br />
          4. URL state Data that exists on our URLs, including the pathname and
          query parameters. URL state is often missing as a category of state,
          but it is an important one. In many cases, a lot of major parts of our
          application rely upon accessing URL state. Try to imagine building a
          blog without being able to fetch a post based off of its slug or id
          that is located in the URL!
        </p>
      </div>
      <div className="card p-6 m-6 rounded-xl shadow-xl bg-base-100">
        <h2 className="text-4xl text-center font-bold text-neutral my-4">How does prototypical inheritance work?</h2>
        <p className="text-lg">
          JavaScript is a prototype-based, Object Oriented programming language.
          After the ES6 updates, JavaScript allowed for “prototypal
          inheritance”, meaning that objects and methods can be shared,
          extended, and copied. Simply put, prototypical inheritance refers to
          the ability to access object properties from another object. We use a
          JavaScript prototype to add new properties and methods to an existing
          object constructor. We can then essentially tell our JS code to
          inherit properties from a prototype. Prototypical inheritance allows
          us to reuse the properties or methods from one JavaScript object to
          another through a reference pointer function. All JavaScript objects
          inherit properties and methods from a prototype: Date objects inherit
          from Date.prototype. Array objects inherit from Array.prototype.
          Player objects inherit from Player.prototype. The Object.prototype is
          on top of the prototype inheritance chain. Date objects, Array
          objects, and Player objects all inherit from Object.prototype.
        </p>
      </div>
      <div className="card p-6 m-6 rounded-xl shadow-xl bg-base-100">
        <h2 className="text-4xl text-center font-bold text-neutral my-4">What is a unit test? Why should write unit tests?</h2>
        <p className="text-lg">
          Definaiton of unit testing: Unit testing involves testing individual
          components of the software program or application. The main purpose
          behind this is to check that all the individual parts are working as
          intended. A unit is known as the smallest possible component of
          software that can be tested. Generally, it has a few inputs and a
          single output. 
          <br /> Benefits of unit test: 1. When you add more features to
          any software, you might need to make changes to the old design and
          code, and this can be expensive as well as risky. If you use the unit
          testing methodology, then this can save a lot of time and can make the
          whole process much faster and easier.
          <br />
          2. Unit testing significantly improves code quality. It helps
          developers to identify the smallest defects that might be present in
          the units before they go for integration testing.
          <br />
          3. Unit testing helps identify all kinds of issues with the software
          at a very early stage. Software developers can then work on those
          issues first before progressing any further.
        </p>
      </div>
      <div className="card p-6 m-6 rounded-xl shadow-xl bg-base-100">
        <h2 className="text-4xl text-center font-bold text-neutral my-4">
          You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h2>
        <p className="text-lg">
          we have to use find() method to find specific product from an array of
          object. suppose, we have an array(products) of object. Each
          object(product) has name, price, description, etc. if we run find()
          method with user search key in products array it will return matched
          product as an object. then we will destructure the object and send to
          the UI. 
          <br />
           code example given below:
          <img src={codeExmaple} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Blogs;