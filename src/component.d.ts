import { EventEmitter, ElementRef } from '@angular/core';
import 'brace';
import 'brace/theme/monokai';
import 'brace/mode/html';
export declare class AceEditorComponent {
    textChanged: EventEmitter<{}>;
    style: any;
    _options: any;
    _readOnly: boolean;
    _theme: string;
    _mode: string;
    _autoUpdateContent: boolean;
    _editor: any;
    _durationBeforeCallback: number;
    oldText: any;
    timeoutSaving: any;
    constructor(elementRef: ElementRef);
    init(): void;
    initEvents(): void;
    options: any;
    setOptions(options: any): void;
    readOnly: any;
    setReadOnly(readOnly: any): void;
    theme: any;
    setTheme(theme: any): void;
    mode: any;
    setMode(mode: any): void;
    text: any;
    setText(text: any): void;
    autoUpdateContent: any;
    setAutoUpdateContent(status: any): void;
    durationBeforeCallback: number;
    setDurationBeforeCallback(num: number): void;
    getEditor(): any;
}
