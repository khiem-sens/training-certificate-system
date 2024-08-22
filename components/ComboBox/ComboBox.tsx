import React from "react";
import {
  ComboBox as AriaComboBox,
  Input,
  Label,
  ListBox,
  Popover,
  Button,
  ListBoxItem,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const comboBoxStyles = tv({
  base: "flex flex-col",
  variants: {
    isRequired: {
      true: "required",
    },
  },
});

interface ComboBoxProps {
  label: string;
  items: string[];
  id: string;
  isRequired?: boolean;
}

const ComboBox: React.FC<ComboBoxProps> = ({
  label,
  items,
  id,
  isRequired = false,
}) => {
  return (
    <AriaComboBox className={twMerge(comboBoxStyles({ isRequired }))}>
      <Label className="font-bold text-zinc-800 flex items-center gap-1">
        {label}
        {isRequired && <span className="text-orange-700 opacity-70">*</span>}
      </Label>
      <div className="relative">
        <Input
          id={id}
          className="w-full border border-[#DDDDDD] rounded bg-white text-zinc-800 p-2 pr-8"
          placeholder="Choose"
        />
        <Button className="absolute inset-y-0 right-0 flex items-center px-2 border-l gap-2 w-7 justify-center">
          <img src="/icons/caret-down.svg" alt="" aria-hidden="true" />
        </Button>
      </div>
      <Popover className="z-10">
        <ListBox className="mt-1 max-h-60 w-full overflow-auto rounded border border-zinc-300 bg-white shadow-lg">
          {items.map((item) => (
            <ListBoxItem
              key={item}
              className={({ isFocused, isSelected }) =>
                twMerge(
                  "px-4 py-2 cursor-pointer select-none",
                  isFocused && "bg-zinc-100",
                  isSelected && "bg-zinc-200 font-medium"
                )
              }
            >
              {item}
            </ListBoxItem>
          ))}
        </ListBox>
      </Popover>
    </AriaComboBox>
  );
};

export default ComboBox;
