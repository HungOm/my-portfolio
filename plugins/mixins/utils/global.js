const randomNumberInRange =  (min = 0, max = 100, rounded = true) => {
    const randomNumber = Math.random() * (max - min + 1) + min;
    return rounded ? Math.floor(randomNumber) : randomNumber;
  };


  export default ({ app }, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    inject('randomNumberInRange', randomNumberInRange)
  }