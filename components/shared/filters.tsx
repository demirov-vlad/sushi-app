import React from "react";
import { Title, FilterCheckbox, RangeSlider } from "@/components/shared";
import { Input } from "@/components/ui";
import { CheckboxFiltersGroup } from "@/components/shared/checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-extrabold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Can builb" value="1" />
        <FilterCheckbox text="New items" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-extrabold mb-3">Price from...to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={500}
            defaultValue={0}
          />
          <Input type="number" placeholder="500" min={50} max={500} />
        </div>
        <RangeSlider min={0} max={500} step={10} value={[0, 500]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingridients"
        items={[
          {
            text: "Rice",
            value: "1",
          },
          {
            text: "Philadelphia",
            value: "2",
          },
          {
            text: "Cucumber",
            value: "3",
          },
          {
            text: "Mayonnaise",
            value: "4",
          },
          {
            text: "Salmon",
            value: "5",
          },
          {
            text: "Shrimps",
            value: "6",
          },
          {
            text: "Rice",
            value: "7",
          },
          {
            text: "Philadelphia",
            value: "8",
          },
          {
            text: "Cucumber",
            value: "9",
          },
          {
            text: "Mayonnaise",
            value: "10",
          },
          {
            text: "Salmon",
            value: "11",
          },
          {
            text: "Shrimps",
            value: "12",
          },
        ]}
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: "Rice",
            value: "1",
          },
          {
            text: "Philadelphia",
            value: "2",
          },
          {
            text: "Cucumber",
            value: "3",
          },
          {
            text: "Mayonnaise",
            value: "4",
          },
          {
            text: "Salmon",
            value: "5",
          },
          {
            text: "Shrimps",
            value: "6",
          },
        ]}
      />
    </div>
  );
};
