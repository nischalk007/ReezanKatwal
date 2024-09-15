import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "./components/Input";
import FormRadio from "./components/FormRadio";

// Define the validation schema for the form using Yup
const schema = Yup.object().shape({
  name: Yup.string().label("Name").required("Category name is required."),
  radio: Yup.string().label("Radio"),
});

// Define the type for the form fields based on the Yup schema
type FormFields = Yup.InferType<typeof schema>;

const Form = () => {
  // Initialize the form methods using react-hook-form
  const methods = useForm<FormFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* Input field */}
          <FormInput
            name="name"
            label="Category Name"
            className="input-field mb-2 pb-1"
          />

          {/* Radio Field */}
          <FormRadio
								name="radio"
								hidden="true"
								options={[
									{ value: 'General User', label: 'Registered User' },
									{
										value: 'Athletic Earners',
										// icon: {Crown},
										// @ts-expect-error Third-party library with type issues
										label: (
											<span>
												Athletic Earners
											</span>
										),
									},
								]}
								// Icon={Crown}
							/>          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
