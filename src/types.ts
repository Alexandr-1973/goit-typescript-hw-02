import { FormEvent } from "react";

export type OnSubmit = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export interface FotosInterface {
  id: string;
  urls: {
    small: string;
    regular: string;
    [x: string]: any;
  };
  alt_description: string;
  [y: string]: any;
}
