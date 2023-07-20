// a promise has 3 states

/*

* PENDING
* FULFILLED
*REJECTED
*/

/*   state:
 * value :
 * error
 *
 */

// let promise = new Promise((res, rej) => {
//   res(5); // either resolve with value or resolve with rpomise
// });

// promise.then((val) => {}).catch((val) => {});

const STATE = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

class MyPromise {
  constructor(cb) {
    this.state = STATE.PENDING;
    this.value = undefined;
    this.callbacks = [];

    try {
      cb(this._resolve, this._reject);
    } catch (e) {
      this._reject(e);
    }
  }

  updatResult(value, state) {
    // it it is a promise

    // a promise cannnot be resolved or resolved after it's settled(fulfilled or rejected)
    // a promise cannot change state
    if (this.state !== STATE.PENDING) {
      return;
    }
    if (value instanceof MyPromise) {
      /*
        * the reolved/rejected function was called with a promise value
        * so we need to wait unitl the new "value" promise is resolved/rejected
        * to set the state and value . So that is why we need to return the function or
        * else state and value would be set
        * How do we know whether a promise is resolved or rejected , so that we can resolve the orginal promise after 
        *  value promised reolved?
        * 
        * Simple ! Attach .then to the value promise
        *
        * Ok ! That is sorted , now we know when the value promise was resolved/rejected , but we should now settle the original 
        * promise as in set the state and it's  value
        * How can we do that?
        * 
        * Pass original promise _rseolve and _reject func to the  then callback of  value promise
        * 
  
        */
      return value.then(this._resolve, this._reject);
    }

    //

    this.value = value;
    this.state = state;

    //  call the next callback ie then catch , finallly?
    this.executeCallBacks();
  }

  executeCallBacks() {
    const cbs = this.callbacks;
  }

  _resolve(val) {
    // if  value is promise

    // else

    this.updatResult(val, STATE.FULFILLED);
  }

  _reject(val) {
    this.updatResult(val, STATE.REJECTED);
  }

  then(onResolved, onFail) {
    // has to return a promise  so that promise chaining can happem

    return new MyPromise((res, rej) => {});
  }

  catch(onFail) {}
}
