import {
  ZodError,
  z
} from "./chunk-PKFY2RUX.js";

// node_modules/.pnpm/@namnguyen191+types-helper@1.0.0-1_@swc+helpers@0.5.13_zod@3.23.8/node_modules/@namnguyen191/types-helper/src/lib/zod-types/custom-zod-types.js
var ZodNonEmptyPrimitive = z.union([z.string(), z.number(), z.boolean(), z.bigint(), z.symbol()]);
var ZodObjectType = z.record(z.string(), z.any(), {
  invalid_type_error: "must be an object with key-value"
});

// node_modules/.pnpm/@namnguyen191+types-helper@1.0.0-1_@swc+helpers@0.5.13_zod@3.23.8/node_modules/@namnguyen191/types-helper/src/lib/zod-types/utils.js
var parseZodWithDefault = (zodType, val, defaultVal) => {
  try {
    const result = zodType.parse(val);
    return result;
  } catch (error) {
    if (error instanceof ZodError) {
      console.warn(`Receiving: ${JSON.stringify(val)} which is an invalid option: ${error.message}. The default value: ${JSON.stringify(defaultVal)} will be used instead.`);
    } else {
      console.warn(`An unknown error has occured while trying to interpolate ${JSON.stringify(val)}. The default value: ${JSON.stringify(defaultVal)} will be used instead.`);
    }
    return defaultVal;
  }
};

// node_modules/.pnpm/@namnguyen191+dui-carbon-components@0.0.0-7_@angular+common@18.2.4_@angular+core@18.2.4_rxjs@_fapjxyjpwbhfwhmqy3rhk5heby/node_modules/@namnguyen191/dui-carbon-components/fesm2022/namnguyen191-dui-carbon-components-shared.mjs
var CarbonButtonSymbol = Symbol("CarbonButton");
var CarbonTableSymbol = Symbol("CarbonTable");
var CarbonTextCardSymbol = Symbol("CarbonTextCard");

export {
  ZodNonEmptyPrimitive,
  ZodObjectType,
  parseZodWithDefault,
  CarbonButtonSymbol,
  CarbonTableSymbol,
  CarbonTextCardSymbol
};
