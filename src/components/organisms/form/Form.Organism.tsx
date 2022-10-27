import React from 'react';
import { Form, FormControlType } from '../../../types/content/sanity.content';
import Button from '../../atoms/formcontrols/Button.Atom';
import RadioButton from '../../atoms/formcontrols/RadioButton.Atom';
import ComboBox from '../../molecules/formcontrols/ComboBox.Molecule';

const FieldToComponentsMap: Record<FormControlType, any> = {
  [FormControlType.MULTISELECT]: (props: any) => <ComboBox {...props} />,
  [FormControlType.RADIO]: (props: any) => <RadioButton {...props} />,
  [FormControlType.TEXTAREA]: (props: any) => <RadioButton {...props} />,
  [FormControlType.TEXTINOUT]: (props: any) => <RadioButton {...props} />,
  [FormControlType.CHECKBOX]: (props: any) => <RadioButton {...props} />,
  [FormControlType.SINGLESELECT]: (props: any) => <ComboBox {...props} />,
};

interface FormProps {
  form: Form;
  onSubmit: Function;
}

const FormBuilder = ({ form, onSubmit }: FormProps) => {
  return (
    <>
      <div className="flex-col space-y-5">
        {form.formControls.map((formControl) => {
          const formFieldType = formControl.type;
          const componentToRender = FieldToComponentsMap[formFieldType];
          const formControlProps = {
            name: formControl.name,
            label: formControl.label,
            options: formControl.options,
            placeholder: formControl.placeholder,
          };
          return componentToRender(formControlProps);
        })}
      </div>
      <div className="flex justify-center mt-6">
        <Button text={form.button.text} onClick={onSubmit}></Button>
      </div>
    </>
  );
};

export default FormBuilder;
