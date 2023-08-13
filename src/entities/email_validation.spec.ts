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

  test('should not accept local part larger than 64 chars', () => {
    const email = 'l'.repeat(65) + '@gmail.com';
    expect(emailValidate(email)).toBeFalsy();
  })

  test('should not accept string part larger than 320 chars', () => {
    const email = 'c'.repeat(64) + '@' + 'g'.repeat(300) + '.com';
    expect(emailValidate(email)).toBeFalsy();
  })
})
