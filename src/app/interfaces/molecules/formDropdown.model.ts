export interface FormDropdownProps {
    name: string;
    placeholder: string;
    buttonText: string;
    onCloseForm?: () => void;
    getFormFields: Function;
}
