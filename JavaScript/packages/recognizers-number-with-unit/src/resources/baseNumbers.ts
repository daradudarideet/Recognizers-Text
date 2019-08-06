// ------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// ------------------------------------------------------------------------------

export namespace BaseNumbers {
    export const NumberReplaceToken = '@builtin.num';
    export const FractionNumberReplaceToken = '@builtin.num.fraction';
    export const IntegerRegexDefinition = (placeholder: string, thousandsmark: string) => { return `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!(\\d+\\.|\\d+,))))\\d{1,3}(${thousandsmark}\\d{3})+(?=${placeholder})`; }
    export const DoubleRegexDefinition = (placeholder: string, thousandsmark: string, decimalmark: string) => { return `(((?<!\\d+\\s*)-\\s*)|((?<=\\b)(?<!\\d+\\.|\\d+,)))\\d{1,3}(${thousandsmark}\\d{3})+${decimalmark}\\d+(?=${placeholder})`; }
    export const PlaceHolderDefault = '\\D|\\b';
    export const NumberMultiplierRegex = `(K|k|M|G|T|B|b)`;
    export const MultiplierLookupRegex = `(k|m|t|g|b)`;
    export const CurrencyRegex = `(((?<=\\W|^)-\\s*)|(?<=\\b))\\d+\\s*(b|m|t|g)(?=\\b)`;
}
