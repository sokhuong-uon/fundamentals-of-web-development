/**
 * 
 * @param {string} oldStatus todo, in-progress, done
 * @param {Observable} todoTask 
 */
const todoTaskObserver = (oldStatus, todoTask) => { 
  console.group("todo task observer");
 console.log("todo task observer got notified"); 
 console.log(oldStatus, todoTask);
 console.groupEnd();
}

export { todoTaskObserver };