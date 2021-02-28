
export const StringUtils = {
    leftPad(str: string, len: number = 0, ch: any = ' ') {
        str = String(str);
        ch = this.toString(ch);
        let i = -1;
        const length = len - str.length;

        while (++i < length && str.length + ch.length <= len) {
            str = ch + str;
        }

        return str;
    },

    toString(value: number | string) {
        return `${value}`;
    }
}