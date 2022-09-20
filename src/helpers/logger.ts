export const logger = (event: any): null => {
  if (!event) return null;
  const type = event.type ? event.type : 'Info';
  const notice = 'Periodic_Table_Logger';
  console.log({
    type,
    notice,
    ...event,
  });
  return null;
};

export default logger;
