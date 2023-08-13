import { emailValidate } from './email';

describe('Email validation', () => {
  test('should not accept null string', () => {
    const email = null;
    expect(emailValidate(email)).toBeFalsy();
  })

  test('should not accept empty string', () => {
    const email: string = '';
    expect(emailValidate(email)).toBeFalsy();
  })

  test('should not accept valid string', () => {
    const email = 'any@gmail.com';
    expect(emailValidate(email)).toBeTruthy();
  })
})
