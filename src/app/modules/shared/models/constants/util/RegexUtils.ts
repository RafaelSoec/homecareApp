export const RegexUtils = {
  REGEX_TEXT: /^[0-9]/i,
  REGEX_NUMBER: /[0-9]/i,
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
