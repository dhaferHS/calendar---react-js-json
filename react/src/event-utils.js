let eventGuid = 0

const jsonFile = require('./jsonFile.json')

export const INITIAL_EVENTS = jsonFile
  .filter(event => event.status === 'Accepted')
  .map(event => ({
    title: `${event._typeLeave}, idEm :${event.idEmployee}`,
    start: new Date(event.BeginingDate.$date),
    end: new Date(event.EndingDate.$date),
    status: event.status,
    color: 'green'
  })).concat(
    jsonFile
      .filter(event => event.status === 'Failed')
      .map(event => ({
        title: `${event._typeLeave}, idEm :${event.idEmployee}`,
        start: new Date(event.BeginingDate.$date),
        end: new Date(event.EndingDate.$date),
        status: event.status,
        color: 'silver'
      }))
  ).concat(
    jsonFile
      .filter(event => event.status === 'Pending')
      .map(event => ({
        title: `${event._typeLeave}, idEm :${event.idEmployee}`,
        start: new Date(event.BeginingDate.$date),
        end: new Date(event.EndingDate.$date),
        status: event.status,
        color: 'Orange'
      }))
  ).concat(
    jsonFile
      .filter(event => event.status === 'Unjustified')
      .map(event => ({
        title: `${event._typeLeave}, idEm :${event.idEmployee}`,
        start: new Date(event.BeginingDate.$date),
        end: new Date(event.EndingDate.$date),
        status: event.status,
        color: 'DeepSkyBlue'
      }))
  ).concat(
    jsonFile
      .filter(event => event.status === 'Rejected')
      .map(event => ({
        title: `${event._typeLeave}, idEm :${event.idEmployee}`,
        start: new Date(event.BeginingDate.$date),
        end: new Date(event.EndingDate.$date),
        status: event.status,
        color: 'Red'
      }))
  ).concat(
    jsonFile
      .filter(event => event.status === 'Validating')
      .map(event => ({
        title: `${event._typeLeave}, idEm :${event.idEmployee}`,
        start: new Date(event.BeginingDate.$date),
        end: new Date(event.EndingDate.$date),
        status: event.status,
        color: 'Turquoise'
      }))
  );



// export function createEventId() {
//   return String(eventGuid++)
// }

// export function handleDataSelect(selectedData) {
//   const selectedEvents = INITIAL_EVENTS.filter(event => 
//     event.start >= selectedData.start && event.end <= selectedData.end && event.status === 'Accepted'
//   )
  // use selectedEvents as needed
// }
