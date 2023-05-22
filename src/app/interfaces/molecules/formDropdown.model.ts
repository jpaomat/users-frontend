export interface FormDropdownProps {
    name: string;
    placeholder?: string;
    buttonText: string;
    inputValue?: string;
    onCloseForm?: () => void;
    getFormFields: Function;
}
