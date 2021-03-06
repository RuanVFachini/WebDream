import { SelectModel } from "../models/style.models";

export class CssValues {
    flexDirection: SelectModel[] = [
        new SelectModel("Linha", "row"),
        new SelectModel("Linha reversao", "row-reverse"),
        new SelectModel("Coluna", "column"),
        new SelectModel("Coluna reversao", "column-reverse"),
    ];
    justifyContent: SelectModel[] = [
        new SelectModel("Centro", "center"),
        new SelectModel("Fim", "flex-end"),
        new SelectModel("Inicio", "flex-start"),
        new SelectModel("Espacemento entre", "space-between"),
        new SelectModel("Espacemento uniforme", "space-evenly")
    ];

    alignItems: SelectModel[] = [
        new SelectModel("Centro", "center" ),
        new SelectModel("Esticado", "stretch" ),
        new SelectModel("Fim", "flex-end"),
        new SelectModel("Inicio", "flex-start"),
        new SelectModel("Linha de texto", "baseline")
    ];

    units: SelectModel[] = [
        new SelectModel("%", "%" ),
        new SelectModel("Px", "px" )
    ];

    fontUnits : SelectModel[] = [
        new SelectModel("%", "%" ),
        new SelectModel("Pt", "pt" )
    ];

    fonts: SelectModel[] = [
        new SelectModel('Blink Mac', 'BlinkMacSystemFont'),
        new SelectModel('Segoe UI', 'Segoe UI'),
        new SelectModel('Roboto', 'Roboto'),
        new SelectModel('Helvetica Neue', 'Helvetica Neue'),
        new SelectModel('Arial', 'Arial'),
        new SelectModel('Noto Sans', 'Noto Sans'),
        new SelectModel('Sans Serif', 'sans-serif'),
        new SelectModel('Apple Color Emoji', 'Apple Color Emoji'),
        new SelectModel('Segoe UI Emoji', 'Segoe UI Emoji'),
        new SelectModel('Segoe UI Symbol', 'Segoe UI Symbol'),
        new SelectModel('Noto Color Emoji', 'Noto Color Emoji')
    ];

    fontStyle: SelectModel[] = [
        new SelectModel('Normal', 'normal'),
        new SelectModel('Italico', 'italic'),
        new SelectModel('Oblíquo', 'oblique'),
        new SelectModel('Inicial', 'initial'),
        new SelectModel('Do Pai', 'inherit'),
    ];

    backgroundPosition: SelectModel[] = [
        new SelectModel('Esquerda-Cima', 'left top'),
        new SelectModel('Esquerda-Centro', 'left center'),
        new SelectModel('Esquerda-Baixo', 'left bottom'),
        new SelectModel('Direita-Cima', 'right top'),
        new SelectModel('Direita-Centro', 'right center'),
        new SelectModel('Direita-Baixo', 'right bottom'),
        new SelectModel('Centro-Cima', 'center top'),
        new SelectModel('Centro-Centro', 'center center'),
        new SelectModel('Centro-Baixo', 'center bottom'),
        new SelectModel('Inicial', 'initial'),
        new SelectModel('Do Pai', 'inherit')
    ];

    backgroundSize: SelectModel[] = [
        new SelectModel('Automatico', 'auto'),
        new SelectModel('Cobrir', 'cover'),
        new SelectModel('Contendo', 'contain'),
        new SelectModel('Inicial', 'initial'),
        new SelectModel('Do Pai', 'inherit')
    ];

    backgroundRepeat: SelectModel[] = [
        new SelectModel('Repetir', 'repeat'),
        new SelectModel('Repetir-Horizontal', 'repeat-x'),
        new SelectModel('Repetir-Vertical', 'repeat-y'),
        new SelectModel('Não Repetir', 'no-repeat'),
        new SelectModel('Espaço', 'space'),
        new SelectModel('Contorno', 'round'),
        new SelectModel('Inicial', 'initial'),
        new SelectModel('Do Pai', 'inherit')
    ];
}
