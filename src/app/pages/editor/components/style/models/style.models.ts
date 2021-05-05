export class SelectModel{
    label: string;
    value: string;

    constructor(label: string, value: string) {
        this.label = label;
        this.value = value;
    }
}

export class CssStyle
{
    flexDirection: string;
    justifyContent: string;
    alignItems: string;
    width: number = 0;
    widthUnit: string;
    widthPercent: number = 0;
    height: number = 0;
    heightUnit: string;
    heightPercent: number = 0;
    fontFamily: string;
    fontColor: string;
    fontSize: number = 0;
    fontSizePercent: number = 0;
    fontSizeUnit: string;
    fontStyle: string;
    marginTop: number = 0;
    marginTopUnit: string;
    marginBottom: number = 0;
    marginBottomUnit: string;
    marginLeft: number = 0;
    marginLeftUnit: string;
    marginRight: number = 0;
    marginRightUnit: string;
    paddingTop: number = 0;
    paddingTopUnit: string;
    paddingBottom: number = 0;
    paddingBottomUnit: string;
    paddingLeft: number = 0;
    paddingLeftUnit: string;
    paddingRight: number = 0;
    paddingRightUnit: string;
    backgroundImage: string;
    backgroundPosition: string;
    backgroundSize: string;
    backgroundRepeat: string;
}