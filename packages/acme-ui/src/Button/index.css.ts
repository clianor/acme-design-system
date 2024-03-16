import { vars } from "@acme/themes";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    color: vars.colors.scale.blue[8],
    border: `1px solid ${vars.colors.scale.gray[2]}`,
    padding: 10,
    borderRadius: 10,
    ":hover": {
      color: vars.colors.scale.blue[12],
      backgroundColor: vars.colors.scale.gray[4],
    },
  },
  variants: {
    size: {
      "1": {
        fontSize: 12,
      },
      "2": {
        fontSize: 14,
      },
      "3": {
        fontSize: 16,
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
