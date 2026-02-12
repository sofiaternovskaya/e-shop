import { useActionState, useState } from "react";
import { RadioGroup, Input, Radio, Label } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const deliveryValues = {
  dhl: "dhl",
  ups: "ups",
  post: "post",
} as const;

type CheckoutFormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  delivery: (typeof deliveryValues)[keyof typeof deliveryValues];
};

type FormState = {
  firstName?: string;
  lastName?: string;
  email?: string;
} | null;

const DELIVERY_OPTIONS = [
  {
    value: deliveryValues.dhl,
    label: "DHL 2-3 days",
  },
  {
    value: deliveryValues.ups,
    label: "UPS 5-6 days",
  },
  {
    value: deliveryValues.post,
    label: "National Post 7-10 days",
  },
];

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  delivery: deliveryValues.dhl,
};

const validateForm = (queryData: FormData) => {
  const firstName = queryData.get("firstName")?.toString() ?? "";
  const lastName = queryData.get("lastName")?.toString() ?? "";
  const email = queryData.get("email")?.toString() ?? "";

  let newState = {};

  if (firstName.length === 0) {
    newState = { ...newState, firstName: "This field is required" };
  }

  if (lastName.length === 0) {
    newState = { ...newState, lastName: "This field is required" };
  }

  if (email.length === 0) {
    newState = { ...newState, email: "This field is required" };
  }

  if (email.length && !email.includes("@")) {
    return { ...newState, email: "Please check the email" };
  }

  return newState;
};

export const Checkout = () => {
  const [formState, setFormState] = useState<CheckoutFormData>(initialState);

  const submitForm = async (prevState: FormState, queryData: FormData) => {
    const errors = validateForm(queryData);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    if (Object.values(errors).length === 0) {
      setFormState(initialState);

      alert("Order submitted!");
    }

    return errors;
  };

  const [errors, formAction, isPending] = useActionState<FormState, FormData>(
    submitForm,
    null,
  );

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const onRadioChange = (
    value: (typeof deliveryValues)[keyof typeof deliveryValues],
  ) => {
    setFormState((state) => ({
      ...state,
      delivery: value,
    }));
  };

  return (
    <div>
      <form action={formAction}>
        <div className="flex flex-col">
          <Input
            name="firstName"
            placeholder="First Name"
            value={formState.firstName}
            onChange={onInputChange}
          />
          {errors?.firstName && errors.firstName}
          <Input
            name="lastName"
            placeholder="Last Name"
            value={formState.lastName}
            onChange={onInputChange}
          />
          {errors?.lastName && errors.lastName}
          <Input
            name="email"
            placeholder="email"
            value={formState.email}
            onChange={onInputChange}
          />
          {errors?.email && errors.email}
          <Input
            name="address"
            placeholder="Address"
            value={formState.address}
            onChange={onInputChange}
          />
          <RadioGroup value={formState.delivery} onChange={onRadioChange}>
            {DELIVERY_OPTIONS.map((item) => (
              <Radio
                key={item.value}
                value={item.value}
                className="group flex items-center gap-2 hover:cursor-pointer"
              >
                <CheckCircleIcon className="size-4 fill-black invisible transition group-data-checked:visible" />
                <Label>{item.label}</Label>
              </Radio>
            ))}
          </RadioGroup>

          <button disabled={isPending} type="submit">
            {isPending ? "Loading" : "Place order"}
          </button>
        </div>
      </form>
    </div>
  );
};
