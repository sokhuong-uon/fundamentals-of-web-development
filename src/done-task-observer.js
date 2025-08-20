/**
 * @param {string} oldStatus todo, in-progress, done
 * @param {Observable} todoTask 
 */
const doneTaskObserver = (oldStatus, todoTask) => { 
 console.group("done task observer");
 console.log("done task observer got notified"); 
 console.log(oldStatus, todoTask);
 console.groupEnd();
}

export { doneTaskObserver };