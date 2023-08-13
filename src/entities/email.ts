// export class Email {
//   static validate (email: string) {
//     return false;
//   }
// }
export function emailValidate (email: string): boolean {
  if (!email) {
    return false;
  }
  return true;
}
