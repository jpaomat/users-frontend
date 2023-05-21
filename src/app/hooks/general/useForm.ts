import { FormEvent, useState } from 'react';

export const useForm = (initialForm: any) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = (event: FormEvent<HTMLInputElement>) => {
        const {name, value} = event.target as HTMLInputElement;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onReset = () => {
        setFormState(initialForm);
    };

    return {
        formState,
        onInputChange,
        onReset
    };
};
