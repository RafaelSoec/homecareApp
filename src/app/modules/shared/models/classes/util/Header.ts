export class Header {
  title: string = null;
  goBack?: Function = null;
  firstIcon?: HeaderIcon = null;
  secondIcon?: HeaderIcon = null;
  showMenuIcon?: boolean = true;

  constructor() {}

  builder() {
    let title: string;
    let goBack: Function;
    let firstIcon: HeaderIcon;
    let secondIcon: HeaderIcon;
    let showMenuIcon: boolean = true;

    return {
      title(title1: string) {
        title = title1;
        return this;
      },
      goBack(goBack1: Function) {
        goBack = goBack1;
        return this;
      },
      firstIcon(firstIcon1: HeaderIcon) {
        firstIcon = firstIcon1;
        return this;
      },
      secondIcon(secondIcon1: HeaderIcon) {
        secondIcon = secondIcon1;
        return this;
      },
      showMenuIcon(showMenuIcon1: boolean) {
        showMenuIcon = showMenuIcon1;
        return this;
      },
      build: function () {
        let header = new Header();
        header.title = title;
        header.goBack = goBack;
        header.firstIcon = firstIcon;
        header.secondIcon = secondIcon;
        header.showMenuIcon = showMenuIcon;

        return header;
      },
    };
  }
}

export class HeaderIcon {
  name: string;
  callback: Function;
  show: boolean;

  constructor(name: string, callback?: Function, el?: any) {
    this.name = name;
    this.callback = callback.bind(el);
    this.show = this.name ? true : false;
  }
}
