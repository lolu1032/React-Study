export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    for (let update of queue) {
        if (typeof update === 'function') {
          finalState = update(queue)
        } else {
          // TODO: replace the stat
          finalState(queue)
        }
      }
    return finalState;
  }
  