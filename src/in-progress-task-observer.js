/**
 * @param {string} oldStatus todo, in-progress, done
 * @param {Observable} todoTask 
 */
const inProgressTaskObserver = (oldStatus, todoTask) => { 
 console.group("in progress task observer");
 console.log("in progress task observer got notified"); 
 console.log(oldStatus, todoTask);
 console.groupEnd();
}

export { inProgressTaskObserver };