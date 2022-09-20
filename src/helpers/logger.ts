export const logger = (event: any): any => {
  if (!event) return null;
  const type = event.type ? event.type : 'Info';
  const notice = 'Periodic_Table_Logger';
  console.log({
    type,
    notice,
    ...event,
  });
}

export default logger;
