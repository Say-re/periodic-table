import logger from '../../src/helpers/logger';

describe('src/helpers/logger.ts', () => {
  it('Verifies null response if no event provided to logger', () => {
    const response = logger(null);
    expect(response).toEqual(null);
  });
  it('Verified successful logging of event', () => {
    const spy = jest.spyOn(console, 'log');
    logger({
      type: 'error',
      message: 'Some error occurred!',
    });
    expect(spy).toHaveBeenCalledWith({ message: 'Some error occurred!', notice: 'Periodic_Table_Logger', type: 'error' });
  });
});
