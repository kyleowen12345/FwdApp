import { FlexAlignType, FlexStyle, StyleProp } from "react-native";


export interface IDefaultWrapper {
    height?: number | string | undefined;
    width?: number | string | undefined;
    justifyContent?: FlexStyle["justifyContent"] | undefined;
    paddingX?: number | string | undefined;
    paddingY?: number | string | undefined;
    alignItems?: FlexAlignType | undefined;
    style?: ViewStyle;
    children?: any;
}
