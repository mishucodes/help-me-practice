import {SearchIcon} from "lucide-react";
import {Field} from "@/components/ui/field";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group";
//Content:
import {searchPlaceholder} from "#/content/header";

export function SearchBox()
{
  return (
    <Field className="col-span-full row-start-2 md:col-span-1 md:row-start-auto">
      <InputGroup>
        <InputGroupInput id="inline-start-input" placeholder={searchPlaceholder} />
        <InputGroupAddon align="inline-start">
          <SearchIcon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}