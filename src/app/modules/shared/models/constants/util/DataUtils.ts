import * as moment from 'moment';

export const DataUtils = {
  getData(data: any): Date {
    if (data != null) {
      moment.locale('pt-BR');
      return moment(data).toDate();
    }
    return data;
  },
  dataValid(data: any, format?: string): boolean {
    if (data != null) {
      moment.locale('pt-BR');
      if (format) {
        return moment(data, format).isValid();
      } else {
        if (moment(data).utc().isValid()) {
          return true;
        }
        return moment(data, 'DD/MM/YYYY').isValid();
      }
    } else {
      return false;
    }
  },
  dataConvertDateToString(data: any, format?: string): string {
    moment.locale('pt-BR');
    if (this.dataValid(data)) {
      if (format != null) {
        if (moment(data).utc().isValid()) {
          return moment(data).format(format);
        }
        return moment(data, 'DD/MM/YYYY').format(format);
      } else if (moment(data).utc().isValid()) {
        return moment(data).format('L');
      } else {
        return moment(data, 'DD/MM/YYYY').format('L');
      }
    }
  },
  dataConvertStringToDate(data: any, format?: string): Date {
    moment.locale('pt-BR');
    if (this.dataValid(data)) {
      if (format != null) {
        return moment(data, format).toDate();
      } else {
        return moment(data, 'DD/MM/YYYY').toDate();
      }
    }
  },
  diff(data: any, data2: any, type: 'years' | 'months' | 'days'): number {
    if (this.dataValid(data)) {
      return moment(data).diff(data2, type);
    }
  },
  add(date: any, value: number, type: 'years' | 'months' | 'days'): Date {
    if (this.dataValid(date)) {
      return moment(date).add(value, type).toDate();
    }
  },
  subtract(date: any, value: number, type: 'years' | 'months' | 'days'): Date {
    if (this.dataValid(date)) {
      return moment(date).subtract(value, type).toDate();
    }
  },
};
