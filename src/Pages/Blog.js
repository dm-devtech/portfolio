import React from "react";

const Blog = () => (
  <div id="example-fade-text">
    <div>
      <h1 className="display-1">Blog</h1>
      <h1 className="display-4">
        JavaScript Tips <br />
      </h1>
      <br />
      <p className="lead-sm">
        This is my first blog post with a small JavaScript glossary. Below are
        some aspects of JavaScript that are key to understanding JavaScript.
        <dl className="row">
          <dt className="col-sm-3">Promise</dt>
          <dd className="col-sm-9">
            These utilise callback functions to return a response when an action
            is complete. The most obvious example being fetch() and returning a
            response from an API. The promise will return the data from the API
            asynchronously so that your program does not break as it runs
            through your code synchronously (i.e. line by line).
          </dd>
          <dt className="col-sm-3">Asynchronous JavaScript</dt>
          <dd className="col-sm-9">
            Within the context of JavaScript which runs code line by line or
            synchronously, there are times when external data is required.
            JavaScript does this by placing asynchronous requests in a separate
            queue to the Call Stack, waiting to be placed in the Event Loop when
            your program code has finished being read. If an API fetch call is
            within your program the data will be returned once all the actions
            in your program have popped off the Call Stack and then items from
            the Event Loop are placed into the Call Stack to be run.
          </dd>
          <dt className="col-sm-3">Closure</dt>
          <dd className="col-sm-9">
            Is created whenever a function is declared. Effectively determining
            the scope chain which is such that the scope of an outer function is
            accessible by an inner function.
          </dd>
          <dt className="col-sm-3">Callback</dt>
          <dd className="col-sm-9">
            Is a function that is passed into another function and is invoked at
            a certain time to complete a task. NB - asynchronous callbacks are
            passed as arguments and are executed immediately.
          </dd>
          <dt className="col-sm-3">Higher Order Function</dt>
          <dd className="col-sm-9">
            A function that returns a function or takes a function as an
            argument. ES6 higher order functions or example map, reduce, filter.
          </dd>
          <dt className="col-sm-3">Pure Function</dt>
          <dd className="col-sm-9">
            Given the same input a pure function always returns the same result
            and there are no side effects (as in data is not mutated as a
            result).
          </dd>
          <dt className="col-sm-3">Hoisting</dt>
          <dd className="col-sm-9">
            The allocation of variables and functions in memory. Declarations
            are moved to the top of the code which allows variables to be
            allocated before they are defined. This does not relate to the
            variable's data only whether it is defined or not.
          </dd>
          <dt className="col-sm-3">Function Declaration</dt>
          <dd className="col-sm-9">{`function(arg) { code }`}</dd>
          <dt className="col-sm-3">Function Expression</dt>
          <dd className="col-sm-9">{`const something = function(arg) { code }`}</dd>
          <dt className="col-sm-3">Arrow Function</dt>
          <dd className="col-sm-9">{`const something = (arg) => { code }`}</dd>
        </dl>
        <h1 className="display-4">Let vs Const vs Var</h1>
        <dl className="row">
          <dt className="col-sm-3">Var</dt>
          <dd className="col-sm-9">
            Globally/function scoped not block scoped, can be
            re-declared/reassigned.
          </dd>
          <dt className="col-sm-3">Let</dt>
          <dd className="col-sm-9">
            Function/Block scoped, can be reassigned.
          </dd>
          <dt className="col-sm-3">Const</dt>
          <dd className="col-sm-9">
            Function/block scoped, cannot be redeclared or reassigned.
          </dd>
        </dl>
      </p>
    </div>
    <p className="h6">David Millen 2022</p>
  </div>
);

export default Blog;
