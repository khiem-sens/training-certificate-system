import { TextField, Label, Input } from "react-aria-components";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const textFieldStyles = tv({
  base: "flex flex-col",
  variants: {
    isRequired: {
      true: "required",
    },
  },
});

const labelStyles = tv({
  base: "font-bold text-zinc-800 flex items-center gap-1",
});

const inputStyles = tv({
  base: "mt-1 p-2 border border-zinc-300 rounded bg-white text-zinc-800",
});

interface CustomTextFieldProps {
  label: string;
  id?: string;
  isRequired?: boolean;
  className?: string;
}

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  id,
  isRequired = false,
  className,
  ...props
}) => (
  <TextField
    className={twMerge(textFieldStyles({ isRequired }), className)}
    {...props}
  >
    <Label className={labelStyles()}>
      {label}
      {isRequired && <span className="text-orange-700 opacity-70">*</span>}
    </Label>
    <Input id={id} className={inputStyles()} placeholder="Type here" />
  </TextField>
);
