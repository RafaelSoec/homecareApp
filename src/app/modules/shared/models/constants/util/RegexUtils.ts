export const RegexUtils = {
  REGEX_MAIL: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,

  testRegex(regex: RegExp, value: string): boolean {
    return regex.test(value);
  },

  testMail(mail: string): boolean {
    if (!mail) {
      return true;
    }

    return this.REGEX_MAIL.test(mail);
  },
};
