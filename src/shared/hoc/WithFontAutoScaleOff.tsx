import { Text as TextRN, TextProps, TextInput as TextInputRN, TextInputProps } from "react-native"; 

export const Text = (props: TextProps) => {
  return <TextRN {...props} allowFontScaling={false} />;
};

export const TextInput = (props: TextInputProps) => {
    return <TextInputRN {...props} allowFontScaling={false}/>
};
